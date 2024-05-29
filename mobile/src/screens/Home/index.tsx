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
import { deleteAppointment, getAllAppointments, updateAppointment } from "../../api/web.api";
import { AppointmentType, UpdateAppointmentProp } from "../../Types/Appointment.type";
import RefreshComponent from "../../components/RefreshComponent";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../Types/RootReducer.type";


export default function Home({ navigation }) {
  const [alertVisible, setAlertVisible] = useState({
    visibleAlertDelet: false,
    visibleAlertConfirm: false,
    id: '',
  })

  const { user } = useSelector((root: RootReducerType) => root.user)

  const [allAppointments, setallAppointments] = useState<AppointmentType[]>([]);
  const [indexOption, setIndexOption] = useState<number | null>(null)

  useEffect(() => {
    handleGetAllAppointment();
  }, []);
  
  const handleUpdateAppointment = async ({ id, status }: UpdateAppointmentProp) => {
    const { data } = await updateAppointment({ id, status });
    
    console.log(data);
    
  }

  const handleDeleteAppointment = async (id: string) => {
    const { data } = await deleteAppointment(id);
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
          setAlertVisible({ ...alertVisible, visibleAlertConfirm: false, id: '' });
        }}
        onYesPress={async () => {
          setAlertVisible({ ...alertVisible, visibleAlertConfirm: false, });
          await handleUpdateAppointment({ id: alertVisible.id, status: true });
          await handleGetAllAppointment();
        }}
        visible={alertVisible.visibleAlertConfirm}
      />

      <AlertBox
        message={`Deseja mesmo deletar o agendamento do paciente?`}
        onNoPress={() => {
          setAlertVisible({ ...alertVisible, visibleAlertDelet: false, id: '' });
        }}
        onYesPress={async () => {
          setAlertVisible({ ...alertVisible, visibleAlertDelet: false, });
          await handleDeleteAppointment(alertVisible.id);
          await handleGetAllAppointment();
        }}
        visible={alertVisible.visibleAlertDelet}
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
                { user.name }
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
                    onPress={ () => navigation.navigate('SendDocument') }
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
                funViewMore={() => navigation.navigate('AppointmentHistory')}
                textNotFoundItens="Nenhum atendimento pendente"
                textButton="Marcar como concluido"
                appointment={ allAppointments[0] }
                actionsButton={(id: string) => {
                  setAlertVisible({ ...alertVisible, visibleAlertConfirm: !alertVisible.visibleAlertConfirm, id, });
                }}
                deleteAppointment={(id: string) => {
                  setAlertVisible({ ...alertVisible, visibleAlertDelet: !alertVisible.visibleAlertDelet, id, });
                }}
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
                          funCheck={(id: string) => {
                            setAlertVisible({ ...alertVisible, visibleAlertConfirm: !alertVisible.visibleAlertConfirm, id, });
                          }}
                          funDelet={(id: string) => {
                            setAlertVisible({ ...alertVisible, visibleAlertDelet: !alertVisible.visibleAlertDelet, id, });
                          }}
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