import { StyleSheet } from "react-native";

const ContainerStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999999,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 25,
  }
});

export  {
  ContainerStyle,
}