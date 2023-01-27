import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
  Button,
  Text,
} from "react-native-paper";
import QRCodeDisplay from "./QRCodeDisplay";

export default function CertificateFullInfo({ route, navigation }) {

  const { item } = route;
  
  let prevButtonNavigateTo = (
    <Button
      style={styles.button}
      mode="contained"
      onPress={() => navigation.navigate("CertificateView")}
    >
      Prev
    </Button>
  );

  return (
    <View style={styles.container}>
      <Text>Certificate Full Info</Text>
      {prevButtonNavigateTo}
    </View>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {},
  button: {
    margin: defaultMargin,
  },
});
