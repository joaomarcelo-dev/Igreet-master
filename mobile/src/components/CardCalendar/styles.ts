import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const ContainerStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor:colors.disabled,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 4,
  },

  lineColor: {
    width: 4,
    height: 45,
    borderRadius: 50,
    backgroundColor: 'blue'
  },

  contentTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8
  },

  containerDataInfo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  contentTextDataInfo: {
    flexDirection: 'row',
    gap: 5,
  },

  icons: {
    color: colors.primary
  }

});

export {
  ContainerStyle,
}