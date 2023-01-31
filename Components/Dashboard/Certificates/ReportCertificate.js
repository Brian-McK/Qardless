import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
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
  TextInput,
} from "react-native-paper";

export default function ReportCertificate({ route, navigation }) {
  const { item } = route?.params || {};
  const [issue, setIssue] = useState();

  const submitFormData = async () => {
    console.log("!! Submit Report Certificate");
  };

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
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={styles.container}>
        <Text style={styles.displayHeading} variant="headlineMedium">
          Report Certificate Issue
        </Text>
        <TextInput
          style={styles.inputField}
          multiline={true}
          numberOfLines={12}
          mode="outlined"
          label="Enter issue here..."
          value={issue}
          onChangeText={(issue) => setIssue(issue)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => submitFormData()}
        >
          Submit Report
        </Button>

        {prevButtonNavigateTo}
      </View>
    </TouchableWithoutFeedback>
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
  },
  title: {
    margin: defaultMargin,
  },
  inputField: {
    margin: defaultMargin,
  },
  button: {
    margin: defaultMargin,
  },
  spinner: {
    margin: defaultMargin,
  },
});
