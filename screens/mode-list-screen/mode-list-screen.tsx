import { MODES_MOCK } from "@/utils/mocks/modes.mock";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/types/stack.types";
import ModeCard from "./mode-card";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModeListScreen() {
  const navigation =
    useNavigation<StackNavigationProp<StackParamList, "ModeList">>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Qu’attends-tu de Babagha aujourd’hui?</Text>
        <Text style={styles.subtitle}>choisis un mode :</Text>
      </View>
      <FlatList
        data={MODES_MOCK}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ModeCard
            mode={item}
            onPress={() => navigation.navigate("ModeScreen", { id: item.id })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginBottom: 24,
    marginTop: 16,
  },
  title: {
    fontSize: 28,
    color: "#3F414E",
    fontFamily: "Poppins_400Regular",
  },
  subtitle: {
    fontSize: 20,
    color: "#A1A4B2",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
