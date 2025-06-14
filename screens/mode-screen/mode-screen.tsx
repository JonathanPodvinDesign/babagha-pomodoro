import { View, StyleSheet } from "react-native";
import Header from "@/components/header";
import { ArrowLeft } from "lucide-react-native";
import { MODES_MOCK } from "@/utils/mocks/modes.mock";
import { StackParamList } from "@/types/stack.types";
import { StackScreenProps } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";

export default function ModeScreen() {
  const route =
    useRoute<StackScreenProps<StackParamList, "ModeScreen">["route"]>();

  const { id } = route.params;

  if (!id) return null;

  const mode = MODES_MOCK.find((mode) => mode.id === id);

  if (!mode) return null;

  return (
    <View style={styles.container}>
      <Header
        button={{
          icon: ArrowLeft,
          redirectTo: "./ModeList",
          variant: "ghost",
        }}
        title={`Mode ${mode.name}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    alignItems: "center",
  },
});
