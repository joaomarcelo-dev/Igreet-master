import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import HeaderScreen from "../../components/HeaderScreen";
import ServiceCard from "../../components/AppointmentCard";
import { ContainerStyle } from "./styles";
import AlertBox from "../../components/AlertBox";
import { useEffect, useState } from "react";
import { getAllAppointments } from "../../api/web.api";
import { AppointmentType } from "../../Types/Appointment.type";

export default function ServicesList({ navigation }) {
  const [allAppointments, setallAppointments] = useState<AppointmentType[]>([]);

  const [alertState, setAlertState] = useState({
    visible: false,
    message: '',
  });

  const deleteService = async (id: string) => {
    handleAlert('Deseja realmente deletar este atendimento?', true);
  };

  const checkService = async (id: string) => {
    handleAlert('Deseja realmente finalizar este atendimento?', true);
  };

  const handleAlert = ( message: string, visible: boolean) => {
    setAlertState({
      message,
      visible,
    });
  }

  useEffect(() => {
    const get = async () => {
      const { data: allAppointments } = await getAllAppointments();
      console.log(allAppointments);
      
      setallAppointments(allAppointments);
    };

    get();
  }, []);

  return (
    <>
      <HeaderScreen title="Fila de atendimentos" />

      <AlertBox
        message={alertState.message}
        visible={alertState.visible}
        onNoPress={() => setAlertState({ ...alertState, visible: false })}
        onYesPress={() => handleAlert('', false)}
      />

      <ScrollView>
        <View style={ ContainerStyle.container }>
          {
            allAppointments.map((appointment, index) => {
              return (
                <ServiceCard
                  key={ appointment.id }
                  id={ appointment.id }
                  index={ index }
                  funCheck={checkService}
                  funDelet={deleteService}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </>
  )
}