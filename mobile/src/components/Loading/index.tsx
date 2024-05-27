import { ActivityIndicator, Text, View } from "react-native";
import { ContainerStyle } from "./styles";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../Types/RootReducer.type";

export default function Loading() {
  const { loading } = useSelector((root: RootReducerType) => root.app);

  if (!loading) {
    return
  }

  return (
    <View style={ ContainerStyle.container }>
      <ActivityIndicator size={70} />
      <Text style={ ContainerStyle.text }>Carregando...</Text>
    </View>
  )
}