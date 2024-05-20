import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle, HeaderStyle, ListAppointmentStyle, SectionStyle, SpeedAccessStyle } from "./styles";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CardPlans from "../../components/CardPlans";

import { imgProfileDefault } from "../../global/conf/imagesDefault";
import { useEffect, useState } from "react";
import AlertBox from "../../components/AlertBox";
import AppointmentCard from "../../components/AppointmentCard";
import { getAllAppointments, updateAppointment } from "../../api/web.api";
import { AppointmentType, UpdateAppointmentProp } from "../../Types/Appointment.type";
import RefreshComponent from "../../components/RefreshComponent";


export default function Home({ navigation }) {
  const [alertVisible, setAlertVisible] = useState({
    visible: false,
    id: '',
  })
  const [allAppointments, setallAppointments] = useState<AppointmentType[]>([]);
  const [indexOption, setIndexOption] = useState<number | null>(null)

  useEffect(() => {
    handleGetAllAppointment();
  }, []);
  
  const handleUpdateAppointment = async ({ id, status }: UpdateAppointmentProp) => {
    const { data } = await updateAppointment({ id, status });
    
    console.log(data);
    
  }
  
  const handleGetAllAppointment = async () => {
    const { data: allAppointments } = await getAllAppointments();         
    setallAppointments(allAppointments.filter((appointment: AppointmentType) => appointment.complet !== true));
  }

  return (
    <>
      <AlertBox
        message={`Deseja mesmo alterar o estado do paciente?`}
        onNoPress={() => {
          setAlertVisible({ ...alertVisible, visible: false, id: '' });
        }}
        onYesPress={async () => {
          setAlertVisible({ ...alertVisible, visible: false, });
          await handleUpdateAppointment({ id: alertVisible.id, status: true });
          await handleGetAllAppointment();
        }}
        visible={alertVisible.visible}
      />

      <RefreshComponent handleRefresh={async () => {
        await handleGetAllAppointment()
      }}>
        <View style={ ContainerStyle.container }>
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
                    disabled={true}
                  >
                    <Octicons
                      name="list-unordered"
                      size={25}
                      style={ SpeedAccessStyle.iconButton }
                    />
                    <Text>Envio de Doc.</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={ SpeedAccessStyle.button }
                    onPress={ () => navigation.navigate('Users')}
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
                    onPress={ () => navigation.navigate('Settings')}
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
                    onPress={ () => navigation.navigate('Calendar')}
                  >
                    <FontAwesome5
                      name="calendar"
                      size={25}
                      style={ SpeedAccessStyle.iconButton }
                    />
                    <Text>Calendário</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={ SpeedAccessStyle.buttonArgendConsult }
                  onPress={ () => navigation.navigate('NewAppointment')}
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
                nameSection="Lista de Atendimento"
                textViewMore="Ver histórico"
                textNotFoundItens="Nenhum atendimento pendente"
                textButton="Marcar como concluido"
                actionsButton={(id: string) => {
                  setAlertVisible({ ...alertVisible, visible: !alertVisible.visible, id, });
                }}
                appointment={ allAppointments[0] }
              />
            </View>

            <ScrollView>
              <View style={ ListAppointmentStyle.container }>
                {
                  allAppointments.map((appointment, index) => {
                    if (index > 0) {
                      return (
                        <AppointmentCard
                          key={ appointment.id }
                          id={ appointment.id }
                          index={ index }
                          appintmentData={appointment}
                          funCheck={() => {}}
                          funDelet={() => {}}
                          setIndexOption={setIndexOption}
                        />
                      )
                    }
                  })
                }
              </View>
            </ScrollView>
          </View>
        </View>
      </RefreshComponent>
    </>
  )
}