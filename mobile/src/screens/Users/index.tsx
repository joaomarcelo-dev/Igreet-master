import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import { ContainerStyle, FormStyle, UserListStyle } from "./styles";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardUser from "../../components/CardUser";

export default function Users({ navigation }) {
  return (
    <>
      <HeaderScreen title="Usuários" />

      <View style={ ContainerStyle.container }>
        <View style={ FormStyle.container }>
          <View style={ FormStyle.conatainerSearch }>
            <TextInput
              style={ FormStyle.input }
              placeholder="Nome"
            />
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="account-search-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={ UserListStyle.container }>
          <CardUser
            check={ true }
            birthDate="07/06/2004"
            cpf="630.350.053-62"
            name="João Marcelo Lima Oliveira"
            phoneNumber="(98) 99237-7794"
          />
        </ScrollView>
      </View>
    </>
  );
}