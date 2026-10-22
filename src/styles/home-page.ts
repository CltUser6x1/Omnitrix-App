import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fontSizes, fontWeights } from "./fonts";

export const styles = StyleSheet.create({
  heroBanner: {
    backgroundColor: colors.cardBg,
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: fontSizes.title,
    fontWeight: fontWeights.black,
    color: colors.textWhite,
    marginBottom: 6,
    letterSpacing: 1,
  },
  welcomeDescription: {
    fontSize: fontSizes.body,
    color: colors.textMuted,
    lineHeight: 18,
  },
  menuButton: {
    backgroundColor: colors.cardBg,
    borderWidth: 1,
    borderColor: colors.borderNeon,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  menuIcon: {
    fontSize: 22,
    marginRight: 15,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuButtonText: {
    color: colors.textWhite,
    fontSize: fontSizes.large,
    fontWeight: fontWeights.bold,
  },
  menuButtonSub: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  logoutButton: {
    borderColor: "rgba(255, 51, 68, 0.3)",
    marginTop: 10,
  },
});
