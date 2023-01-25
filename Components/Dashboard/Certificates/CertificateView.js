import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
  Button,
} from "react-native-paper";

export default function CertificateView({ route, navigation }) {
  const { item } = route.params;

  console.log(item)

  const dummyCertificate = {
    Id: "12345",
    Title: "Dummy Certificate",
    QrCodeUri: "12345",
    PdfUri: "12345",
    SerialNumber: "12345",
    Expires: true,
    CreatedDate: "01/01/2023",
    ExpiryDate: "01/01/2024",
    EndUserId: "12345",
    BusinessId: "12345",
  };

  let prevButtonNavigateTo = (
    <Button
      style={styles.button}
      mode="contained"
      onPress={() => navigation.navigate("CertificatesList")}
    >
      Prev
    </Button>
  );

  return (
    <View style={styles.container}>
      <Text>Certificate View Screen</Text>
      <Text>{JSON.stringify(item)}</Text>
      {prevButtonNavigateTo}
    </View>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: defaultMargin,
  },
});
