import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderStyles } from "./style";
import { useNavigation } from "@react-navigation/native";

type HeaderScreenProps = {
  title: string;
}


export default function HeaderScreen({ title }: HeaderScreenProps) {
  const navigation = useNavigation();
  return (
    <View style={ HeaderStyles.container }>
      <TouchableOpacity
        onPress={ () => navigation.goBack() }
      >
        <Ionicons
          name="arrow-back"
          size={25}
          color='#fff'
        />
      </TouchableOpacity>

      <Text style={ HeaderStyles.profileText }>{ title }</Text>

      <View />
    </View>
  );
}