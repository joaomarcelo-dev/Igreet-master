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
    fontSize: 15,
    marginBottom: 20
  },

  buttonRedirect: {
    backgroundColor: colors.primary,
    padding: 7,
    borderRadius: 10,
    width: '80%'
  },

  textButton: {
    textAlign: 'center',
    color: colors.white,
  }
});

export {
  CardPlansStyle,
};
