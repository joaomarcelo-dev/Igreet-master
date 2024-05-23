import { Image, Text, TouchableOpacity, View } from "react-native";
import { CardPlansStyle } from "./style";
import { AppointmentType } from "../../Types/Appointment.type";
import { imgProfileDefault } from "../../global/conf/imagesDefault";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type CardPlansPropType = {
  nameSection: string,
  textViewMore: string,
  textNotFoundItens: string,
  textButton: string,
  actionsButton: (id: string) => void,
  deleteAppointment: (id: string) => void,
  appointment: AppointmentType
}

export default function CardPlans({ nameSection, textButton, textNotFoundItens, textViewMore, actionsButton, appointment, deleteAppointment }: CardPlansPropType) {  
  return (
    <View style={ CardPlansStyle.container }>
      <View style={ CardPlansStyle.topOptions }>
        <Text style={ CardPlansStyle.textNameCard }>{ nameSection }</Text>
        <TouchableOpacity>
          <Text style={ CardPlansStyle.textMoreOptions }>{ textViewMore }</Text>
        </TouchableOpacity>
      </View>

      <View style={ CardPlansStyle.containerList }>
        {
          appointment ? (
            <View style={ CardPlansStyle.contentInfo }>
              <TouchableOpacity
                style={ CardPlansStyle.buttonDelet }
                onPress={() => {
                  deleteAppointment(appointment.id);
                }}
              >
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>

              <Image
                src={ appointment.imgURL || imgProfileDefault }
                style={ CardPlansStyle.imgPatient }
              />

              <Text style={ CardPlansStyle.namePatient }>{ appointment.patient.name }</Text>
              <Text style={ CardPlansStyle.infoTextPatient }>CPF: { appointment.patient.cpf }</Text>
              {/* <Text style={ CardPlansStyle.infoTextPatient }>Whatsapp: { appointment.patient.phone }</Text> */}

              <TouchableOpacity
                style={ CardPlansStyle.buttonRedirect }
                onPress={() => actionsButton(appointment.id) }
              >
                <Text style={ CardPlansStyle.textButton }>{ textButton }</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={ CardPlansStyle.textNotFoundItens }>
              { textNotFoundItens }
            </Text>
          )
        }

      </View>
    </View>
  )
}