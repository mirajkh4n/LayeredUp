import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  main_view: {
    paddingTop: SIZES.padding2,
    paddingBottom: SIZES.padding2 * 1.3,
     alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    ...FONTS.Regular20,
    color: COLORS.white,
    marginLeft: SIZES.padding2,
    textAlign: "left",
    width:"85%"
  },
});
