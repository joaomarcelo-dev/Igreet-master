import { useEffect, useState  } from 'react';
import './style.scss';
import patientsServer from '../../../server/patientes.server';
import { PatientsType } from '../../../types/Patients.type';
import CardPatients from '../../../components/CardPatients';
import Header from '../../../components/Header';
import FaqButton from '../../../components/FaqButton';
import { BsPlus } from 'react-icons/bs';
import Loading from '../../../components/Loading';
 
export default function AllPatients() {  
  const [patients, setPatients] = useState<PatientsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const response = await patientsServer.getAllPatients();
      console.log(response.data);
      setPatients(response.data);
      setLoading(false);
    }

    get();
  });

  return (
    <>
      <Header />
      {
        loading ?
        <Loading /> : (
          <>
            <section>
              <h3 className='title-page-all-patients'>Lista de clientes</h3>
              {
                patients.length ? (
                  <>
                    {
      
                      patients.length === 0 && (
                        patients.map((patient) => (
                          <CardPatients
                            key={patient.id}
                            address={patient.address}
                            birthDate={patient.birthDate}
                            cpf={patient.cpf}
                            id={patient.id}
                            name={patient.name}
                            phone={patient.phone}
                          />
                        ))
                      )
                    }
                  </>
                ) : (
                  <section className='section-patients-not-found'>
                    <h3>
                      Nenhum cliente encontrado 🧐
                    </h3>
                  </section>
                )
              }

            </section>
            <FaqButton
              buttons={[
                {
                  Icon: BsPlus,
                  backgroundButton: '#4CAF50',
                  backgroundIcon: '#fff',
                  router: '/new-patient',
                }
              ]}
            />
          </>
        )
      }

    </>
  )
}