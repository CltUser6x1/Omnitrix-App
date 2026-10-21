import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors, styles } from "./styles";
import Toolbar from "./Toolbar";

function HomeScreen({ onNavigate, onLogout }) {
  return (
    <View style={styles.container}>
      <Toolbar title="BASE CENTRAL" showBack={false} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroBanner}>
          <Text style={styles.welcomeTitle}>SISTEMA SINCRONIZADO</Text>

          <Text style={styles.welcomeDescription}>
            O relógio está online. Selecione um módulo holográfico abaixo para
            prosseguir com a missão, herói.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => onNavigate("Sobre")}
        >
          <Text style={styles.menuIcon}>👽</Text>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuButtonText}>Sobre o Projeto</Text>

            <Text style={styles.menuButtonSub}>
              Ver detalhes dos Encanadores
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => onNavigate("Contato")}
        >
          <Text style={styles.menuIcon}>📞</Text>

          <View style={styles.menuTextContainer}>
            <Text style={styles.menuButtonText}>Canal de Contato</Text>

            <Text style={styles.menuButtonSub}>
              Frequência de rádio e suporte
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuButton, styles.logoutButton]}
          onPress={onLogout}
        >
          <Text style={styles.menuIcon}>⚠️</Text>

          <View style={styles.menuTextContainer}>
            <Text style={[styles.menuButtonText, { color: colors.errorRed }]}>
              Desconectar
            </Text>

            <Text style={styles.menuButtonSub}>Trancar sessão do Omnitrix</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

//  TELA 3: SOBRE

function SobreScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <Toolbar title="SOBRE" onBack={onBack} showBack={true} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>ARQUIVOS DOS ENCANADORES</Text>

        <Text style={styles.textBody}>
          Esta aplicação foi desenvolvida como protótipo de alta performance
          para simulação de controlo mobile e navegação contextual.
        </Text>

        <View style={styles.infoCard}>
          <View style={styles.cardBadgeHeader}>
            <Text style={styles.badgeText}>REGULAMENTO</Text>
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

//  TELA 4: CONTATO

function ContatoScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <Toolbar title="CONTATO" onBack={onBack} showBack={true} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <View style={styles.cardBadgeHeader}>
            <Text style={styles.badgeText}>FREQUÊNCIA DE SEGURANÇA</Text>
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

export default function Navegacao({ onLogout }) {
  const [telaAtual, setTelaAtual] = useState("Home");

  if (telaAtual === "Sobre") {
    return <SobreScreen onBack={() => setTelaAtual("Home")} />;
  }

  if (telaAtual === "Contato") {
    return <ContatoScreen onBack={() => setTelaAtual("Home")} />;
  }

  return (
    <HomeScreen
      onNavigate={(proximaTela) => setTelaAtual(proximaTela)}
      onLogout={onLogout}
    />
  );
}
