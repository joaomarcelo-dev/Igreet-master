import { ReactElement, useState } from "react";
import { FlatList, ScrollView } from "react-native";

type RefreshComponentProps = {
  handleRefresh: () => void;
  children: ReactElement<any, any>
}
export default function RefreshComponent({ children, handleRefresh }: RefreshComponentProps) {
  const [refreshing, setRefreshing] = useState(false)

  const refresh = async () => {
    handleRefresh()
  }

  return (
    <FlatList
      data={[0]}
      renderItem={() => (
        <ScrollView>
          { children }
        </ScrollView>
      )}
      refreshing={ refreshing }
      onRefresh={ refresh }
      contentContainerStyle={{
        flexDirection: 'column'
      }}
    />
  )
}