import { Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle, FistService } from "./styles";

type ServiceCardPropType = {
  index: number,
  id: string,
  funDelet: (id: string) => void,
  funCheck: (id: string) => void,
}

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ServiceCard({ id, index, funCheck, funDelet }: ServiceCardPropType) {
  return (
    <>
      <View
        style={[
          ContainerStyle.container,
          index === 0 && FistService.container
        ]}
      >
        <Text style={ ContainerStyle.textCard }>João Marcelo Lima Oliveira</Text>
        
        <View style={ ContainerStyle.containerButtonOptions }>
          <TouchableOpacity onPress={() => funDelet(id)}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={25}
              color={'red'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => funCheck(id)}>
            <MaterialCommunityIcons
              name="check"
              size={25}
              color={'green'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}