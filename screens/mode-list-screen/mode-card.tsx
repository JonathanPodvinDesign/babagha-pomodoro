import { Mode } from "@/types/mode.types";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

interface ModeCardType {
  mode: Mode;
  onPress: () => void;
}

export default function ModeCard({ mode, onPress }: ModeCardType) {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: mode.backgroundColor }]}
      onPress={onPress}
    >
      <Image
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        source={mode.image}
        placeholder={{ blurhash }}
        transition={1000}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "47.5%",
    height: 167,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 16,
  },
  image: {
    flex: 1,
    width: "100%",
    objectFit: "contain",
  },
});
