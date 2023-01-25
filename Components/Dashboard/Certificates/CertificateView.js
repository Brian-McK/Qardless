import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
} from "react-native-paper";

export default function CertificateView({ navigation }) {
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

  return (
    <ScrollView style={styles.container}>
      <Text>Certificate View</Text>
      <Text>{dummyCertificate}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
