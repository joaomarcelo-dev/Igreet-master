import { StyleSheet } from "react-native";

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

export {
  ContainerStyle,
  FormStyle,
}