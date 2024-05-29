import { View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import { getAllDaysOfAtendence } from "../../api/web.api";
import { DayOfAtencenceType } from "../../Types/DaysOfAtendence.type";
import { useEffect, useState } from "react";
import AppointmentHistorySection from "../../components/AppointmentHistorySection";
import RefreshComponent from "../../components/RefreshComponent";

export default function AppointmentHistory() {
  const [allDaysOfAtendence, setAllDaysOfAtendence] = useState<DayOfAtencenceType[]>([]);

  const handleGetDaysOfAtendence = async () => {
    const { data: allDaysOfAtendence } = await getAllDaysOfAtendence();
    console.log(allDaysOfAtendence);
    
    setAllDaysOfAtendence(allDaysOfAtendence);
  }

  useEffect(() => {
    handleGetDaysOfAtendence()
  },[]);

  return (
    <RefreshComponent
      handleRefresh={async () => {
        await handleGetDaysOfAtendence()
      }}
    >
      <View>
        <HeaderScreen title="Histórico de atendimento" />

          <View>
            {
              allDaysOfAtendence.map((day) => {            
                return (
                  <AppointmentHistorySection
                    key={ day.id }
                    appointments={ day.Appointments }
                    day={ day }
                  />
                )
              })
            }
          </View>
      </View>
    </RefreshComponent>
  )
}