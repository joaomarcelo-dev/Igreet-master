import { PatientType } from '../../types/Patient.type';
import './styles.scss';

type UserConsultCardProps = {
  patient: PatientType;
  setPatientList: (id: string, state: boolean) => void;
  check: boolean
}

export default function UserConsultCard({ setPatientList, patient, check }: UserConsultCardProps) {
  return (
    <section className='content-user-consult-card flex_center'>
      <label htmlFor="user-select" className='label-user-consult-card flex_center'>
        <h5 className='name-user-consult-card'>{ patient.name }</h5>
        <input
          id='user-select'
          className='input-check-box-user-consult-card'
          onChange={({ target }) => setPatientList(patient.id, target.checked)}
          type='checkbox'
          checked={ check }
        />
      </label>
    </section>
  );
}