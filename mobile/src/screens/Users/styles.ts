import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    alignItems: 'center',
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
    marginVertical: 5,
  },
});

const ConfirmModalStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonConfirm: {
    backgroundColor: colors.confirm_color,
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 15
  },

  textConfirm: {
    fontSize: 15,
  }
})

export {
  ContainerStyle,
  FormStyle,
  UserListStyle,
  ConfirmModalStyle
}