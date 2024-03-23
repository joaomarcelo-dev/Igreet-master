import './style.scss';

import Header from "../../../components/Header";
import { useEffect, useState } from 'react';
import daysOfAtendenceServer from '../../../server/daysOfAtendence.server';
import { DaysOfAtendenceType } from '../../../types/DaysOfAtendence.type';
import CardDaysOfAtendence from '../../../components/CardDaysOfAtendence';
import { FcPlus } from 'react-icons/fc';
import FaqButton from '../../../components/FaqButton';
import Loading from '../../../components/Loading';

export default function ListDaysOfConsult() {
  const [daysOfAtendence, setDaysOfAtendence] = useState<DaysOfAtendenceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllDaysOfAtendence = async () => {
      setLoading(true);
      const response = await daysOfAtendenceServer.getAllDaysOfAtendence();
      setDaysOfAtendence(response.data);
      setLoading(false);
    };

    getAllDaysOfAtendence();
  }, []);  

  return (
    <>
      <Header />

      {
        loading ? <Loading /> : (
          <>
            {
              daysOfAtendence.length === 0 && (
                <h1 className='title-no-days-of-atendence'>Nenhum dia de atendimento cadastrado</h1>
              )
            }

            <section className='section-list-days-of-atendence'>
              {
                daysOfAtendence.map((day) => (
                  <CardDaysOfAtendence
                    key={day.id}
                    id={day.id}
                    date={day.date}
                    hourStart={day.hourStart}
                    hourEnd={day.hourEnd}
                    title={day.title}
                  />      
                ))
              }
            </section>
            
            <FaqButton
              buttons={[
                {
                  Icon: FcPlus,
                  backgroundButton: '#00a86b',
                  router: '/days-of-consult/create'
                }
              ]}
            
            />
          </>
        )
      }
    </>
  );
}
