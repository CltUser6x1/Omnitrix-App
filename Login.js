import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, styles } from "./styles";

export default function LoginScreen({ onLoginSuccess }) {
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
        {/* Ícone Estilizado do Omnitrix */}

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

          <TextInput
            style={styles.input}
            placeholder="ex: ben"
            placeholderTextColor={colors.textMuted}
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>CÓDIGO SECRETO</Text>

          <TextInput
            style={styles.input}
            placeholder="ex: 10"
            placeholderTextColor={colors.textMuted}
            value={senha}
            secureTextEntry={true}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ATIVAR PROTOCOLO</Text>
        </TouchableOpacity>

        <Text style={styles.hintText}>💡 Dica de acesso: ben / 10</Text>
      </View>
    </View>
  );
}
