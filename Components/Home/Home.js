import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useState } from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.displayHeading} variant="displaySmall">
        Home
      </Text>
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
    </View>
  );
}

const defaultMargin= 20;

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
    marginBottom: defaultMargin
  }
});
