import { useEffect, useState } from "react";
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ConfirmModalStyle, ContainerStyle, FormStyle, UserListStyle } from "./styles";

import HeaderScreen from "../../components/HeaderScreen";
import CardUser from "../../components/CardUser";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAllPatients } from "../../api/web.api";
import { PatientType } from "../../Types/Patient.type";

type ParamList = {
  Detail: {
    isSelect: boolean;
  };
};

export default function Users({ navigation }) {
  const [usersSelected, setUsersSelected] = useState([]);
  const [allPatients, setAllPatients] = useState<PatientType[]>([]);
  const [handlePatients, setHandlePatients] = useState<PatientType[]>([]);

  const { params } = useRoute<RouteProp<ParamList>>()  

  const handleChangeUserSelected = (userId: string, checkState: boolean) => {
    if (checkState) {
      setUsersSelected(usersSelected.filter((users) => users !== userId));
      return;
    }

    setUsersSelected([...usersSelected, userId]);
  };

  const makeAnAppointment = () => {
    setUsersSelected([]);
  }

  useEffect(() => {
    const get = async () => {
      const { data: allPatients } = await getAllPatients();
      setAllPatients(allPatients);
    }

    get()
  }, []);

  return (
    <>
      <HeaderScreen title="Usuários" selects={usersSelected.length} />

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
          {
            allPatients.map((patient) => {
              return (
                <CardUser
                  key={ patient.id }
                  userId={ patient.id }
                  selectType={ params?.isSelect }
                  birthDate={ patient.birthDate }
                  cpf={ patient.cpf }
                  name={ patient.name }
                  phoneNumber={ patient.phone }
                  hadleChangeSelect={handleChangeUserSelected}
                  checked={ usersSelected.includes(patient.id) }
                />
              )
            })
          }

        </ScrollView>
      </View>
      {
        usersSelected.length > 0 &&
        <View style={ ConfirmModalStyle.container }>
          <TouchableOpacity
            style={ ConfirmModalStyle.buttonConfirm }
            onPress={ makeAnAppointment }
          >
            <Text style={ ConfirmModalStyle.textConfirm }>Marcar consulta</Text>
          </TouchableOpacity>
        </View>
      }
    </>
  );
}