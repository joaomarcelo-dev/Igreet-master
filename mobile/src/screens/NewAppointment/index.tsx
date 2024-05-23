import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { PatientType } from "../../Types/Patient.type";
import { ContainerStyle } from "./styles";

import HeaderScreen from "../../components/HeaderScreen";
import {Picker} from '@react-native-picker/picker';
import { getAllAppointments, getAllDaysOfAtendence, getAllPatients } from "../../api/web.api";
import { AppointmentType } from "../../Types/Appointment.type";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";
import RefreshComponent from "../../components/RefreshComponent";



export default function NewAppointment() {
  const [allPatients, setAllPatients] = useState<PatientType[]>([]);
  const [allDaysOfAtendence, setAllDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);

  const [formData, setFormData] = useState({
    patientSelected: '',
    dateSelect: '',
  });


  const handleGetAllPatients = async () => {
    const { data: allPatients } = await getAllPatients();
    setAllPatients(allPatients)
  };

  const handleGetAllDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence } = await getAllDaysOfAtendence();
    setAllDaysOfAtendence(allDaysOfAtendence)
  }

  const handlePostNewAppointment = async () => {
    
  }

  useEffect(() => {
    handleGetAllPatients()
    handleGetAllDaysOfAtendence()
  }, []);


  return (
    <>
      <HeaderScreen title="Nova cosulta" />
        <RefreshComponent
          handleRefresh={() => {
            handleGetAllPatients()
            handleGetAllDaysOfAtendence()
          }}
        >

          <View style={ ContainerStyle.container }>
            <View style={ ContainerStyle.inputLabel }>
              <Text>Paciente</Text>
              <View style={ ContainerStyle.borderSelect }>
                <Picker
                  selectedValue={formData.patientSelected}
                  onValueChange={(itemValue, index) => {
                    setFormData({ ...formData, patientSelected: itemValue });
                  }}
                >
                  <Picker.Item label="Selecione o paciente" value="" />
                  {
                    allPatients.map((patient) => {
                      return (
                        <Picker.Item
                          key={patient.id }
                          label={ patient.name }
                          value={ patient.id }
                        />
                      )
                    })
                  }
                </Picker>
              </View>
            </View>


          <View style={ ContainerStyle.inputLabel }>
            <Text>Atendimento</Text>
            <View style={ ContainerStyle.borderSelect }>
              <Picker
                selectedValue={formData.dateSelect}
                onValueChange={(itemValue, index) => {
                  setFormData({ ...formData, dateSelect: itemValue });
                }}
                >
                <Picker.Item label="Selecione o atendimento" value="" />
                {
                  allDaysOfAtendence.map((daysOfAtendence) => {
                    return (
                      <Picker.Item
                      key={ daysOfAtendence.id }
                      label={`${ daysOfAtendence.title } | ${ daysOfAtendence.date }`}
                      value={ daysOfAtendence.id }
                      />
                    )
                  })
                }
              </Picker>
            </View>
          </View>

          <TouchableOpacity
            style={[ ContainerStyle.buttonOption, ContainerStyle.buttonConfirm ]}
          >
            <Text>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </RefreshComponent>
    </>
  );
}
