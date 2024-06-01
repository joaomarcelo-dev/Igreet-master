import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const NotFoundHistory = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },

  title: {
    marginVertical: 50,
    color: colors.disabled,
    fontSize: 17,
    fontWeight: 'bold',
  }
});

export {
  ContainerStyle,
  NotFoundHistory
}