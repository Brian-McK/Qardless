import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Certificates() {
  return (
    <View style={styles.container}>
      <Text>Certificates Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
