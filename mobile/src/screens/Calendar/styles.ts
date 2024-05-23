import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const ContainerStyle = StyleSheet.create({
  container: {

  },

  containerList: {
    
  }
});

const CalendarStyle = StyleSheet.create({
  calendar: {
    height: 350,
  }
});

const ListCardStyle = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.grey2,
  },

  contentCards: {
    marginTop: 15
  },

  textNotFound: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.divider,
    marginTop: 30,
    textAlign: 'center'
  }
});

const ModalNewDayOfAtendenceStyle = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    marginTop: -10,
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    width : '100%',
    marginTop: 25
  },

  containerSelect: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    marginTop: 20,
  },

  containerLabel: {
    marginTop: 10,

  },

  inputStyle: {
    borderWidth: 0.7,
    borderColor: colors.divider,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 16
  },

  inputTitle: {
    height: 80,
  },

  containerNotifications: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },

  containerHour: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },

  containerInputHour: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderWidth: 1,
    borderColor: colors.black,
    width: 150,
    padding: 10,
    borderRadius: 10
  },
  
  containerButtons: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },

  buttonOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  buttonClose: {
    backgroundColor: colors.error
  },

  buttonConfirm: {
    backgroundColor: colors.success
  },

  buttonDisabled: {
    backgroundColor: colors.disabled,
  },

  textButtonClose: {
    color: colors.white
  }
});

export {
  ContainerStyle,
  CalendarStyle,
  ListCardStyle,
  ModalNewDayOfAtendenceStyle
}