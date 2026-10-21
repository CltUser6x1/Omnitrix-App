import { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Login from "./Login";
import Navegacao from "./Navegacao";
import { colors, styles } from "./styles";

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      {logado ? (
        <Navegacao onLogout={() => setLogado(false)} />
      ) : (
        <Login onLoginSuccess={() => setLogado(true)} />
      )}
    </SafeAreaView>
  );
}
