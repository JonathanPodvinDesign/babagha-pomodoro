import { LucideIcon } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title?: string;
  onPress?: () => void | undefined;
  icon?: LucideIcon | undefined;
  variant?:
    | "default"
    | "primary"
    | "ghost"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "outline";
  disabled?: boolean;
  style?: any;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.base,
        VARIANT_STYLES[props.variant ?? "outline"],
        props.disabled && styles.disabled,
        props.style,
      ]}
      disabled={props.disabled}
    >
      {props.icon && <props.icon color="white" size={24} />}
      {props.title && <Text>{props.title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  default: {
    backgroundColor: "#000",
  },
  primary: {
    backgroundColor: "#000",
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#000",
  },
  disabled: {
    opacity: 0.5,
  },
});

const VARIANT_STYLES = {
  default: { backgroundColor: "#000" },
  primary: { backgroundColor: "#007bff" },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
  },
  secondary: { backgroundColor: "#f5f5f5" },
  danger: { backgroundColor: "#dc3545" },
  success: { backgroundColor: "#28a745" },
  warning: { backgroundColor: "#ffc107" },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#000",
  },
};
