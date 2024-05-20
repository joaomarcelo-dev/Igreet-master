import { Text, View, TouchableOpacity } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderStyles } from "./style";
import { useNavigation } from "@react-navigation/native";

type HeaderScreenProps = {
  title: string;
  selects?: number;
}


export default function HeaderScreen({ title, selects }: HeaderScreenProps) {
  const navigation = useNavigation();
  return (
    <>
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

        { selects ? (
          <>
            <View />
            <Text style={ HeaderStyles.profileText }>Selecionados: { selects }</Text>
          </>
        ) : (
          <>
            <Text style={ HeaderStyles.profileText }>{ title }</Text>
            <View />
          </>
        )
        }

      </View>
    </>
  );
}