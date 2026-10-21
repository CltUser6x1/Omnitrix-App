import { StyleSheet } from "react-native";

export const colors = {
  primary: "#00FF66", //  Verde Neon Omnitrix

  primaryGlow: "#00CC52", //  Verde escuro para sombras

  secondary: "#070D07", //  Fundo Espacial Profundo

  cardBg: "#0E1A0E", //  Fundo dos Cards com leve tom verde

  textWhite: "#FFFFFF", //  Branco puro

  textMuted: "#7A9E7A", //  Cinza esverdeado suave

  errorRed: "#FF3344", //  Vermelho Alerta

  borderNeon: "#1E4D1E", //  Borda tecnológica
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,

    backgroundColor: colors.secondary,
  },

  container: {
    flex: 1,

    backgroundColor: colors.secondary,
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

    fontSize: 18,

    fontWeight: "900",

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

    fontSize: 12,

    fontWeight: "bold",
  },

  placeholder: {
    width: 60,
  },

  loginContainer: {
    flex: 1,

    backgroundColor: colors.secondary,

    justifyContent: "center",

    padding: 20,
  },

  loginCard: {
    backgroundColor: colors.cardBg,

    padding: 25,

    borderRadius: 16,

    borderWidth: 2,

    borderColor: colors.primary,

    shadowColor: colors.primary,

    shadowOffset: { width: 0, height: 0 },

    shadowOpacity: 0.6,

    shadowRadius: 15,

    elevation: 10,
  },

  omnitrixBadge: {
    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: "#031403",

    borderWidth: 2,

    borderColor: colors.primary,

    justifyContent: "center",

    alignItems: "center",

    alignSelf: "center",

    marginBottom: 10,
  },

  omnitrixBadgeText: {
    color: colors.primary,

    fontSize: 18,

    fontWeight: "bold",
  },

  logoText: {
    fontSize: 28,

    fontWeight: "900",

    color: colors.textWhite,

    textAlign: "center",

    letterSpacing: 4,
  },

  subtitleText: {
    fontSize: 11,

    color: colors.primary,

    textAlign: "center",

    marginBottom: 20,

    letterSpacing: 2,

    fontWeight: "bold",
  },

  errorBox: {
    backgroundColor: "rgba(255, 51, 68, 0.15)",

    borderWidth: 1,

    borderColor: colors.errorRed,

    padding: 12,

    borderRadius: 8,

    marginBottom: 15,
  },

  errorText: {
    color: colors.errorRed,

    textAlign: "center",

    fontWeight: "bold",

    fontSize: 13,
  },

  inputContainer: {
    marginBottom: 15,
  },

  inputLabel: {
    color: colors.primary,

    fontSize: 11,

    fontWeight: "bold",

    marginBottom: 5,

    letterSpacing: 1,
  },

  input: {
    height: 48,

    backgroundColor: "#040804",

    borderWidth: 1,

    borderColor: colors.borderNeon,

    borderRadius: 8,

    paddingHorizontal: 15,

    color: colors.textWhite,

    fontSize: 15,
  },

  button: {
    height: 52,

    backgroundColor: colors.primary,

    borderRadius: 8,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 10,

    shadowColor: colors.primary,

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.8,

    shadowRadius: 5,

    elevation: 5,
  },

  buttonText: {
    color: "#040804",

    fontSize: 15,

    fontWeight: "900",

    letterSpacing: 2,
  },

  hintText: {
    marginTop: 20,

    textAlign: "center",

    color: colors.textMuted,

    fontSize: 12,
  },

  content: {
    padding: 20,
  },

  heroBanner: {
    backgroundColor: colors.cardBg,

    padding: 18,

    borderRadius: 12,

    borderLeftWidth: 4,

    borderLeftColor: colors.primary,

    marginBottom: 20,
  },

  welcomeTitle: {
    fontSize: 18,

    fontWeight: "900",

    color: colors.textWhite,

    marginBottom: 6,

    letterSpacing: 1,
  },

  welcomeDescription: {
    fontSize: 13,

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

    fontSize: 15,

    fontWeight: "bold",
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

  sectionTitle: {
    fontSize: 16,

    fontWeight: "900",

    color: colors.primary,

    marginBottom: 10,

    letterSpacing: 1,
  },

  textBody: {
    fontSize: 14,

    color: colors.textMuted,

    lineHeight: 20,

    marginBottom: 20,
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

    fontSize: 10,

    fontWeight: "bold",

    letterSpacing: 1,
  },

  cardHeader: {
    fontSize: 14,

    fontWeight: "bold",

    color: colors.primary,

    marginTop: 12,
  },

  cardBody: {
    fontSize: 13,

    color: colors.textMuted,

    marginTop: 2,

    lineHeight: 18,
  },

  label: {
    fontSize: 11,

    fontWeight: "bold",

    color: colors.primary,

    marginTop: 14,

    letterSpacing: 1,
  },

  value: {
    fontSize: 14,

    color: colors.textWhite,

    marginTop: 2,

    fontWeight: "500",
  },
});
