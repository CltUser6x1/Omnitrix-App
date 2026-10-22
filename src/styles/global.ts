import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fontSizes, fontWeights } from "./fonts";

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  scrollContent: {
    padding: 20,
  },
  infoCard: {
    backgroundColor: colors.cardBg,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderNeon,
  },
  cardBadgeHeader: {
    alignSelf: "flex-start",
    backgroundColor: "#0F260F",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    marginBottom: 10,
  },
  badgeText: {
    color: colors.primary,
    fontSize: fontSizes.caption,
    fontWeight: fontWeights.bold,
    letterSpacing: 1,
  },
  textInput: {
    height: 48,
    backgroundColor: "#040804",
    borderWidth: 1,
    borderColor: colors.borderNeon,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: colors.textWhite,
    fontSize: fontSizes.large,
  },
  toolbarContainer: {
    height: 60,
    backgroundColor: "#040804",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  toolbarTitle: {
    color: colors.primary,
    fontSize: fontSizes.title,
    fontWeight: fontWeights.black,
    letterSpacing: 2,
  },
  backButton: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "#0F260F",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  backText: {
    color: colors.primary,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
  },
  toolbarPlaceholder: {
    width: 60,
  },
});
