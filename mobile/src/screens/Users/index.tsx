import { useEffect, useState } from "react";
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ContainerStyle, FormStyle, UserListStyle } from "./styles";

import HeaderScreen from "../../components/HeaderScreen";
import CardUser from "../../components/CardUser";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { deletePatient, getAllPatients } from "../../api/web.api";
import { PatientType } from "../../Types/Patient.type";
import RefreshComponent from "../../components/RefreshComponent";
import AlertBox from "../../components/AlertBox";

export default function Users({ navigation }) {
  const [allPatients, setAllPatients] = useState<PatientType[]>([]);
  const [visibleAlert, setVisibleAlert] = useState({
    visible: false,
    id: '',
  });

  useEffect(() => {
    handleGetAllPatients();
  }, []);
  
  const handleGetAllPatients = async () => {
    const { data: allPatients } = await getAllPatients();
    setAllPatients(allPatients);
  }

  const handleDeletPatient = async (id: string) => {
    const { status, data } = await deletePatient(id);

    if (status === 204) {
      const newPatientsList = allPatients.filter((patient) => patient.id !== id);

      setAllPatients(newPatientsList);
      
    }
    
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <AlertBox
        message="Tem certeza de que deseja deletar esse páciente?"
        onNoPress={() => setVisibleAlert({ visible: false, id: ''})}
        onYesPress={async () => {
          await handleDeletPatient(visibleAlert.id);
          setVisibleAlert({ visible: false, id: ''})
        }}
        visible={visibleAlert.visible}
      />


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
                      deletPatientFun={(id: string) => {
                        setVisibleAlert({
                          id,
                          visible: true,
                        })
                      }}
                    />
                  )
                })
              }

            </ScrollView>
          </View>
        </>
      </RefreshComponent>
    </View>
  );
}