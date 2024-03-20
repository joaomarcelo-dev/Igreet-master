import express from 'express';
import serviceRouter from './router/service.router';
import cors from 'cors';
import '../schedule';
import appointmentsRouter from './router/appointments.router';
import patientRouter from './router/patient.router';
import admsRouter from './router/adms.router';
import loginRouter from './router/login.router';
import daysOfAtendenceRouter from './router/daysOfAtendence.router';

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD', 'PATCH', 'CONNECT', 'TRACE', 'PURGE', 'LINK', 'UNLINK', 'COPY', 'LOCK', 'UNLOCK', 'VIEW'],
}));

app.get('/', (req, res) => {
 return res.json({ message: 'Hello World' });
})

app.use('/service', serviceRouter);
app.use('/appointment', appointmentsRouter);
app.use('/patient', patientRouter);
app.use('/adms', admsRouter);
app.use('/login', loginRouter);
app.use('/days-of-atendence', daysOfAtendenceRouter);

export {
  app,
}