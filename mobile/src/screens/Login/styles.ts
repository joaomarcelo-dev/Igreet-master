import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const FormLoginStyle = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 60,
    borderRadius: 10,
  },

  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 19,
    fontWeight: 'bold'
  },

  input: {
    borderWidth: 0.3,
    borderColor: 'black',
    borderRadius: 10,
    width: '100%',
    marginVertical: 6,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  button: {
    padding: 10,
    width: '100%',
    borderRadius: 10,
    marginTop: 20
  },

  buttonLogin: {
    backgroundColor: colors.primary,
  },

  buttonLoginDisabled: {
    backgroundColor: colors.disabled,
  },

  textButtonLogin: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});

export {
  ContainerStyle,
  FormLoginStyle,
}