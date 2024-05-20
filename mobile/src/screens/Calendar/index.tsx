import { Button, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import { getAllDaysOfAtendence } from "../../api/web.api";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";

import moment from 'moment';

import { Calendar as CalendarComponent, LocaleConfig } from 'react-native-calendars';
import HeaderScreen from "../../components/HeaderScreen";
import { CalendarStyle, ListCardStyle, ModalNewDayOfAtendenceStyle } from "./styles";
import CardCalendar from "../../components/CardCalendar";
import { colors } from "../../global";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';


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
    const formattedDate = convertDate(item.date);
    acc[formattedDate] = {
      selected: true,
      selectedColor: item.title === 'Atendimento Médico' ? 'blue' : 'yellow'
    };
    return acc;
  }, {});
}

const formatDateExtension = (dateStr) => {
  return moment(dateStr).locale('pt-br').format('D [de] MMMM [de] YYYY')
};

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RefreshComponent from "../../components/RefreshComponent";

export default function Calendar({ navigation }) {
  const [allDaysOfAtendence, setAllDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);
  const [visibleModalNewDayOfAtendenc, setVisibleModalNewDayOfAtendenc] = useState<boolean>(false);
  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(new Date());
  const [showTimeSelectStart, setShowTimeSelectStart] = useState(false);
  const [showTimeSelectEnd, setShowTimeSelectEnd] = useState(false);
  const [currentSetting, setcurrentSetting] = useState('from');
  const [formData, setFormData] = useState({
    atendimentSelected: '',
    daySelect: '',
    hourStart: '',
    hourOption: 'AM',
  });

  useEffect(() => {
    handleGetAllDaysOfAtendence()
  }, []);
  
  const handleGetAllDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence } = await getAllDaysOfAtendence();    
    setAllDaysOfAtendence(allDaysOfAtendence);  
  }

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    if (currentSetting === 'from') {
      const currentDate = selectedDate || timeStart
      setShowTimeSelectStart(Platform.OS === 'ios');
      setTimeStart(currentDate);
    } else {
      const currentDate = selectedDate || timeEnd;
      setShowTimeSelectEnd(Platform.OS === 'ios');
      setTimeEnd(currentDate);
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


  return (
    <>
      <ScrollView>
        <HeaderScreen title="Calendário" />

        {
          visibleModalNewDayOfAtendenc && (
            <View style={ ModalNewDayOfAtendenceStyle.container }>
              <Text style={ ModalNewDayOfAtendenceStyle.title }>{ formatDateExtension(formData.daySelect) }</Text>

              <View style={ ModalNewDayOfAtendenceStyle.containerLabel }>
                <Text>Titulo:</Text>

                <TextInput placeholder="Titulo" style={[ ModalNewDayOfAtendenceStyle.inputTitle, ModalNewDayOfAtendenceStyle.inputStyle ]} />
              </View>
              
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
                      <Text>{ timeStart ? `${timeStart.getHours()}:${timeStart.getMinutes()}` : '00:00' }</Text>
                    </View>
                  </TouchableOpacity>


                  { showTimeSelectStart &&
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={timeStart}
                      mode={'time'}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                      onTouchCancel={() => console.log('Canceleando')}
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
                      <Text>{ timeEnd ? `${timeEnd.getHours()}:${timeEnd.getMinutes()}` : '00:00' }</Text>
                    </View>
                  </TouchableOpacity>


                  { showTimeSelectEnd &&
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={timeEnd}
                      mode={'time'}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                      onTouchCancel={() => console.log('Canceleando')}
                    />
                  }
                </>
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

                <TouchableOpacity style={[ ModalNewDayOfAtendenceStyle.buttonOption, ModalNewDayOfAtendenceStyle.buttonConfirm ]}>
                  <Text style={ ModalNewDayOfAtendenceStyle.textButtonClose }>Confirmar</Text>
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
                    current={'2024-05-01'}
                    markedDates={ handleDaysOfAtendenc(allDaysOfAtendence) }
                    markingType={'dot'}
                    onDayPress={(date) => {
                      if (allDaysOfAtendence.find((day) => convertDate(day.date) === date.dateString)) {
                        console.log('Ai dentro');
                      } else {
                        setFormData({...formData, daySelect: date.dateString})
                        setVisibleModalNewDayOfAtendenc(true)
                      }
                    }}
                  />

                  <View style={ ListCardStyle.container }>
                    <Text style={ ListCardStyle.title }>Detalhes</Text>

                    <View style={ ListCardStyle.contentCards }>
                      {
                        allDaysOfAtendence.map((day) => (
                          <CardCalendar
                            key={ day.id }
                            title={ day.title }
                            day={ formatDateExtension(convertDate(day.date)) }
                            hourStart={ day.hourStart }
                            hourEnd={ day.hourEnd }
                          />
                        ))
                      }
                    </View>
                  </View>
                </>
              )
            }
          </>
        </RefreshComponent>
      </ScrollView>
    </>
  );
}