import { useEffect } from "react";
import { RootReducerType } from "../../types/Reducers.type";
import { useDispatch, useSelector } from "react-redux";
import appointmentServer from "../../server/appointment.server";
import appActions from "../../redux/actions/app.actions";
import CardAppointment from "../../components/CardAppointment";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

export default function ListAppoinments() {
  const dispatch = useDispatch()
  const { token, appointments } = useSelector((state: RootReducerType) => state.app)

  useEffect(() => {
    const getAllAppiments = async () => {
      const response = await appointmentServer.getAllAppointments({ token })

      console.log(response);
      

      dispatch(appActions.setAppointments(response));
    }

    getAllAppiments()
  }, [ token, dispatch ])

  return (
    <>
      <Header />
      <div>
        {
          appointments.length ? (
            appointments.map((appointment, index) => (
              <CardAppointment
                yourTime={ index === 0}
                key={index}
                name={appointment.patient.name}
                phone={appointment.patient.phone}
                id={appointment.id}
                complet={appointment.complet}
              />
            ))

          ): (
            <Loading />
          )
        }
      </div>
    </>
  )
}