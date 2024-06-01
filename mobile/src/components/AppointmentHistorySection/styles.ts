import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  contente: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 30
  },

  containerDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  line: {
    width: '60%',
    backgroundColor: colors.black,
    height: 1
  },

  textDate: {
    textAlign: 'right',
    marginVertical: 8,
    fontSize: 14,
    fontWeight: 'bold',
  }
})

export {
  ContainerStyle,
}