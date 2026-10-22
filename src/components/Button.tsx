import type { ReactNode } from "react";
import {
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

type ButtonProps = Omit<TouchableOpacityProps, "children"> & {
  children: ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      {children}
    </TouchableOpacity>
  );
}
