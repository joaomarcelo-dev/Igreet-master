import { useEffect, useState } from "react";
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ContainerStyle, FormSelectDay, FormStyle, UserListStyle } from "./styles";

import HeaderScreen from "../../components/HeaderScreen";
import CardUser from "../../components/CardUser";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createAppointment, deletePatient, getAllDaysOfAtendence, getAllPatients } from "../../api/web.api";
import { PatientType } from "../../Types/Patient.type";
import RefreshComponent from "../../components/RefreshComponent";
import AlertBox from "../../components/AlertBox";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";
import { Picker } from "@react-native-picker/picker";

export default function Users({ navigation }) {
  const [allPatients, setAllPatients] = useState<PatientType[]>([]);
  const [allDaysOfAtendence, setAllDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);

  const [visibleAlert, setVisibleAlert] = useState({
    visible: false,
    id: '',
  });

  const [formMarkConsult, setFormMarkConsult] = useState({
    visible: false,
    patientId: '',
    consultId: '',
  })

  useEffect(() => {
    handleGetAllPatients();
    handleGetAllDaysOfAtendence();
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

  const handleGetAllDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence } = await getAllDaysOfAtendence();
    setAllDaysOfAtendence(allDaysOfAtendence);
  }

  const handleSubmit = async (patientId: string, dayOfAtencenceId: string ) => {
    const { status } = await createAppointment({ patientId, dayOfAtencenceId });

    if (status === 201) {
      setFormMarkConsult({
        ...formMarkConsult,
        visible: false,
      });

      navigation.navigate("Home")
    }
  }

  const submitDisable = !formMarkConsult.consultId || !formMarkConsult.patientId

  return (
    <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
      <AlertBox
        message="Tem certeza de que deseja deletar esse páciente?"
        onNoPress={() => setVisibleAlert({ visible: false, id: ''})}
        onYesPress={async () => {
          await handleDeletPatient(visibleAlert.id);
          setVisibleAlert({ visible: false, id: ''})
        }}
        visible={visibleAlert.visible}
      />

      <AlertBox
        message="Tem certeza de que deseja marcar um consulta para esse paciente?"
        onNoPress={() => setVisibleAlert({ visible: false, id: ''})}
        onYesPress={async () => {
          await handleDeletPatient(visibleAlert.id);
          setVisibleAlert({ visible: false, id: ''})
        }}
        visible={visibleAlert.visible}
      />


      <RefreshComponent handleRefresh={ async () => {
        await handleGetAllPatients();
        await handleGetAllDaysOfAtendence();
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
                      markConsultFun={(id: string) => setFormMarkConsult({ ...formMarkConsult, patientId: id, visible: true })}
                    />
                  );
                })
              }

            </ScrollView>
          </View>

        </>
      </RefreshComponent>

      <View
        style={[
          FormSelectDay.container,
          {
            display: formMarkConsult.visible && allDaysOfAtendence.length ? 'flex' : 'none'
          }
        ]}
      >
        { formMarkConsult.patientId &&
          <Text style={ FormSelectDay.title }>
            {`Marcar consulta para:\n${ allPatients.find((patient) => patient.id === formMarkConsult.patientId).name }`}
          </Text>

        }
        
        <View
          style={ FormSelectDay.selectStyle }
        >
          <Picker
            selectedValue={formMarkConsult.consultId}
            onValueChange={(itemValue, index) => {
              setFormMarkConsult({ ...formMarkConsult, consultId: itemValue })
            }}
          >
            <Picker.Item label="Selecione o dia da Consulta" value="" />
            {
              allDaysOfAtendence.map((day) => (
                <Picker.Item key={ day.id } label={`${day.date} | ${ day.hourStart }`} value={ day.id } />
              ))
            }
          </Picker>
        </View>

        <View style={ FormSelectDay.containerButtons }>
          <TouchableOpacity
            style={[
              FormSelectDay.buttonOption, FormSelectDay.buttonDelet
            ]}
            onPress={() => setFormMarkConsult({ ...formMarkConsult, visible: false })}
          >
            <Text style={ FormSelectDay.textButtonDelet }>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              FormSelectDay.buttonOption, FormSelectDay.buttonAproved,
              submitDisable ? FormSelectDay.buttonDisabled : {},
            ]}
            disabled={ submitDisable }
            onPress={async () => {
              await handleSubmit(formMarkConsult.patientId, formMarkConsult.consultId)
            }}
          >
            <Text>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}