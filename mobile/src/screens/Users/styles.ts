import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    height: '100%',
  },
});

const FormStyle = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  conatainerSearch: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 10,
  },
});

const UserListStyle = StyleSheet.create({
  container: {
    width: '95%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

const FormSelectDay = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 20,
    backgroundColor: colors.secondary,
    width: '100%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    zIndex: 9999999999999,

  },

  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },

  selectStyle: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    marginVertical: 10
  },

  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
  },

  buttonOption: {
    height: 50,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 7,
  },

  buttonDelet: {
    backgroundColor: 'red'
  },

  buttonAproved: {
    backgroundColor: colors.confirm_color
  },

  textButtonDelet: {
    color: colors.white
  },

  buttonDisabled: {
    backgroundColor: colors.disabled
  }
})

export {
  ContainerStyle,
  FormStyle,
  UserListStyle,
  FormSelectDay
}