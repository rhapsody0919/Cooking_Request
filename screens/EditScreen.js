import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import TextInputForm from "../components/TextInput";
import AddButton from "../components/AddButton";
import React, { useState, useEffect } from "react";
import { updateCategoryItem } from "../src/lib/firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default function EditScreen({ route, navigation }) {
  const { editItem } = route.params;
  const [name, setName] = useState(editItem.name);

  const updateFirebaseItems = async (id, name) => {
    updateCategoryItem(id, name);
  };

  const onSubmit = () => {
    if (name == "") {
      return false;
    }
    // DB更新
    updateFirebaseItems(editItem.id, name);
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInputForm
        label={"料理名"}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <AddButton onPress={onSubmit} label={"更新"} />
    </SafeAreaView>
  );
}
