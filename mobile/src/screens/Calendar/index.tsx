import { Button, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import { createDaysOfAtendence, deleteDaysOfAtendence, getAllDaysOfAtendence } from "../../api/web.api";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";


import { Calendar as CalendarComponent, LocaleConfig } from 'react-native-calendars';

import HeaderScreen from "../../components/HeaderScreen";
import { CalendarStyle, ListCardStyle, ModalNewDayOfAtendenceStyle } from "./styles";
import CardCalendar from "../../components/CardCalendar";
import { colors } from "../../global";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: [
    'Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'
  ],
  dayNames: [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
  ],
  dayNamesShort: [
    'Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'
  ],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

const convertDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('-');
  return `${year}-${month}-${day}`;
}

const handleDaysOfAtendenc = (days: DayOfAtencenceType[]) => {
  return days.reduce((acc, item) => {
    acc[item.date] = {
      selected: true,
      selectedColor: 'blue' 
    };
    
    return acc;
  }, {});
}


import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RefreshComponent from "../../components/RefreshComponent";
import AlertBox from "../../components/AlertBox";
import { Switch } from "react-native-elements";

export default function Calendar({ navigation }) {
  const [allDaysOfAtendence, setAllDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);
  const [visibleModalNewDayOfAtendenc, setVisibleModalNewDayOfAtendenc] = useState<boolean>(false);
  const [showTimeSelectStart, setShowTimeSelectStart] = useState(false);
  const [showTimeSelectEnd, setShowTimeSelectEnd] = useState(false);
  const [currentSetting, setcurrentSetting] = useState('from');
  const [showAlertDeletDay, setShowAlertDeletDay] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    daySelect: '',
    hourStart: new Date(),
    hourEnd: new Date(),
    title: '',
    notification: false,
  });

  useEffect(() => {
    handleGetAllDaysOfAtendence()
  }, []);
  
  const handleGetAllDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence } = await getAllDaysOfAtendence('true');    
    setAllDaysOfAtendence(allDaysOfAtendence);  
  }

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    if (currentSetting === 'start') {
      const currentDate = selectedDate || formData.hourStart
      setShowTimeSelectStart(Platform.OS === 'ios');
      setFormData({ ...formData, hourStart: currentDate });
    } else {
      const currentDate = selectedDate || formData.hourEnd;
      setShowTimeSelectEnd(Platform.OS === 'ios');
      setFormData({ ...formData, hourEnd: currentDate });
    }    
  };

  const showTimepickerStart = (current: 'start' | 'end') => {
    setShowTimeSelectStart(true);
    setcurrentSetting(current);
  };

  const showTimepickerEnd = (current: 'start' | 'end') => {
    setShowTimeSelectEnd(true);
    setcurrentSetting(current);
  };


  const handleDeletDayOfAtendenceById = async (id: string) => {
    const {} = await deleteDaysOfAtendence(id);
  }

  const buttonConfirDisabled =  !formData.daySelect || !formData.hourStart || !formData.hourEnd || !formData.title


  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <AlertBox
        visible={showAlertDeletDay}
        message={`Deseja remover o dia: ${convertDate(formData.daySelect).replace(/-/g, '/')}?`}
        onNoPress={() => {
          setShowAlertDeletDay(false);
        }}
        onYesPress={async () => {
          const { id } = allDaysOfAtendence.find((day) => day.date === formData.daySelect);
          try {
            await handleDeletDayOfAtendenceById(id)
            await handleGetAllDaysOfAtendence();
          } catch(e) {
            console.log(e);
            
          } finally {
            setShowAlertDeletDay(false)
          }
        }}

      />
      <View style={{ backgroundColor: 'white' }}>
        <HeaderScreen title="Calendário" />

        {
          visibleModalNewDayOfAtendenc && (
            <View style={ ModalNewDayOfAtendenceStyle.container }>
              <Text style={ ModalNewDayOfAtendenceStyle.title }>{ formData.daySelect }</Text>

              <View style={ ModalNewDayOfAtendenceStyle.containerLabel }>
                <Text>Titulo:</Text>

                <TextInput
                  style={[ ModalNewDayOfAtendenceStyle.inputStyle, ModalNewDayOfAtendenceStyle.inputTitle ]}
                  onChangeText={(title) => setFormData({ ...formData, title, })}
                  value={ formData.title }
                />
              </View>

              <View style={ ModalNewDayOfAtendenceStyle.containerNotifications }>
                <Text>Notificar todos os pacientes?</Text>
                <Switch value={ formData.notification } onChange={() => setFormData({ ...formData, notification: !formData.notification })} />
              </View>

              <View style={ ModalNewDayOfAtendenceStyle.containerLabel }>
                <Text>Selecione o horário: </Text>
                <View style={ ModalNewDayOfAtendenceStyle.containerHour }>
                  <>
                    <TouchableOpacity
                      style={ ModalNewDayOfAtendenceStyle.containerInputHour }
                      onPress={() => showTimepickerStart('start')}
                    >
                      <MaterialCommunityIcons
                        name="alarm"
                        size={30}
                        color={colors.fontColorOpacty}
                      />
                      <View>
                        <Text>Inicio:</Text>
                        <Text>
                          {formData.hourStart
                            ? `${String(formData.hourStart.getHours()).padStart(2, '0')}:${String(formData.hourStart.getMinutes()).padStart(2, '0')}`
                            : '00:00'
                          }
                        </Text>
                      </View>
                    </TouchableOpacity>


                    { showTimeSelectStart &&
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={formData.hourStart}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        onTouchCancel={() => console.log('Cancelando')}
                      />
                    }
                  </>

                  <>
                    <TouchableOpacity
                      style={ ModalNewDayOfAtendenceStyle.containerInputHour }
                      onPress={() => showTimepickerEnd('end')}
                    >
                      <MaterialCommunityIcons
                        name="alarm"
                        size={30}
                        color={colors.fontColorOpacty}
                      />
                      <View>
                        <Text>Fim:</Text>
                        <Text>{ formData.hourEnd ? `${String(formData.hourEnd.getHours()).padStart(2, '0')}:${String(formData.hourEnd.getMinutes()).padStart(2, '0')}` : '00:00' }</Text>
                      </View>
                    </TouchableOpacity>


                    { showTimeSelectEnd &&
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={formData.hourEnd}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        onTouchCancel={() => console.log('Cancelando')}
                      />
                    }
                  </>
                </View>
              </View>

              <View style={ ModalNewDayOfAtendenceStyle.containerButtons }>
                <TouchableOpacity
                  style={[ ModalNewDayOfAtendenceStyle.buttonOption, ModalNewDayOfAtendenceStyle.buttonClose ]}
                  onPress={() => {
                    setVisibleModalNewDayOfAtendenc(false)
                  }}
                >
                  <Text style={ ModalNewDayOfAtendenceStyle.textButtonClose }>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    ModalNewDayOfAtendenceStyle.buttonOption,
                    buttonConfirDisabled ? ModalNewDayOfAtendenceStyle.buttonDisabled : ModalNewDayOfAtendenceStyle.buttonConfirm
                  ]}
                  disabled={ buttonConfirDisabled }
                >
                  <Text
                    style={ ModalNewDayOfAtendenceStyle.textButtonClose }
                    onPress={ async () => {
                      await createDaysOfAtendence({
                        date: formData.daySelect,
                        hourStart: `${String(formData.hourStart.getHours()).padStart(2, '0')}:${String(formData.hourStart.getMinutes()).padStart(2, '0')}`,
                        hourEnd: `${String(formData.hourEnd.getHours()).padStart(2, '0')}:${String(formData.hourEnd.getMinutes()).padStart(2, '0')}`,
                        title: formData.title,
                        notification: formData.notification
                      });
                      setFormData({ daySelect: '', hourEnd: new Date(), hourStart: new Date(), notification: false, title: '' })
                      setVisibleModalNewDayOfAtendenc(false);
                      await handleGetAllDaysOfAtendence();
                    }}
                    
                  >
                    Confirmar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }

        <RefreshComponent
          handleRefresh={async () => {
            await handleGetAllDaysOfAtendence();
          }}
        >
          <>
            {
              !visibleModalNewDayOfAtendenc && (
                <>
                  <CalendarComponent
                    style={ CalendarStyle.calendar } 
                    current={'2024-06-01'}
                    markedDates={ handleDaysOfAtendenc(allDaysOfAtendence) }
                    markingType={'dot'}
                    onDayPress={(date) => {
                      if (allDaysOfAtendence.find((day) => day.date === date.dateString)) {
                        setShowAlertDeletDay(true);
                        setFormData({...formData, daySelect: date.dateString});
                      } else {
                        if (convertDate(date.dateString) >= new Date().toLocaleDateString().replace(/\//g, '-')) {
                          setFormData({...formData, daySelect: date.dateString});
                          setVisibleModalNewDayOfAtendenc(true);
                        }
                      }
                    }}
                  />

                  <View style={ ListCardStyle.container }>

                    {
                      allDaysOfAtendence.length ? (
                        <>
                          <Text style={ ListCardStyle.title }>Detalhes</Text>

                          <View style={ ListCardStyle.contentCards }>
                            {
                              allDaysOfAtendence.map((day) => (
                                <CardCalendar
                                  key={ day.id }
                                  title={ day.title }
                                  day={ convertDate(day.date) }
                                  hourStart={ day.hourStart }
                                  hourEnd={ day.hourEnd }
                                  notification={ day.notification }
                                />
                              ))
                            }
                          </View>
                        </>
                      ) : (
                        <Text style={ ListCardStyle.textNotFound }>Nenhum dia de atendimento disponivel</Text>
                      )
                    }
                  </View>
                </>
              )
            }
          </>
        </RefreshComponent>
      </View>
    </View>
  );
}