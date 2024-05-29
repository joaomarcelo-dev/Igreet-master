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
    color: colors.fontColorOpacty,
    paddingVertical: 5,
  },

  containerList: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.white,
    // paddingHorizontal: 20,
    paddingBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },

  textNotFoundItens: {
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 20,
    color: colors.disabled
  },

  contentInfo: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  
  buttonDelet: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9999,
    padding: 10,
    borderBottomStartRadius: 8,
  },
  
  imgPatient: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 40,
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
