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
    marginVertical: 5,
  },
});

export {
  ContainerStyle,
  FormStyle,
  UserListStyle,
}