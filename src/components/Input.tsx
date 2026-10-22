import { TextInput, type TextInputProps } from "react-native";
import { globalStyles } from "../styles/global";

export default function Input({ style, ...props }: TextInputProps) {
  return <TextInput style={[globalStyles.textInput, style]} {...props} />;
}
