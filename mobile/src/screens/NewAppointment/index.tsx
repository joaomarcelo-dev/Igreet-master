import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { PatientInputType, PatientType } from "../../Types/Patient.type";
import { ContainerStyle } from "./styles";

import HeaderScreen from "../../components/HeaderScreen";
import {Picker} from '@react-native-picker/picker';
import { createAppointment, getAllDaysOfAtendence, getAllPatients } from "../../api/web.api";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";
import RefreshComponent from "../../components/RefreshComponent";
import { AppointmentInputType } from "../../Types/Appointment.type";

import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from 'react-native-vector-icons/Feather'
import formatUtils from "../../utils/format.utils";
import { useNavigation } from "@react-navigation/native";

const { EXPO_PUBLIC_CODE_APP } = process.env

export default function NewAppointment() {
  const [allDaysOfAtendence, setAllDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);
  const navigation = useNavigation()

  const [formData, setFormData] = useState<AppointmentInputType & PatientInputType>({
    address: 'Pov. Boa Vista do Cassiano',
    birthDate: '',
    cpf: '',
    dayOfAtencenceId: '',
    imgURL: '',
    name: '',
    patientId: '',
    phone: ''
  });


  const handleGetDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence } = await getAllDaysOfAtendence();
    setAllDaysOfAtendence(allDaysOfAtendence);
  }

  const handlePostPatient = async () => {
    const { status, data } = await createAppointment({ ...formData, appId: EXPO_PUBLIC_CODE_APP });
    
    console.log(status === 201);
    

    if (status === 201) {
      navigation.goBack();
      
      setFormData({
        address: '',
        birthDate: '',
        cpf: '',
        dayOfAtencenceId: '',
        imgURL: '',
        name: '',
        patientId: '',
        phone: '',
      })
    }
  }

  useEffect(() => {
    handleGetDaysOfAtendence
  }, [])

  const sendDisabled = !formData.name || !formData.cpf || !formData.birthDate || !formData.dayOfAtencenceId || !formData.address;

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <HeaderScreen title="Nova cosulta" />
      <RefreshComponent
        handleRefresh={async () => {
          await handleGetDaysOfAtendence()
        }}
      >
        <View style={ ContainerStyle.container }>
          <Text style={ ContainerStyle.title }>Preencha o formulário</Text>
          <View style={ ContainerStyle.inputLabel }>
            <FontAwesome6
              name="user-pen"
              size={19}
            />
            <TextInput
              style={ ContainerStyle.textInput }
              placeholder="Nome Completo"
              value={ formData.name }
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
          </View>

          <View style={ ContainerStyle.inputLabel }>
            
            <FontAwesome5
              name="address-card"
              size={19}
            />
            <TextInput
              style={ ContainerStyle.textInput }
              placeholder="CPF"
              value={ formData.cpf }
              onChangeText={(text) => setFormData({ ...formData, cpf: text })}
            />
          </View>

          <View style={ ContainerStyle.inputLabel }>
            <FontAwesome5
              name="calendar"
              size={19}
            />

            <TextInput 
              style={ ContainerStyle.textInput }
              placeholder="Data de Nascimento"
              value={ formData.birthDate }
              maxLength={10}
              onChangeText={(text) => setFormData({ ...formData, birthDate: formatUtils.formatInputDate(text) })}
            />
          </View>

          <View style={ ContainerStyle.inputLabel }>
            <FontAwesome6
              name="user-doctor"
              size={19}
            />

            <View style={ ContainerStyle.borderSelect }>
              <Picker
                selectedValue={formData.dayOfAtencenceId}
                onValueChange={(itemValue, index) => {
                  setFormData({ ...formData, dayOfAtencenceId: itemValue });
                }}
              >
                <Picker.Item label="Selecione o dia da Consulta" value="" />
                {
                  allDaysOfAtendence.map((day) => (
                    <Picker.Item key={day.id} label={`${day.date} | ${day.hourStart}`} value={day.id} />
                  ))
                }
              </Picker>
            </View>
          </View>

          <View style={ ContainerStyle.inputLabel }>
            <Feather
              name="map-pin"
              size={19}
            />
            <View style={ ContainerStyle.borderSelect }>
              <Picker
                selectedValue={formData.address}
                onValueChange={(itemValue, index) => {
                  setFormData({ ...formData, address: itemValue });
                }}
              >
                <Picker.Item label="Pov. Boa Vista do Cassiano" value="Pov. Boa Vista do Cassiano" />
              </Picker>
            </View>
          </View>

          <TouchableOpacity
            style={[
              ContainerStyle.buttonOption,
              sendDisabled ? ContainerStyle.buttonDisabled : ContainerStyle.buttonConfirm
            ]}
            onPress={async () => handlePostPatient()}
            disabled={ sendDisabled }
          >
            <Text style={ ContainerStyle.textButtonConfirm }>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </RefreshComponent>
    </View>
  );
}
