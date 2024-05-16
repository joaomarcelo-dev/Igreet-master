import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle, HeaderStyle, SectionStyle, SpeedAccessStyle } from "./styles";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CardPlans from "../../components/CardPlans";

import { imgProfileDefault } from "../../global/conf/imagesDefault";
import { useState } from "react";
import AlertBox from "../../components/AlertBox";


export default function Home({ navigation }) {
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <>
      <AlertBox
        message="Deseja mesmo alterar o estado do paciente?"
        onNoPress={() => {
          setAlertVisible(false);
        }}
        onYesPress={() => {
          setAlertVisible(false);
        }}
        visible={alertVisible}
      />

      <ScrollView style={ ContainerStyle.container }>
        <View style={ HeaderStyle.container }>
          <TouchableOpacity
            style={ HeaderStyle.profileInfo }
            onPress={ () => navigation.navigate('Profile') }
          >
            <Image
              style={ HeaderStyle.imageProfile }
              src={ imgProfileDefault }
            />
            <Text
              style={ HeaderStyle.textWelcome }
            >
              Olá,
              {`\n`}
              João Marcelo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ () => navigation.navigate('Notifications')}
          >
            <Ionicons
              name="notifications-outline" 
              size={30}
              style={ HeaderStyle.iconNotification }
            />
          </TouchableOpacity>
        </View>

        <View style={ SectionStyle.container }>
          <View>
            <Text style={ SpeedAccessStyle.title }>
              Acesso Rápido
            </Text>

            <View>
              <View style={ SpeedAccessStyle.containerButtons }>
                <TouchableOpacity
                  style={ SpeedAccessStyle.button }
                  onPress={ () => navigation.navigate('ServicesList') }
                >
                  <Octicons
                    name="list-unordered"
                    size={25}
                    style={ SpeedAccessStyle.iconButton }
                  />
                  <Text>Atendimentos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={ SpeedAccessStyle.button }
                  onPress={ () => navigation.navigate('Revenues')}
                >
                  <MaterialIcons
                    name="people"
                    size={25}
                    style={ SpeedAccessStyle.iconButton }
                  />
                  <Text>Pacientes</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  style={ SpeedAccessStyle.button }
                  onPress={ () => navigation.navigate('Chat')}
                >
                  <MaterialIcons
                    name="settings"
                    size={25}
                    style={ SpeedAccessStyle.iconButton }
                  />
                  <Text>Configurações</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  style={ SpeedAccessStyle.button }
                  onPress={ () => navigation.navigate('Prescription')}
                >
                  <FontAwesome5
                    name="calendar"
                    size={25}
                    style={ SpeedAccessStyle.iconButton }
                  />
                  <Text>{`Calendário`}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={ SpeedAccessStyle.buttonArgendConsult }
                onPress={ () => navigation.navigate('Users', { select: true })}
              >
                <Ionicons
                  name="calendar-clear"
                  size={25}
                  style={ SpeedAccessStyle.iconArgend }
                />

                <Text style={ SpeedAccessStyle.textArgend }>
                  Agendar uma consulta
                </Text>
              </TouchableOpacity>
            </View>

            <CardPlans
              nameSection="Atendimento da vez"
              textViewMore="Ver mais"
              textNotFoundItens="Nenhum atendimento pendente"
              textButton="Marcar como concluido"
              actionsButton={() => {
                setAlertVisible(true)
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}