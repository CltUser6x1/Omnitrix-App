import { ScrollView, Text, View } from "react-native";
import Toolbar from "../components/Toolbar";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/about-page";

type AboutPageProps = {
  onBack: () => void;
};

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <Toolbar title="SOBRE" onBack={onBack} showBack={true} />

      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <Text style={styles.sectionTitle}>ARQUIVOS DOS ENCANADORES</Text>

        <Text style={styles.textBody}>
          Esta aplicação foi desenvolvida como protótipo de alta performance
          para simulação de controlo mobile e navegação contextual.
        </Text>

        <View style={globalStyles.infoCard}>
          <View style={globalStyles.cardBadgeHeader}>
            <Text style={globalStyles.badgeText}>REGULAMENTO</Text>
          </View>

          <Text style={styles.cardHeader}>Missão Estelar</Text>

          <Text style={styles.cardBody}>
            Proteger a Terra e manter a integridade do código fonte contra
            invasões externas.
          </Text>

          <Text style={styles.cardHeader}>Visão Tecnológica</Text>

          <Text style={styles.cardBody}>
            Ser o ápice da arquitetura de software móvel intergaláctica.
          </Text>

          <Text style={styles.cardHeader}>Versão do Sistema</Text>

          <Text style={styles.cardBody}>Omnitrix Core v10.4.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}
