import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 40,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
  },

  inputLabel: {
    width: '90%',
    marginVertical: 5,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },

  borderSelect: {
    borderBottomWidth: 0.4,
    borderBottomColor: colors.black,
    marginVertical: 10,
    width: '90%'
  },

  textInput: {
    borderBottomWidth: 0.4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: colors.black,
    borderRadius: 10,
    marginTop: 7,
    fontSize: 16,
    width: '90%'
  },

  buttonOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
  },

  buttonConfirm: {
    backgroundColor: 'dodgerblue'
  },

  buttonDisabled: {
    backgroundColor: colors.disabled,
  },

  textButtonConfirm: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15
  }

});

export {
  ContainerStyle,
}