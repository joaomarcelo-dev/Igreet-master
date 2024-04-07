import { useEffect  } from 'react';
import './style.scss';
import patientsServer from '../../../server/patientes.server';

export default function AllClients() {
  // const [patients, setPatients] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await patientsServer.getAllPatients();

      console.log(response.data);

      // setPatients(response.data);
    }
    get();
  });

  return (
    <>
      <section>
        <h3>Lista de clientes</h3>

        {


        }
      </section>
    </>
  )
}