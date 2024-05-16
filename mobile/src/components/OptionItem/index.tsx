import { Switch, SwitchChangeEvent, Text, View } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ContainerStyle } from "./styles";
import { IconProps } from "react-native-vector-icons/Icon";
import { ChangeEvent, useState } from "react";

type OptionItemProps = {
  title: string;
  icon: IconProps;
  type?: 'switch' | 'button';
  iconRight?: IconProps;
}

export default function OptionItem({ title, icon: { name, size = 25 }, type, iconRight }: OptionItemProps) {
  const [isEnabled, setIsEnabled] = useState(false)

  const handleSwitch = (value: boolean) => {
    setIsEnabled(value);
  };

  return (
    <View style={ ContainerStyle.container }>
      <MaterialCommunityIcons
        name={ name }
        size={ size }
      />

      <Text>
        { title }  
      </Text>
      
      {
        type === 'switch' ? (
          <Switch
            onValueChange={handleSwitch}
            value={isEnabled}
          />
        ) : (
          <MaterialCommunityIcons
            name={ iconRight?.name}
            size={ iconRight?.size || 25}
          />
        )
      }
    </View>
  )
}