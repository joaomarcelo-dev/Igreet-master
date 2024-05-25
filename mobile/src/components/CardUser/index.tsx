import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle } from "./styles";
import { PatientType } from "../../Types/Patient.type";

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import formatUtils from "../../utils/format.utils";

type CardUserProps = {
  patient: PatientType
}

export default function CardUser({ patient }: CardUserProps) {
  const [visibleOptions, setVisibleOptions] = useState<boolean>(false)
  return (
    <TouchableOpacity
      style={ ContainerStyle.container }
      onPress={() => setVisibleOptions(!visibleOptions)}
    >
      <View style={ ContainerStyle.contentInitialInfo }>
        <Text style={ ContainerStyle.text }>
          <AntDesign
            name="user"
            size={20}
          />
          {`  `}
          { patient.name }
        </Text>
        <TouchableOpacity
            onPress={() => setVisibleOptions(!visibleOptions)}
          >
            <AntDesign
              name={ visibleOptions ? 'up' : 'down' }
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
      </View>
      { visibleOptions &&
        <View style={ ContainerStyle.containerDetail }>
          <View>
            <Text style={ ContainerStyle.textDetail }>Nascimento: { patient.birthDate }</Text>
            <Text style={ ContainerStyle.textDetail }>CPF: { patient.cpf }</Text>
            <Text style={ ContainerStyle.textDetail }>Telefone: { formatUtils.formatNumberPhoneVenom(patient.phone) }</Text>
          </View>

          <View style={ ContainerStyle.containerButtonOptions }>
            <TouchableOpacity
              style={ ContainerStyle.buttonArgendConsult }
              onPress={ () => {}}
            >
              <Ionicons
                name="calendar-clear"
                size={20}
                style={ ContainerStyle.iconArgend }
              />

              <Text style={ ContainerStyle.textArgend }>
                Agendar uma consulta
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={ ContainerStyle.buttonDeletUser }>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={20}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        
        </View>
      }
    </TouchableOpacity>
  );
}