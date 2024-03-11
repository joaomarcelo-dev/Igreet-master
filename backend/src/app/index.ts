import express from 'express';
import serviceRouter from './router/service.router';
import cors from 'cors';
import '../schedule';
import appointmentsRouter from './router/appointments.router';
import patientRouter from './router/patient.router';
import admsRouter from './router/adms.router';
import loginRouter from './router/login.router';

const app = express();
app.use(express.json());
app.use(cors({
  methods: [ 'GET', 'POST', 'PUT', 'UPDATE' ],
  origin: [ 'http://localhost:3000', 'https://igreet-master-dtw8.vercel.app/', '*'],
}))

app.get('/', (req, res) => {
 return res.json({ message: 'Hello World' });
})

app.use('/service', serviceRouter);
app.use('/appointment', appointmentsRouter);
app.use('/patient', patientRouter);
app.use('/adms', admsRouter);
app.use('/login', loginRouter);

export {
  app,
}