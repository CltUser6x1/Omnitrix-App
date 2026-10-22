import { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Navegacao from "./src/navigation/Navegacao";
import Login from "./src/pages/LoginPage";
import { colors } from "./src/styles/colors";
import { globalStyles } from "./src/styles/global";

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      {logado ? (
        <Navegacao onLogout={() => setLogado(false)} />
      ) : (
        <Login onLoginSuccess={() => setLogado(true)} />
      )}
    </SafeAreaView>
  );
}
