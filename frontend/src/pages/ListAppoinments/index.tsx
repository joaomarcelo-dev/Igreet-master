import './style.scss';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import appointmentServer from "../../server/appointment.server";
import appActions from "../../redux/actions/app.actions";
import CardAppointment from "../../components/CardAppointment";
import Header from "../../components/Header";
import { RootReducerType } from '../../types/Reducers.type';
import { Appointment } from '../../types/Appoinments.type';
import Loading from '../../components/Loading';
import FaqButton from '../../components/FaqButton';
import { FcPlus } from 'react-icons/fc';

type FilterType = 'fila' | 'atendidos';

export default function ListAppointments() {
  const dispatch = useDispatch();
  const { token, appointments } = useSelector((state: RootReducerType) => state.app);
  const [search, setSearch] = useState<Appointment[]>(appointments);
  const [filter, setFilter] = useState<FilterType>('fila'); // Aqui definimos o estado inicial como 'fila'
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllAppointments = async () => {
      setLoading(true);
      const response = await appointmentServer.getAllAppointments({ token });
      dispatch(appActions.setAppointments(response));
      setSearch(response);
      setLoading(false);
    };

    getAllAppointments();

  }, [token, dispatch]);

  const searchAppointments = (appointments: Appointment[], search: string): Appointment[] => {
    if (search === '') return filterAppointments(appointments, filter);

    return appointments.filter((appointment) =>
      appointment.patient.name.toLowerCase().includes(search.toLowerCase()) &&
      appointment.complet === (filter === 'atendidos')
    );
  };

  const filterAppointments = (appointments: Appointment[], filter: FilterType): Appointment[] => {
    if (filter === 'fila') {
      return appointments.filter((appointment) => !appointment.complet);
    } else {
      return appointments.filter((appointment) => appointment.complet);
    }
  };

  const handleFilter = (filterValue: FilterType) => {
    setFilter(filterValue);
    setSearch(filterAppointments(appointments, filterValue));
  };

  useEffect(() => {
    setSearch(filterAppointments(appointments, filter));
  }, [appointments, filter]);

  return (
    <>
      <Header />

      {
        loading ? <Loading /> : (
          <>
          
            <section className='section-buttons-filter-of-complet'>
              <button
                onClick={() => handleFilter('fila')}
                name='fila'
                className={`${filter === 'fila' ? 'button-filter-selected' : ''}`}
              >
                Fila de espera
              </button>

              <button
                onClick={() => handleFilter('atendidos')}
                name='atendidos'
                className={`${filter === 'atendidos' ? 'button-filter-selected' : ''}`}
              >
                Atendidos
              </button>
            </section>

            <div>
              <section className="section-search">
                <input
                  type="text"
                  placeholder='Pesquisar'  
                  className='input-search'
                  onChange={(e) => setSearch(searchAppointments(appointments, e.target.value))}
                />
              </section>
              {
                search.length ? (
                  search
                    // Ordena os compromissos pelo horário
                    .sort((a, b) => {
                      const timeA = a.hour.split(':').map(Number);
                      const timeB = b.hour.split(':').map(Number);
                      
                      // Compara as horas
                      if (timeA[0] !== timeB[0]) {
                        return timeA[0] - timeB[0];
                      } else {
                        // Se as horas forem iguais, compara os minutos
                        return timeA[1] - timeB[1];
                      }
                    })
                    // Mapeia os compromissos ordenados para a renderização
                    .map((appointment, index) => (
                      <CardAppointment
                        yourTime={index === 0}
                        key={appointment.id}
                        name={appointment.patient.name}
                        phone={appointment.patient.phone}
                        id={appointment.id}
                        complet={appointment.complet}
                      />
                    ))
                ) : (
                  <section className='section-not-appoiments'>
                    <h2>
                      Nenhum Atendimento Encontrado
                      {''}
                      🥱
                    </h2>
                  </section>
                )
              }
            </div>
          </>
        )
      }

      <FaqButton
        buttons={[
          {
            Icon: FcPlus,
            backgroundButton: '#00a86b',
            router: '/new-appoinment/test',
            sizeIcon: 30,

          },
        ]}
      />
    </>
  );
}
