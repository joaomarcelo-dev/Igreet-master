import { Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle } from "./styles";
import { CheckBox } from 'react-native-elements';
import { colors } from "../../global";

type CardUserProps = {
  userId: string
  selectType?: boolean,
  name: string,
  birthDate: string,
  cpf: string,
  phoneNumber: string,
  hadleChangeSelect: (userId: string, checkState: boolean) => void,
  checked: boolean,
}

export default function CardUser({ selectType, birthDate, cpf, name, phoneNumber, userId, hadleChangeSelect, checked }: CardUserProps) {


  const handleCheck = () => {
    hadleChangeSelect(userId, checked);
  }

  return (
    <TouchableOpacity
      style={ ContainerStyle.container }
      onPress={ handleCheck }
      disabled={ !selectType }
    >
      <View>
        <Text style={ ContainerStyle.text }>Nome: { name }</Text>
        <Text style={ ContainerStyle.text }>Nascimento: { birthDate }</Text>
        <Text style={ ContainerStyle.text }>CPF: { cpf }</Text>
        <Text style={ ContainerStyle.text }>Telefone: { phoneNumber }</Text>
      </View>
      {
        selectType &&
        <View style={ ContainerStyle.containerCheck }>
            <CheckBox
              checked={ checked }
              onPress={ handleCheck }
              style={ ContainerStyle.checkbox }
              checkedColor={ colors.primary }
            />
        </View>
      }
    </TouchableOpacity>
  );
}