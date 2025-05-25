import { Mode } from "@/types/mode.types";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function ModeCard({ mode }: { mode: Mode }) {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <Link
      href={{
        pathname: "/(mode)/[id]",
        params: { id: mode.id.toString() },
      }}
      style={[styles.container, { backgroundColor: mode.backgroundColor }]}
      asChild
    >
      <TouchableOpacity>
        <Image
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          source={mode.image}
          placeholder={{ blurhash }}
          transition={1000}
        />
      </TouchableOpacity>
    </Link>
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
