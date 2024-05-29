import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },

  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  textContent: {
    color: colors.disabled,
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export {
  ContainerStyle,
}