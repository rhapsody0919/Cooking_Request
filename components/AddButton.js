import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: "60%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 20,
  },
});

const AddButton = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
