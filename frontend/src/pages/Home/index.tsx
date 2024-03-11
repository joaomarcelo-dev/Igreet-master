import { useEffect } from "react"
import appointmentServer from "../../server/appointment.server"
import { useDispatch, useSelector } from "react-redux"
import { RootReducerType } from "../../types/Reducers.type"
import appActions from "../../redux/actions/app.actions"
import CardAppointment from "../../components/CardAppointment"

export default function Home() {
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
      {
        appointments.map((appointment, index) => (
          <CardAppointment
            key={index}
            name={appointment.patient.name}
            phone={appointment.patient.phone}
          />
        ))
      }
    </>
  )
}