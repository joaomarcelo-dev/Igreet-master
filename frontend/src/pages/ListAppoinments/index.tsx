import './style.scss';

import { useEffect, useState } from "react";
import { RootReducerType } from "../../types/Reducers.type";
import { useDispatch, useSelector } from "react-redux";
import appointmentServer from "../../server/appointment.server";
import appActions from "../../redux/actions/app.actions";
import CardAppointment from "../../components/CardAppointment";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Appointment } from '../../types/Appoinments.type';


export default function ListAppoinments() {
  const dispatch = useDispatch()
  const { token, appointments } = useSelector((state: RootReducerType) => state.app)
  const [search, setSearch] = useState(appointments)

  useEffect(() => {
    const getAllAppiments = async () => {
      const response = await appointmentServer.getAllAppointments({ token })

      console.log(response);
      

      dispatch(appActions.setAppointments(response));
      setSearch(response)
    }

    getAllAppiments()
  }, [ token, dispatch ])

  const searchAppointments = (appointments: Appointment[], search: string) => {
    if (search === '') return appointments
  
    return appointments.filter((appointment: Appointment) => {
      return appointment.patient.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  const filterAppointments = (appointments: Appointment[], filter: string) => {
    if (filter === 'fila') {
      return appointments.filter((appointment: Appointment) => {
        return appointment.complet === false
      })
    } else {
      return appointments.filter((appointment: Appointment) => {
        return appointment.complet === true
      })
    }
  }

  return (
    <>
      <Header />

      <section className='section-buttons-filter-of-complet'>
        <button
          onClick={() => setSearch(filterAppointments(appointments, 'fila'))}
        >
          Fila de espera
        </button>
        
        <button
          onClick={() => setSearch(filterAppointments(appointments, 'atendidos'))}
        >
          Atendidos
        </button>

      </section>

      <div>
        <section
          className="section-search"
        >
          <input
            type="text"
            placeholder='Pesquisar'  
            className='input-search'
            onChange={(e) => setSearch(searchAppointments(appointments, e.target.value))}
          />
        </section>
        {
  appointments.length ? (
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
      .map((appointment, index) => {
        // if (appointment.complet === true) return null;

        return (
          <CardAppointment
            yourTime={index === 0}
            key={appointment.id}
            name={appointment.patient.name}
            phone={appointment.patient.phone}
            id={appointment.id}
            complet={appointment.complet}
          />
        );
      })
  ) : (
    <Loading />
  )
}
      </div>
    </>
  )
}