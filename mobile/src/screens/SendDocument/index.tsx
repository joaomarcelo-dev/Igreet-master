import { Text, View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import { ContainerStyle } from "./styles";

export default function SendDocument() {
  return (
    <View style={ ContainerStyle.container }>
      <HeaderScreen title="Envio de Documentos" />

      <View style={ ContainerStyle.mainContainer }>
        <Text style={ ContainerStyle.textContent }>Esta tela ainda está em desenvolvimento!</Text>
      </View>
    </View>
  )
}