import './style.scss';

import Header from "../../../components/Header";
import { useState } from 'react';
import daysOfAtendenceServer from '../../../server/daysOfAtendence.server';
import SweetAlert from '../../../components/SweetAlert/SweetAlert';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

export default function NewDayOfConsult() {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    hourStart: '',
    hourEnd: '',
    date: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (verificationFormData()) {
      const response  = await daysOfAtendenceServer.createDayOfAtendence(formData);
  
      if (response.status === 201) {
        SweetAlert().success('Concluido!', 'Consulta adicionada com sucesso!');
  
        setTimeout(() => {
          navigation('/list-days-of-consult')
        }, 1000);
  
        return;
      } else {
        SweetAlert().error('Erro!', 'Erro ao adicionar consulta!');
        return;
      }
    }

  }

  const submitIsDisabled = formData.title === '' || formData.date === '' || formData.hourStart === '' || formData.hourEnd === '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const verificationFormData = () => {
    if (formData.date < new Date().toLocaleDateString()) {
      SweetAlert().error('Erro!', 'Data não pode ser menor que a data atual!');
      return false;
    }

    if (formData.hourEnd < formData.hourStart) {
      SweetAlert().error('Erro!', 'Horario de fim não pode ser menor que o horario de inicio!');
      return false;
    }

    return true
  }

  return (
    <>
      <Header />
      <div className="content-new-atendence-page flex_center">
        <h4>Adicionar nova consulta</h4>

        <form
          className='form-add-new-day-atendence'
          onSubmit={handleSubmit}
        >
          <div
            className='mb-3'
          >
            <label
              className="form-label"
            >
              Titulo:
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name='title'
              onChange={handleSelect}
              value={formData.title}
            >

              <option
                selected
                value=''
              >
                Selecione o tipo de atendimento
              </option>

              <option
                selected
                value='Consulta Mádica'
              >
                Consulta Mádica
              </option>

              <option
                value='Atendimento com dentista'
              >
                Atendimento com dentista
              </option>
            </select>
          </div>

          <div
            className="mb-3"
          >
            <label
              className="form-label"
            >
              Data:
            </label>
            <div
              className="input-group"
            >
              <InputMask
                name='date'
                mask="99/99/9999"
                placeholder="DD/MM/AAAA"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                onChange={handleChange}
                value={formData.date}
              />
            </div>
          </div>


          <div
            className="mb-3"
          >
            <label
              className="form-label"
            >
              Inicio:
            </label>
            <div
              className="input-group"
            >
              <input
                name='hourStart'
                type="time"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                onChange={handleChange}
                value={formData.hourStart}
              />
            </div>
          </div>

          <div
            className="mb-3"
          >
            <label
              className="form-label"
            >
              Fim:
            </label>
            <div
              className="input-group"
            >
              <input
                name='hourEnd'
                type="time"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                onChange={handleChange}  
                value={formData.hourEnd}    
              />
            </div>
          </div>

          <button
            id='btn-submit-form-argend-service'
            type="submit"
            className="btn btn-success  btn-disabled-dark"
            disabled={submitIsDisabled}
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}