import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Header from "@/components/header";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ModesList from "./(mode)/mode-list";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: insets.left + 16,
          paddingRight: insets.right + 16,
        }}
      >
        <Header />
        <ModesList
          ListHeaderComponent={
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Qu'attends-tu de</Text>
              <Text style={styles.title}>Babagha aujourd'hui ?</Text>
              <Text style={styles.subtitle}>choisis un mode :</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins_300Light",
    color: "#666",
  },
});
