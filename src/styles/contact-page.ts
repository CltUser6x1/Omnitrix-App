import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fontSizes, fontWeights } from "./fonts";

export const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    marginTop: 14,
    letterSpacing: 1,
  },
  value: {
    fontSize: fontSizes.medium,
    color: colors.textWhite,
    marginTop: 2,
    fontWeight: fontWeights.medium,
  },
});
