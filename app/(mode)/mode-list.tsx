import { MODES_MOCK } from "@/utils/mocks/modes.mock";
import ModeCard from "@/app/(mode)/mode-card";
import { FlatList, StyleSheet, Text } from "react-native";

export default function ModesList({
  ListHeaderComponent,
}: {
  ListHeaderComponent: React.ReactElement;
}) {
  return (
    <FlatList
      data={MODES_MOCK}
      numColumns={2}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => <ModeCard mode={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
