import { StyleSheet } from "react-native";
import { colors } from "../../global";

const SectionStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: 20,
    height: '100%',
  },

  buttonSetImageProfle: {
    position: 'relative',
    marginBottom: 35,
  },

  imageProfile: {
    width: 95,
    height: 95,
  },

  iconCam: {
    position: 'absolute',
    bottom: '7%',
    right: '1%',
    padding: 7,
    backgroundColor: colors.white,
    borderRadius: 20
  },

  containerProfileInfo: {
    textAlign: 'center',
  },

  profileName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.fontColorOpacty,
    textAlign: 'center',
    marginBottom: 2,
  },

  emailProfile: {
    fontSize: 14,
    color: colors.fontColorOpacty,
    textAlign: 'center',
    marginBottom: 10,
  },

  textAppVersion: {
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 10,
  },

  containerOptions: {

  }
})

export {
  SectionStyles
}