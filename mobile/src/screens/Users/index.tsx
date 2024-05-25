import { useEffect, useState } from "react";
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ContainerStyle, FormStyle, UserListStyle } from "./styles";

import HeaderScreen from "../../components/HeaderScreen";
import CardUser from "../../components/CardUser";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAllPatients } from "../../api/web.api";
import { PatientType } from "../../Types/Patient.type";
import RefreshComponent from "../../components/RefreshComponent";

type ParamList = {
  Detail: {
    isSelect: boolean;
  };
};

export default function Users({ navigation }) {
  const [allPatients, setAllPatients] = useState<PatientType[]>([]);

  useEffect(() => {
    handleGetAllPatients();
  }, []);
  
  const handleGetAllPatients = async () => {
    const { data: allPatients } = await getAllPatients();
    setAllPatients(allPatients);
  }

  return (
    <RefreshComponent handleRefresh={ async () => {
      await handleGetAllPatients();
    }}>
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
            {
              allPatients.map((patient) => {
                return (
                  <CardUser
                    key={ patient.id }
                    patient={ patient }
                  />
                )
              })
            }

          </ScrollView>
        </View>
      </>
    </RefreshComponent>
  );
}