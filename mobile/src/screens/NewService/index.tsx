import { Text, TextInput, View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import { ContainerStyle, FormStyle } from "./styles";

export default function NewService() {
  return (
    <>
      <HeaderScreen title="Adicionar atendimento" />

      <View style={ ContainerStyle.container }>
        <View style={ FormStyle.container }>
          
          <TextInput
            style={ FormStyle.input }
            placeholder="Nome"
          />
        </View>
      </View>
    </>
  );
}