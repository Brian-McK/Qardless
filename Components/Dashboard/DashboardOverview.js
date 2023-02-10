import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function DashboardOverview({ route }) {
  const user = route.params.user;

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium"></Text>
      <Text>Dashboard Overview Screen</Text>
      <Text>{`Welcome ${user.name}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
