import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.blackOpacity,
    marginVertical: 5,
    width: '100%',
    borderRadius: 10,
    // borderWidth: 1,
    overflow: 'hidden',
    // paddingLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  
  simpleInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  imgPatient: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  
  textCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black
  },

  moreInfo: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  textMoreInfo: {
    color: colors.black,
    marginTop: 5,
  },

  containerButtonOptions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  },

  buttonOption: {
    height: 50,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 7,
  },

  buttonDelet: {
    backgroundColor: 'red'
  },

  buttonAproved: {
    backgroundColor: colors.confirm_color
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