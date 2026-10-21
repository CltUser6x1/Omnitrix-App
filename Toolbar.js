import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Toolbar({ title, onBack, showBack = true }) {
  return (
    <View style={styles.toolbarContainer}>
      {showBack ? (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>◄ VOLTAR</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}

      <Text style={styles.toolbarTitle}>{title}</Text>

      <View style={styles.placeholder} />
    </View>
  );
}
