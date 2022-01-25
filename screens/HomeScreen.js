import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { getCategories } from "../src/lib/firebase";

export default HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const categoryItems = categories.map((category, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{category.name}</Text>
    </View>
  ));

  return <SafeAreaView>{categoryItems}</SafeAreaView>;
};
