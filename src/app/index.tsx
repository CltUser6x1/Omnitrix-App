
import { useState } from 'react';
import { View } from 'react-native';

import Login from '../pages/LoginPage';
import Navegacao from '../navigation/Navegacao';
import { globalStyles } from '../styles/global';

export default function Index() {
  const [logado, setLogado] = useState(false);

  return (
    <View style={globalStyles.screenContainer}>
      {logado ? (
        <Navegacao onLogout={() => setLogado(false)} />
      ) : (
        <Login onLoginSuccess={() => setLogado(true)} />
      )}
    </View>
  );
}
