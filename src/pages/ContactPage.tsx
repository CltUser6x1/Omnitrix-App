import { ScrollView, Text, View } from "react-native";
import Toolbar from "../components/Toolbar";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/contact-page";

type ContactPageProps = {
  onBack: () => void;
};

export default function ContactPage({ onBack }: ContactPageProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <Toolbar title="CONTATO" onBack={onBack} showBack={true} />

      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <View style={globalStyles.infoCard}>
          <View style={globalStyles.cardBadgeHeader}>
            <Text style={globalStyles.badgeText}>FREQUÊNCIA DE SEGURANÇA</Text>
          </View>

          <Text style={styles.label}>COMUNICAÇÃO RÁDIO (TELEFONE):</Text>

          <Text style={styles.value}>0800-BEN-TENNISSON</Text>

          <Text style={styles.label}>CANAL QUÂNTICO (E-MAIL):</Text>

          <Text style={styles.value}>suporte@encanadores.space</Text>

          <Text style={styles.label}>COORDENADAS DA BASE (ENDEREÇO):</Text>

          <Text style={styles.value}>
            Reactor Principal, Setor 5 - Bellwood
          </Text>

          <Text style={styles.label}>HORÁRIO DE PLANTÃO:</Text>

          <Text style={styles.value}>
            24/7 (Enquanto houver vilões à solta)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
