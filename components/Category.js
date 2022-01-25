import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import AddButton from "./AddButton";
import TextInputForm from "./TextInput";
import "firebase/firestore";
import * as firebase from "firebase/app";
import { setCategoryItem } from "../src/lib/firebase";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});

const categoryItems = categories.map((category, index) => (
  <View style={{ margin: 10 }} key={index.toString()}>
    <Text>{category.name}</Text>
  </View>
));
export default Category = (name) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};
