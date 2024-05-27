import { Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle } from "./styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../Types/RootReducer.type";


export default function MessageAlert() {
  const [visible, setVisible] = useState(false);
  const [porcent, setPorcent] = useState(100);
  const { requestStatus } = useSelector((root: RootReducerType) => root.app);

  useEffect(() => {
    setVisible(requestStatus.visible);
    console.log(requestStatus);
  }, [requestStatus]);

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
        requestStatus.success ? ContainerStyle.successFull : ContainerStyle.error
      ]}>
        <View>
          <Text style={ ContainerStyle.text }>{ requestStatus.success ? 'Sucesso na requisição!' : 'Erro na requisição'}</Text>
        </View>

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