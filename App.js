import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { registerAsset } from "react-native-web/dist/cjs/modules/AssetRegistry";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 30,
  },
  inputCategory: {
    backgroundColor: "#fff",
    width: "70%",
    marginTop: 20,
    padding: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: "blue",
    width: "60%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 20,
  },
  category: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
  },
});

const Category = (props) => {
  return (
    <View style={styles.category}>
      <Text>{props.name}</Text>
    </View>
  );
};

export default function App() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(0);

  const register = () => {
    if (name == "") {
      return false;
    }
    //categoriesとnameを更新
    setId(id + 1);
    setCategories(categories.concat([{ id: id, name: name }]));
    setName("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>料理メニュー</Text>
      <TextInput
        style={styles.inputCategory}
        placeholder="カテゴリを入力"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          register();
        }}
      >
        <Text>追加</Text>
      </TouchableOpacity>

      <FlatList
        data={categories}
        renderItem={({ item }) => {
          return <Category name={item.name} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
