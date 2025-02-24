import { Text, View, StyleSheet } from "react-native";

export default function Confi() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de configurações!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
  },
});
