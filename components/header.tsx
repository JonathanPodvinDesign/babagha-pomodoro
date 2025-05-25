import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import Button from "./button";
import { LucideIcon } from "lucide-react-native";
import { RelativePathString, useRouter } from "expo-router";

interface HeaderProps {
  title?: string;
  button?: {
    icon?: LucideIcon | undefined;
    redirectTo?: RelativePathString | undefined;
    variant?: "default" | "primary" | "ghost" | "secondary";
  };
  style?: StyleProp<ViewStyle>;
}

export default function Header(props: HeaderProps) {
  const router = useRouter();

  // If button is provided, render the button and the title
  if (props.button && props.button.redirectTo) {
    const { redirectTo, variant } = props.button;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => router.replace(redirectTo)}
          icon={props.button?.icon}
          variant={variant ?? "default"}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    );
  }

  // If no button is provided, render the title only
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
});
