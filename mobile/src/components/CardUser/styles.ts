import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: colors.color_violet,
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },

  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 2,
  },

  containerCheck: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  checkbox: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    color: colors.white,
  }
});

export {
  ContainerStyle
}