
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Login from '../../Login';
import Navegacao from '../../Navegacao';

export default function Index() {
  const [logado, setLogado] = useState(false);

  return (
    <View style={styles.container}>
      {logado ? (
        <Navegacao onLogout={() => setLogado(false)} />
      ) : (
        <Login onLoginSuccess={() => setLogado(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
});
