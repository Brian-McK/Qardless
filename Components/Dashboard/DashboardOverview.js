import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DashboardOverview() {
  return (
    <View style={styles.container}>
      <Text>Dashboard Overview Screen</Text>
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