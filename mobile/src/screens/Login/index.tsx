import { TextInput, View } from "react-native";
import { ContainerStyle, FormLoginStyle } from "./styles";

export default function Login() {
  return (
    <View style={ ContainerStyle.container }>
      <View>
        <TextInput style={ FormLoginStyle.input } placeholder="Usuário" />
        <TextInput style={ FormLoginStyle.input } placeholder="Senha" />
      </View>

      <View>
      
      </View>
    </View>
  )
}