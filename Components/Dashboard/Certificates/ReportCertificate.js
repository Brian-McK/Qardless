import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
  Button,
  Text,
  Avatar,
  Card,
  IconButton,
  Divider,
} from "react-native-paper";

export default function ReportCertificate({ route, navigation }) {
  const { item } = route?.params || {};

  let prevButtonNavigateTo = (
    <Button
      style={styles.button}
      mode="contained"
      onPress={() =>
        navigation.navigate({
          name: "CertificateView",
          params: item,
          merge: true,
        })
      }
    >
      Prev
    </Button>
  );

  // Id: "12345",
  // Title: "Dummy Certificate",
  // QrCodeUri: "12345",
  // PdfUri: "12345",
  // SerialNumber: "12345",
  // Expires: true,
  // CreatedDate: "01/01/2023",
  // ExpiryDate: "01/01/2024",
  // EndUserId: "12345",
  // BusinessId: "12345",

  return (
    <View style={styles.container}>
        <Text>Certificate Report Screen</Text>
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
