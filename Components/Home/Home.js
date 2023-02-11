import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import QardlessHomeImage from "./QardlessHomeImage";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <QardlessHomeImage />
      <View style={styles.buttonGroup}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: defaultPadding,
  },
  displayHeading: {
    textAlign: "center",
    marginBottom: defaultMargin,
  },
  buttonGroup: {
    padding: defaultPadding,
  },
  button: {
    marginBottom: defaultMargin,
  },
});
