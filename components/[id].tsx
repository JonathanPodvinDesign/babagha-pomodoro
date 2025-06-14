import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Header from "@/components/header";

export const options = {
  headerShown: false,
};

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Header title={`Mode ${id}`} />
      <Text>Détail du mode {id}</Text>
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
