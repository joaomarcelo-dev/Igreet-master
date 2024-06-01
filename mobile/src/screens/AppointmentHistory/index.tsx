import { View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import { getAllDaysOfAtendence } from "../../api/web.api";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";
import { useEffect, useState } from "react";
import AppointmentHistorySection from "../../components/AppointmentHistorySection";
import RefreshComponent from "../../components/RefreshComponent";
import { Text } from "react-native";
import { ContainerStyle, NotFoundHistory } from "./styles";

export default function AppointmentHistory() {
  const [allDaysOfAtendence, setAllDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);

  const handleGetDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence }: { data: DayOfAtencenceType[] } = await getAllDaysOfAtendence();
    const daysWithAtendence = allDaysOfAtendence.filter((day) => day.Appointments.length);
    
    setAllDaysOfAtendence(daysWithAtendence);
  }

  useEffect(() => {
    handleGetDaysOfAtendence();
  },[]);

  return (
    <RefreshComponent
      handleRefresh={async () => {
        await handleGetDaysOfAtendence()
      }}
    >
      <View style={ ContainerStyle.container }>
        <HeaderScreen title="Histórico de atendimento" />

          {
            allDaysOfAtendence.length > 0 ? (
              <View>
                {
                  allDaysOfAtendence.map((day) => {
                    return (
                      <AppointmentHistorySection
                        key={ day.id }
                        appointments={ day.Appointments }
                        day={ day }
                      />
                    );
                  })
                }
              </View>
            ) : (
              <View style={ NotFoundHistory.cotainer }>
                <Text style={ NotFoundHistory.title }>Nenhum histórico de atendimento detectado</Text>
              </View>
            )
          }
      </View>
    </RefreshComponent>
  )
}