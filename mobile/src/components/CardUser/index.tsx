import { Text, View } from "react-native";
import { ContainerStyle } from "./styles";
import { CheckBox } from 'react-native-elements';
import { useState } from "react";
import { colors } from "../../global";

type CardUserProps = {
  check?: boolean,
  name: string,
  birthDate: string,
  cpf: string,
  phoneNumber: string
}

export default function CardUser({ check, birthDate, cpf, name, phoneNumber }: CardUserProps) {
  const [checked, setChecked] = useState(false);


  const handleCheck = () => {
    setChecked(!checked);
  }

  return (
    <View style={ ContainerStyle.container }>
      <View>
        <Text style={ ContainerStyle.text }>Nome: { name }</Text>
        <Text style={ ContainerStyle.text }>Nascimento: { birthDate }</Text>
        <Text style={ ContainerStyle.text }>CPF: { cpf }</Text>
        <Text style={ ContainerStyle.text }>Telefone: { phoneNumber }</Text>
      </View>
      {
        check &&
        <View style={ ContainerStyle.containerCheck }>
            <CheckBox
              checked={ checked }
              onPress={ handleCheck }
              style={ ContainerStyle.checkbox }
              checkedColor={ colors.primary }
            />
        </View>
      }
    </View>
  );
}