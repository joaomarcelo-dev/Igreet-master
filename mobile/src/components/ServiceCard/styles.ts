import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 5,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
  },

  textCard: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  containerButtonOptions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15
  }
});

const FistService = StyleSheet.create({
  container: {
    backgroundColor: colors.blackOpacity,
    borderColor: colors.terciary,
  }
})

export {
  ContainerStyle,
  FistService
}