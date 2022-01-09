import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    width: "70%",
    marginTop: 20,
    padding: 10,
    fontSize: 20,
  },
});

const TextInputForm = ({ placeholder, state, setState }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={(text) => setState(text)}
      value={state}
    />
  );
};

export default TextInputForm;
