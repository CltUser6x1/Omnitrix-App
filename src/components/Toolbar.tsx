import { Text, View } from "react-native";
import Button from "./Button";
import { globalStyles } from "../styles/global";

type ToolbarProps = {
  title: string;
  onBack?: () => void;
  showBack?: boolean;
};

export default function Toolbar({
  title,
  onBack,
  showBack = true,
}: ToolbarProps) {
  return (
    <View style={globalStyles.toolbarContainer}>
      {showBack ? (
        <Button
          onPress={onBack}
          style={globalStyles.backButton}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <Text style={globalStyles.backText}>VOLTAR</Text>
        </Button>
      ) : (
        <View style={globalStyles.toolbarPlaceholder} />
      )}

      <Text style={globalStyles.toolbarTitle}>{title}</Text>

      <View style={globalStyles.toolbarPlaceholder} />
    </View>
  );
}
