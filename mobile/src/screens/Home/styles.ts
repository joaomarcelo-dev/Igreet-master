import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },
});

const HeaderStyle = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  imageProfile: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  textWelcome: {
    color: colors.secondary,
    fontSize: 18,
    marginLeft: 20,
  },

  iconNotification: {
    color: colors.terciary,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    padding: 4,
  }
});

const SectionStyle = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    marginTop: -16,
    flex: 1,
  },
});

const SpeedAccessStyle = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.terciary,
    marginBottom: 25,
  },

  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  
  iconButton: {
    backgroundColor: colors.blackOpacity,
    padding: 16,
    borderRadius: 100,
  },

  iconArgend: {
    color: colors.primary,
  },

  buttonArgendConsult: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackOpacity,
    padding: 5,
    borderRadius: 10,
    gap: 7,
  },

  textArgend: {
    color: colors.fontColorOpacty,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {
  ContainerStyle,
  HeaderStyle,
  SectionStyle,
  SpeedAccessStyle,
};