import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const ContainerStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 40
  },

  inputLabel: {
    width: '90%',
    marginVertical: 5,
  },

  borderSelect: {
    borderWidth: 0.8,
    borderColor: colors.black,
    borderRadius: 10,
    marginVertical: 10,
  },

  textInputDetail: {
    borderWidth: 0.4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: colors.black,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 16
  }

});

export {
  ContainerStyle,
}