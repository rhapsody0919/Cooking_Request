import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Category from "../components/Category";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 30,
  },
});

export default MenuScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>料理メニュー</Text>
      <Category />
    </SafeAreaView>
  );
};
