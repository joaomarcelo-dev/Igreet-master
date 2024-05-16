import { StyleSheet } from "react-native";
import { colors } from "../../global";

const HeaderStyles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileText: {
    color: colors.white,
    fontSize: 19
  },
});

export { HeaderStyles };