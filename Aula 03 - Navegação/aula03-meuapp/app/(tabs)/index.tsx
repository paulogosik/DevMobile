import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja bem-vindo à nossa página principal.</Text>

      {/* <Link href={"/config"} style={styles.button}>
        Vá para a tela de configurações
      </Link> */}
      
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
  // button: {
  //   fontWeight: "600",
  //   textDecorationLine: "underline",
  //   color: "#fff",
  // }

});
