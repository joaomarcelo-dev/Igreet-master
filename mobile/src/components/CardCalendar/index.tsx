import { Text, View } from "react-native";
import { ContainerStyle } from "./styles";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
type CardCalendarProps = {
  title: string;
  day: string;
  hourStart: string;
  hourEnd: string;
  notification: boolean
}

export default function CardCalendar({ title, day, hourStart, hourEnd, notification }: CardCalendarProps) {
  return (
    <View style={ ContainerStyle.container }>
      <View style={ ContainerStyle.contentTitle }>
        <View style={ ContainerStyle.lineColor } />
        <Text style={ ContainerStyle.title }>{ title }</Text>
      </View>

      <View style={ ContainerStyle.containerDataInfo }>
        <View style={ ContainerStyle.contentTextDataInfo }>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={15}
            style={ ContainerStyle.icons }
          />
          <Text>{ day }</Text>
        </View>

        <View style={ ContainerStyle.contentTextDataInfo }>
          <MaterialCommunityIcons
            name="clock-time-five-outline"
            size={15}
            style={ ContainerStyle.icons }
          />
          <Text>Das { hourStart }h ás { hourEnd }h</Text>
        </View>

        <View style={ ContainerStyle.contentTextDataInfo }>
          <AntDesign
            name="notification"
            size={15}
            style={ ContainerStyle.icons }
          />
          <Text>Notificar: { notification ? 'Sim' : 'Não' }</Text>
        </View>
      </View>
    </View>
  )
}