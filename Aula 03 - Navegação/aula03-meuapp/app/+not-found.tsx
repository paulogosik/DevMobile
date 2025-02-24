import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Página não encontrada" }}></Stack.Screen><View style={styles.container}>
                <Text style={styles.text}>
                    Ops, caminho errado!
                </Text>
                <Link href="/" style={styles.button}>
                    Voltar para a tela principal
                </Link>
            </View>
        </>
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
        color: "white",
        fontWeight: "400",
    },
    button: {
        fontSize: 20,
        fontWeight: "600",
        textDecorationLine: "underline",
        color: "#fff",
    }

});
