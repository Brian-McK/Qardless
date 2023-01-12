import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function QardlessHomeImage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/Qardless_PNG.png")}
      />
      <Text variant="headlineMedium">Welcome To Qardless</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  logo: {
    height: 300,
    width: 300
  }
});
