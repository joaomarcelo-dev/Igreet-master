import './style.scss';

import { PatientsType } from "../../types/Patients.type"
import formatInputUtils from '../../utils/formatInput.utils';

export default function CardPatients({ address, birthDate, cpf, name, phone }: PatientsType) {
  return (
    <div className="card-patient-container">
      <div className="card-patient">
        <h2 className='name-patient'>{ name }</h2>

        <div className='content-info-patient'>
          <span>CPF: { cpf }</span>
          <span>Telefone: { formatInputUtils.formatNumberPhoneVenom(phone) }</span>
          <span>Data de Nascimento: { birthDate }</span>
          <span>Endereço: { address }</span>
        </div>
      </div>
    </div>
  )
}