import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderWidth: 0.3,
    borderColor: colors.primary,
    borderRadius: 10,
    margin: 7,
  },
});

const ConteinerButtonsOptionsStyle = StyleSheet.create({
  container: {
    marginBottom: 20,
  }
});

const OptionsUserLogStyle = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.blackOpacity,
    width: '85%',
    paddingTop: 20,
  },

  texts: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.fontColorOpacty,
  }
  
});

export {
  ContainerStyle,
  ConteinerButtonsOptionsStyle,
  OptionsUserLogStyle,
}