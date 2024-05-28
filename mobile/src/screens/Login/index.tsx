import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ContainerStyle, FormLoginStyle } from "./styles";
import { useState } from "react";
import { loginUser } from "../../api/web.api";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/user.actions";

export default function Login() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const sendDisabled = !formData.password || !formData.email;

  const handleLogin = async () => {
    const { data } = await loginUser(formData);
    dispatch(userActions.setUser({ user: { name: data.user.name }, token: data.token }));  
  }

  return (
    <View style={ ContainerStyle.container }>
      <View style={ FormLoginStyle.container }>
        <Text style={ FormLoginStyle.title }>LOGIN</Text>
        <View>
          <TextInput
            style={ FormLoginStyle.input }
            placeholder="Usuário"
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />

          <TextInput
            style={ FormLoginStyle.input }
            placeholder="Senha"
            onChangeText={(text) => setFormData({ ...formData, password: text })}
          />
        </View>

        <View>
          <TouchableOpacity
          onPress={async () => {
            await handleLogin();
          }}
            style={[
              FormLoginStyle.button,
              sendDisabled ? FormLoginStyle.buttonLoginDisabled : FormLoginStyle.buttonLogin
            ]}>

            <Text style={ FormLoginStyle.textButtonLogin }>Login</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}