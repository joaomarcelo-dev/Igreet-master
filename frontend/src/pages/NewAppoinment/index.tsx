import { FormEvent, useEffect, useState } from 'react';
import './style.scss';
import {  useParams } from "react-router-dom";
import serviceServer from '../../server/service.server';
import formatInputUtils from '../../utils/formatInput.utils';

export default function NewAppoinment() {
  const { id } = useParams();
  const [appoinment, setAppoinment] = useState({});
  const [dataForm, setDataForm] = useState({
    name: '',
    cpf: '',
    dateOfBirth: '',
    address: ''
  })

  useEffect(() => {
    const getService = async () => {
      if (id) {
        const response  = await serviceServer.getServerById(id);
        setAppoinment(response);
        console.log(response);
      }
    }

    getService();
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(dataForm);
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

  return (
    <div
      id="content-page-new-appoinment"
    >
      {
        !appoinment ?
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