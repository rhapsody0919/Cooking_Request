import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 60,
    backgroundColor: "#000",
    marginBottom: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

const AddButton = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
