import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import HeaderScreen from "../../components/HeaderScreen";
import ServiceCard from "../../components/ServiceCard";
import { ContainerStyle } from "./styles";
import AlertBox from "../../components/AlertBox";
import { useEffect, useState } from "react";
import ButtonFab from "../../components/ButtonFab";
import { getServices } from "../../api/web.api";

export default function ServicesList({ navigation }) {
  const [services, setServices] = useState([]);

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
      const response = await getServices();

      console.log(response);
      
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
          <ServiceCard
            id="1"
            index={0}
            funCheck={checkService}
            funDelet={deleteService}
          />

          <ServiceCard
            id="2"
            index={2}
            funCheck={checkService}
            funDelet={deleteService}
          />

          <ServiceCard
            id="3"
            index={3}
            funCheck={checkService}
            funDelet={deleteService}
          />

          <ServiceCard
            id="4"
            index={4}
            funCheck={checkService}
            funDelet={deleteService}
          />
        </View>
      </ScrollView>

      <ButtonFab
        onPress={() => {
          navigation.navigate('NewService');
        }}
      />
    </>
  )
}