import express from 'express';
import serviceRouter from './router/service.router';
import cors from 'cors';
// import '../schedule';
import appointmentsRouter from './router/appointments.router';
import patientRouter from './router/patient.router';

const app = express();
app.use(express.json());
app.use(cors({
  methods: [ 'GET', 'POST', 'PUT', 'UPDATE' ],
  origin: '*'
}))

app.get('/', (req, res) => {
 return res.json({ message: 'Hello World' });
})

app.use('/service', serviceRouter);
app.use('/appointment', appointmentsRouter);
app.use('/patient', patientRouter);

export {
  app,
}