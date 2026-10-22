import { ScrollView, Text, View } from "react-native";
import Button from "../components/Button";
import Toolbar from "../components/Toolbar";
import { colors } from "../styles/colors";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/home-page";

type HomePageProps = {
  onNavigate: (screen: "Sobre" | "Contato") => void;
  onLogout: () => void;
};

export default function HomePage({ onNavigate, onLogout }: HomePageProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <Toolbar title="BASE CENTRAL" showBack={false} />

      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={styles.heroBanner}>
          <Text style={styles.welcomeTitle}>SISTEMA SINCRONIZADO</Text>

          <Text style={styles.welcomeDescription}>
            O relógio está online. Selecione um módulo holográfico abaixo para
            prosseguir com a missão, herói.
          </Text>
        </View>

        <Button
          style={styles.menuButton}
          onPress={() => onNavigate("Sobre")}
          accessibilityRole="button"
        >

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuButtonText}>Sobre o Projeto</Text>

            <Text style={styles.menuButtonSub}>
              Ver detalhes dos Encanadores
            </Text>
          </View>
        </Button>

        <Button
          style={styles.menuButton}
          onPress={() => onNavigate("Contato")}
          accessibilityRole="button"
        >

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuButtonText}>Canal de Contato</Text>

            <Text style={styles.menuButtonSub}>
              Frequência de rádio e suporte
            </Text>
          </View>
        </Button>

        <Button
          style={[styles.menuButton, styles.logoutButton]}
          onPress={onLogout}
          accessibilityRole="button"
        >

          <View style={styles.menuTextContainer}>
            <Text style={[styles.menuButtonText, { color: colors.errorRed }]}>
              Desconectar
            </Text>

            <Text style={styles.menuButtonSub}>Trancar sessão do Omnitrix</Text>
          </View>
        </Button>
      </ScrollView>
    </View>
  );
}
