import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { colors } from "../styles/colors";
import { styles } from "../styles/login-page";

type LoginPageProps = {
  onLoginSuccess: () => void;
};

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const CREDENCIAIS = {
    usuario: "ben",
    senha: "10",
  };

  const handleLogin = () => {
    setMensagemErro("");

    if (!usuario.trim()) {
      setMensagemErro("⚠️ ALERTA: Informe o usuário do herói.");
      return;
    }

    if (!senha.trim()) {
      setMensagemErro("⚠️ ALERTA: Informe o código de segurança.");
      return;
    }

    if (usuario === CREDENCIAIS.usuario && senha === CREDENCIAIS.senha) {
      setUsuario("");
      setSenha("");
      setMensagemErro("");
      onLoginSuccess();
    } else {
      setMensagemErro("❌ ACESSO NEGADO: DNA incompatível.");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginCard}>
        <View style={styles.omnitrixBadge}>
          <Text style={styles.omnitrixBadgeText}>10</Text>
        </View>

        <Text style={styles.logoText}>OMNITRIX</Text>

        <Text style={styles.subtitleText}>SISTEMA DE SEGURANÇA V.10</Text>

        {mensagemErro ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{mensagemErro}</Text>
          </View>
        ) : null}

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>UTILIZADOR</Text>

          <Input
            placeholder="ex: ben"
            placeholderTextColor={colors.textMuted}
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>CÓDIGO SECRETO</Text>

          <Input
            placeholder="ex: 10"
            placeholderTextColor={colors.textMuted}
            value={senha}
            secureTextEntry={true}
            onChangeText={setSenha}
          />
        </View>

        <Button
          style={styles.button}
          onPress={handleLogin}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>ATIVAR PROTOCOLO</Text>
        </Button>

        <Text style={styles.hintText}>Dica de acesso: ben / 10</Text>
      </View>
    </View>
  );
}
