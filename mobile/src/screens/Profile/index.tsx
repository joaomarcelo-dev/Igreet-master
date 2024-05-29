import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SectionStyles } from "./styles";
import { imgProfileDefault } from "../../global/conf/imagesDefault";


import Ionicons from 'react-native-vector-icons/Ionicons'
import { ContainerStyle } from "../Home/styles";
import OptionItem from "../../components/OptionItem";
import { ConteinerButtonsOptionsStyle, OptionsUserLogStyle } from "../../components/OptionItem/styles";
import HeaderScreen from "../../components/HeaderScreen";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/user.actions";

export default function Profile() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userActions.logOut());
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderScreen
        title="Perfil"
      />

      <View style={ SectionStyles.container }>
        <TouchableOpacity style={ SectionStyles.buttonSetImageProfle }>
          <Image
            src={ imgProfileDefault }
            style={ SectionStyles.imageProfile }
          />

          <Ionicons
            name="camera-outline"
            size={20}
            style={ SectionStyles.iconCam }
          />
        </TouchableOpacity>

        <View>
          <Text style={ SectionStyles.profileName }>
            João Marcelo Lima Oliveira
          </Text>

          <Text style={ SectionStyles.emailProfile }>
            joaomarcelolimaoliveira7@gmail.com
          </Text>

          <Text style={ SectionStyles.textAppVersion }>
            Versão do app: 0.0.1v
          </Text>
        </View>


        <View style={ ConteinerButtonsOptionsStyle.container }>
          <OptionItem
            icon={{ name: 'account' }}
            title="Dados do profissional"
            type="button"
            iconRight={{ name: 'chevron-right' }}
          />

          <OptionItem
            icon={{ name: 'calendar-range-outline' }}
            title="Lembretes do diário"
            type="switch"
          />
        </View>

        <View style={ OptionsUserLogStyle.container }>
          <TouchableOpacity>
            <Text style={ OptionsUserLogStyle.texts }>Trocar sua senha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogOut}
          >
            <Text style={ OptionsUserLogStyle.texts }>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}