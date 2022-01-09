import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import AddButton from "./AddButton";
import TextInputForm from "./TextInput";

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputCategory: {
    backgroundColor: "#fff",
    width: "70%",
    marginTop: 20,
    padding: 10,
    fontSize: 20,
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

const CategoryList = (props) => {
  return (
    <View style={styles.category}>
      <Text>{props.name}</Text>
    </View>
  );
};

export default Category = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(0);

  const register = () => {
    if (name == "") {
      return false;
    }
    //idとcategories、nameを更新
    setId(id + 1);
    setCategories(categories.concat([{ id: id, name: name }]));
    setName("");
  };

  return (
    <View style={styles.categoryContainer}>
      <TextInputForm
        placeholder={"カテゴリを追加"}
        state={name}
        setState={setName}
      />

      <AddButton onPress={register} label={"追加"} />

      <FlatList
        data={categories}
        renderItem={({ item }) => {
          return <CategoryList name={item.name} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
