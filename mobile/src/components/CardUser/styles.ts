import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: colors.blackOpacity,
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },

  contentInitialInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 2,
  },

  containerDetail: {
    marginTop: 10
  },

  textDetail: {
    marginVertical: 2,
    color: colors.black,
    fontSize: 13,
  },

  containerButtonOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  iconArgend: {
    color: colors.primary,
  },

  buttonArgendConsult: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: colors.blackOpacity,
    padding: 10,
    borderRadius: 10,
    gap: 7,
    width: '85%'
  },

  textArgend: {
    color: colors.fontColorOpacty,
    fontSize: 13,
    fontWeight: 'bold',
  },

  buttonDeletUser: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: -18,
    borderRadius: 10
  }
});

export {
  ContainerStyle
}