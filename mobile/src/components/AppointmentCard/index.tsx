import { Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle, FistService } from "./styles";

type ServiceCardPropType = {
  index: number,
  id: string,
  funDelet: (id: string) => void,
  funCheck: (id: string) => void,
  appintmentData: AppointmentType,
  setIndexOption: (index: number | null) => void,
  handleButtons?: boolean;
  viewInfo?: 'all' | 'default'
}

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AppointmentType } from "../../Types/Appointment.type";
import { Image } from "react-native";
import { imgProfileDefault } from "../../global/conf/imagesDefault";
import { useState } from "react";
import formatUtils from "../../utils/format.utils";

export default function AppointmentCard({ id, index, funCheck, funDelet, appintmentData, setIndexOption, handleButtons = true, viewInfo }: ServiceCardPropType) {
  const [visibleOptions, setVisibleOptions] = useState<boolean>(false)

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisibleOptions(!visibleOptions)}
        style={[
          ContainerStyle.container,
        ]}
      >
        <View style={ ContainerStyle.simpleInfo }>
          <Image
            src={ appintmentData.imgURL || imgProfileDefault }
            style={ ContainerStyle.imgPatient }
          />

          <Text style={ ContainerStyle.textCard }>{ appintmentData.patient.name }</Text>
          
          <TouchableOpacity
            onPress={() => {
              setVisibleOptions(!visibleOptions);
              setIndexOption(visibleOptions ? index : null);
            }}
          >
            <AntDesign
              name={ visibleOptions ? 'up' : 'down' }
              size={20}
              color={'black'}
            />
          </TouchableOpacity>
        </View>

        {
          visibleOptions &&
          <View style={ ContainerStyle.moreInfo }>
            <View>
              <Text style={ ContainerStyle.textMoreInfo }>CPF: { appintmentData.patient.cpf }</Text>
              <Text style={ ContainerStyle.textMoreInfo }>Phone: { `${appintmentData.patient.phone ? formatUtils.formatNumberPhoneVenom(appintmentData.patient.phone) : 'Não informado'}` }</Text>

              {
                viewInfo === 'all' && (
                  <>
                    <Text style={ ContainerStyle.textMoreInfo }>Nascimento: { appintmentData.patient.birthDate }</Text>
                    <Text style={ ContainerStyle.textMoreInfo }>Endereço: { appintmentData.patient.address }</Text>
                  </>
                )
              }
            </View>
            {
              handleButtons && (

                <View style={ ContainerStyle.containerButtonOptions }>
                  <TouchableOpacity
                    onPress={() => funDelet(id)}
                    style={[ ContainerStyle.buttonOption, ContainerStyle.buttonDelet ]}
                  >
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={25}
                      color={'white'}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => funCheck(id)}
                    style={[ ContainerStyle.buttonOption, ContainerStyle.buttonAproved ]}
                  >
                    <MaterialCommunityIcons
                      name="check"
                      size={25}
                      color={'green'}
                    />
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
        }
      </TouchableOpacity>
    </>
  )
}