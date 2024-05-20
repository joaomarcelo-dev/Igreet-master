import { StyleSheet } from "react-native";
import { colors } from "../../global";

const CardPlansStyle = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'column',
    marginVertical: 10,
  },

  topOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },

  textNameCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  textMoreOptions: {
    color: colors.fontColorOpacty
  },

  containerList: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textNotFoundItens: {
    textAlign: 'center',
    fontSize: 17,
  },

  contentInfo: {
    width: '100%',
    alignItems: 'center'
  },

  imgPatient: {
    width: 90,
    height: 90,
    borderRadius: 50
  },

  namePatient: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  infoTextPatient: {
    marginTop: 10,
    fontWeight: 'bold',
  },

  buttonRedirect: {
    backgroundColor: colors.primary,
    padding: 7,
    borderRadius: 10,
    width: '80%',
    marginTop: 20
  },

  textButton: {
    textAlign: 'center',
    color: colors.white,
  },
});

export {
  CardPlansStyle,
};
