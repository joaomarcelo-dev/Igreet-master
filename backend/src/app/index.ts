import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import 'express-async-errors';
import appointmentRouter from './router/appointment.router';
import patientsRouter from './router/patients.router';
import daysOfAtendenceRouter from './router/daysOfAtendence.router';
import serviceRouter from './router/service.router';

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['*', 'https://igreet-master-dtw8.vercel.app/'],
  methods: [
    'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS',
    'HEAD', 'PATCH', 'CONNECT', 'TRACE', 'PURGE',
    'LINK', 'UNLINK', 'COPY', 'LOCK', 'UNLOCK', 'VIEW',
  ],
}));


app.use(async (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    return res.status(500).json({ message: 'Erro interno no servidor. Por favor tente mais tarde!' });
  }
  next();
})

app.get('/', (req, res) => {
 return res.json({ message: 'Hello World' });
})

app.use('/appointment', appointmentRouter);
app.use('/patient', patientsRouter);
app.use('/days-of-atendence', daysOfAtendenceRouter);
app.use('/service', serviceRouter);

export {
  app,
}