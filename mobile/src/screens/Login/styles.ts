import { StyleSheet } from "react-native";

const ContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

const FormLoginStyle = StyleSheet.create({
  container: {

  },

  input: {
    borderWidth: 0.8,
    borderColor: 'black',
    width: '100%',
    marginVertical: 6,
  }
});

export {
  ContainerStyle,
  FormLoginStyle,
}