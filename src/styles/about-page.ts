import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fontSizes, fontWeights } from "./fonts";

export const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: fontSizes.section,
    fontWeight: fontWeights.black,
    color: colors.primary,
    marginBottom: 10,
    letterSpacing: 1,
  },
  textBody: {
    fontSize: fontSizes.medium,
    color: colors.textMuted,
    lineHeight: 20,
    marginBottom: 20,
  },
  cardHeader: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    marginTop: 12,
  },
  cardBody: {
    fontSize: fontSizes.body,
    color: colors.textMuted,
    marginTop: 2,
    lineHeight: 18,
  },
});
