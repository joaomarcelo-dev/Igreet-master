import { FormEvent, useEffect, useState } from 'react';
import './style.scss';
import {  useParams } from "react-router-dom";
import serviceServer from '../../server/service.server';
import formatInputUtils from '../../utils/formatInput.utils';
import SweetAlert from '../../components/SweetAlert/SweetAlert';
import appointmentServer from '../../server/appointment.server';

export default function NewAppoinment() {
  const { id } = useParams();
  const [appoinment, setAppoinment] = useState({});
  const [dataForm, setDataForm] = useState({
    name: '',
    cpf: '',
    dateOfBirth: '',
    address: ''
  })

  const date = new Date();

  useEffect(() => {
    const getService = async () => {
      if (id) {
        const response  = await serviceServer.getServerById(id);
        setAppoinment(response);
      }
    }

    getService();
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) return;

    const response = await appointmentServer.createAppointment({
      address: dataForm.address,
      birthDate: dataForm.dateOfBirth,
      cpf: dataForm.cpf,
      date: date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString(),
      hour: date.getHours().toString() + ':' + date.getMinutes().toString(),
      name: dataForm.name,
      serviceId: id
    });

    console.log(response);
    

    if (response.status !== 201) {
      SweetAlert().error('Erro', 'Ocorreu um erro ao agendar a sua consulta');
    } else {
      SweetAlert().success('Agendado!', 'Sua consulta foi agendada com sucesso!');
    }

  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  }

  const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  }

  const submitIsDisabled = dataForm.address && dataForm.cpf && dataForm.dateOfBirth && dataForm.name ? false : true;

  console.log();
  

  return (
    <div
      id="content-page-new-appoinment"
    >
      {
        !Object.keys(appoinment).length ?
        <section
          id='content-not-appoinment'
          className='flex_center'
        >
          <div>
            <h2>Aparentemente você não fez nenhum atendimento via whatsapp</h2>
          </div>
        </section>
        :
        <>
          <form
            id='form-argend-service'
            onSubmit={handleSubmit}
          >
            <h4
              id='title-form-argend-service'
            >
              Preencha o formulário para marcar a sua consulta
            </h4>
            <div className="mb-3">
              <label
                className="form-label"
              >
                Nome:
              </label>
              <div
                className="input-group"
              >
                <input
                  name='name'
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                  onChange={handleChange}
                  value={dataForm.name}
                />
              </div>
            </div>


            <div
              className="mb-3"
            >
              <label
                className="form-label"
              >
                CPF:
              </label>
              <div
                className="input-group"
              >
                <input
                  name='cpf'
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                  onChange={handleChange}
                  maxLength={14}
                  value={
                    formatInputUtils.formatInputCpf(dataForm.cpf)
                  }
                />
              </div>
            </div>

            <div
              className="mb-3"
            >
              <label
                className="form-label"
              >
                Data de Nascimento:
              </label>
              <div
                className="input-group"
              >
                <input
                  name='dateOfBirth'
                  type="date"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                  onChange={handleChange}
                  value={dataForm.dateOfBirth}
                />
              </div>
            </div>

            <select
              className="form-select mt-3"
              aria-label="Default select example"
              name='address'
              onChange={handleSelect}
            >
              <option
                selected
                value=''
              >
                Selecione seu povoado
              </option>

              <option
                value='pov. boa vista do cassiano'
              >
                Pov. boa Vista do Cassiano
              </option>
            </select>

            <button
              id='btn-submit-form-argend-service'
              type="submit"
              className="btn btn-success  btn-disabled-dark"
              disabled={submitIsDisabled}
            >
              Enviar
            </button>
          </form>
        </>
      }
    </div>
  )
}