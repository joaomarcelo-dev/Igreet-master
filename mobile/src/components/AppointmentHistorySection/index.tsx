import { Text, View } from "react-native";
import { ContainerStyle } from "./styles";
import { AppointmentType } from "../../Types/Appointment.type";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";
import CardUser from "../CardUser";
import AppointmentCard from "../AppointmentCard";
import { useState } from "react";
import formatUtils from "../../utils/format.utils";

type AppointmentHistorySectionProps = {
  appointments: AppointmentType[]
  day: DayOfAtencenceType
}

export default function AppointmentHistorySection({ appointments, day }: AppointmentHistorySectionProps) {
  const [indexOption, setIndexOption] = useState<number | null>(null)

  return (
    <View style={ ContainerStyle.contente }>
      <View>
        <Text style={ ContainerStyle.textDate }>{ formatUtils.convertDate(day.date) }</Text>
      </View>

      {
        appointments.map((appointment, index) => {
          console.log(appointment);
          
          return (
            <AppointmentCard
              key={ appointment.id }
              id={ appointment.id }
              index={ index }
              appintmentData={appointment}
              funCheck={(id: string) => {}}
              funDelet={(id: string) => {}}
              setIndexOption={setIndexOption}
              handleButtons={ false }
              viewInfo="all"
            />
          )
        })
      }
    </View>
  )
}