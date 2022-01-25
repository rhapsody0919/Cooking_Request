import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 20,
    height: 40,
    borderColor: "#999",
    borderBottomWidth: 1,
  },
  label: {
    fontWeight: "bold",
    color: "#999",
  },
});

const TextInputForm = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default TextInputForm;
