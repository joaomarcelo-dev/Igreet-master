import { Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle } from "./styles";
import { useEffect, useState } from "react";

type MessageAlertProp = {
  load: boolean
}

export default function MessageAlert({ load }: MessageAlertProp) {
  const [visible, setVisible] = useState(true);
  const [porcent, setPorcent] = useState(100);

  useEffect(() => {
    setVisible(true)
  }, [load]);

  useEffect(() => {
    if (visible && porcent > 0) {
      const interval = setInterval(() => {
        setPorcent(prevPorcent => {
          if (prevPorcent <= 1) {
            clearInterval(interval);
            setVisible(false);
            setPorcent(100)
            return 0;
          }
          return prevPorcent - 3;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [visible, porcent]);

  if (!visible) {
    return <View />
  }

  return (
    <View style={ ContainerStyle.container }>
      <View style={[
        ContainerStyle.containerMessage,
        ContainerStyle.successFull
      ]}>
        <Text style={ ContainerStyle.text }>Sucesso na requisição!</Text>
        <View style={ ContainerStyle.loadContainer }>
          <View
            style={[ ContainerStyle.load, { width: `${porcent}%` } ]}
          />
        </View>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  )

}