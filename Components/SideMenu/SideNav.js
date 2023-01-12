import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";

export default function SideNav({ navigation }) {
  const navItems = ["Home", "Certificates", "QR Scanner"];

  useEffect(() => {
    console.log("Dashboard screen loaded");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {navItems.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
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
  button: {
    marginBottom: defaultMargin,
  },
});
