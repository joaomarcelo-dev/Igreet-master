import './style.scss';
import { FormEvent, useState } from "react"
import Header from "../../../components/Header"
import patientsServer from '../../../server/patientes.server';
import localStorageUtils from '../../../utils/localStorage.utils';
import formatInputUtils from '../../../utils/formatInput.utils';
import SweetAlert from '../../../components/SweetAlert/SweetAlert';

export default function NewPatient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cpf: '',
    birthDate: '',
    address: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorageUtils.token.get();

    const { data, status } = await patientsServer.createPatient({
      address: formData.address,
      birthDate: formData.birthDate,
      cpf: formData.cpf,
      name: formData.name,
      phone: formatInputUtils.formatInputPhoneFromVenom(formData.phone) || formData.phone,
    }, token);

    if (status == 200) {
      SweetAlert().success('Sucesso', 'Paciente criado com sucesso!');
    } else (
      SweetAlert().error('Erro', 'Ocorreu um erro ao criar o paciente')
    )
    
    console.log(data, status);
    
  }
  
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    });
  }


  const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
    const { value, name } = e.currentTarget;
    

    setFormData({
      ...formData,
      [name]: value
    });
    
  }

  const submitIsValide = formData.name !== '' && formData.phone !== '' && formData.cpf !== '' && formData.birthDate !== '' && formData.address !== '';

  return (
    <>
      <Header />

      <div className="content-page-new-patient">
        <h1
          className="title-page"
        >
          Novo paciente
        </h1>

        <form
          onSubmit={handleSubmit}
          className='form-new-patient'
        >
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
                value={formData.name}
              />
            </div>
          </div>

          <div className="mb-3">
            <label
              className="form-label"
            >
              Numero de telefone:
            </label>
            <div
              className="input-group"
            >
              <input
                name='phone'
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                onChange={handleChange}
                maxLength={15}
                value={
                  formatInputUtils.formatNumberPhone(formData.phone)
                }
              />
            </div>
          </div>

          <div className="mb-3">
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
                  formatInputUtils.formatInputCpf(formData.cpf)
                }
              />
            </div>
          </div>

          <div className="mb-3">
            <label
              className="form-label"
            >
              Data de nascimento:
            </label>
            <div
              className="input-group"
            >
              <input
                name='birthDate'
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                maxLength={10}
                onChange={handleChange}
                value={
                  formatInputUtils.formatInputDate(formData.birthDate)
                }
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
            type="submit"
            className="btn btn-primary mt-3"
            disabled={!submitIsValide}
          >
            Salvar
          </button>
        </form>
      </div>
    </>
  )
}