import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useReportCertificateIssueMutation } from "../../../Redux/api/certificatesApiSlice";

export default function ReportCertificate({ route, navigation }) {
  const { item } = route?.params || {};
  const [issue, setIssue] = useState("");

  const [reportCertificateIssue, { isError, isLoading, isSuccess }] =
    useReportCertificateIssueMutation();

  const submitFormData = () => {
    if (!issue || issue == null) {
      return;
    }
    const issuePayload = {
      type: "CertificateIssue",
      content: `EndUser: ${"Bean Honly"}, Certificate: ${"Certificate"}, Issue: ${issue}`,
    };

    reportCertificateIssue(issuePayload);
  };

  let prevButtonNavigateTo = (
    <Button
      style={styles.button}
      mode="contained"
      disabled={isLoading}
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
          label={`Enter issue for certificate ${item.certNumber}`}
          value={issue}
          onChangeText={(issue) => setIssue(issue)}
        />
        {isSuccess && (
          <Text style={styles.successMessage} variant="headlineSmall">
            Report Submitted
          </Text>
        )}
        {isError && (
          <Text variant="headlineSmall" style={styles.warningMessage}>
            Oops, something went wrong! :(
          </Text>
        )}
        <Button
          style={styles.button}
          loading={isLoading}
          disabled={isLoading}
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
  successMessage: {
    textAlign: "center",
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
