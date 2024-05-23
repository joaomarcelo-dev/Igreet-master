import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const ContainerStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    width: '100%',
    left: 0,
    zIndex: 9999999,
    alignItems: 'flex-end'
  },

  containerMessage: {
    borderRadius: 6,
    overflow: 'hidden',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 3
  },

  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 20,
  },

  successFull: {
    backgroundColor: colors.success
  },

  error: {

  },

  loadContainer: {
    alignItems: 'flex-end',
    width: '100%'
  },

  load: {
    padding: 2,
    backgroundColor: 'black',
    width: '100%',
  }
});

export {
  ContainerStyle,
}