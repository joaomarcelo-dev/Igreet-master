import './style.scss';
import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import { PatientsType } from "../../types/Patients.type";
import patientsServer from "../../server/patientes.server";
import { optionsOfConsultedPatients } from '../../data';
import appointmentServer from '../../server/appointment.server';
import SweetAlert from '../../components/SweetAlert/SweetAlert';
import { useNavigate } from 'react-router-dom';

export default function AddNewAppoinment() {
  const [patients, setPatients] = useState<PatientsType[]>([]);
  const [formData, setFormData] = useState({
    patientId: '',
    typeOfConsultation: '',
    observation: '',
  });

  const date = new Date();
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {  
      const { data } = await patientsServer.getAllPatients();
      console.log(data);
      setPatients(data);
    }

    get();
  }, [])

  const handleSubmite = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // date, hour, patientId: patient.id

    const response = await appointmentServer.createAppointment({
      date: date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString(),
      hour: date.getHours().toString() + ':' + date.getMinutes().toString(),
      patientId: formData.patientId,
    });

    if (response.status !== 201) {
      SweetAlert().error('Erro', 'Ocorreu um erro ao agendar a sua consulta');
    } else {
      SweetAlert().success('Agendado!', 'Sua consulta foi agendada com sucesso!');
      setTimeout(() => navigate('/appoinments'), 1500)
    }
    

  }

  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const submitIsDisabled = !formData.patientId || !formData.typeOfConsultation;

  return (
    <>
      <Header />
      <div className="content-page-add-new-appoinment">
        <h1>Adicionar novo agendamento</h1>

        <form
          onSubmit={handleSubmite}
          className="form-add-new-appoinment"
        >
          <div>
              <label
                className="form-label"
              >
                Selecione o paciente
              </label>
            <select
              className="form-select mt-0"
              aria-label="Default select example"
              name='patientId'
              onChange={handleSelect}
            >
              <option
                selected
                value=''
              >
                Selecione o paciente
              </option>

              {
                patients.map((patient) => (
                  <option
                    key={patient.id}
                    value={patient.id}
                  >
                    {patient.name}
                  </option>
                ))
              }
            </select>
          </div>

          <div className='div-type-atendence'>
              <label
                className="form-label"
              >
                Selecione o tipo de atendimento
              </label>
            <select
              className="form-select mt-0"
              aria-label="Default select example"
              name='typeOfConsultation'
              onChange={handleSelect}
            >
              <option
                selected
                value=''
              >
                Selecione o atendimento
              </option>

              {
                optionsOfConsultedPatients.map((patient) => (
                  <option
                    key={patient}
                  >
                    {patient}
                  </option>
                ))
              }
            </select>
          </div>

          <div className='div-text-area-observation'>
            <label>
              Observação:
            </label>

            <textarea
              className='text-area-observation'
              onChange={handleChange}
              name='observation'
              value={formData.observation}
            />
          </div>

          <button
              id='btn-submit-form'
              type="submit"
              className="btn btn-success  btn-disabled-dark"
              disabled={submitIsDisabled}
            >
              Enviar
            </button>
        </form>
      </div>
    </>
  )
}