import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useReportCertificateIssueMutation } from "../../../Redux/api/certificatesApiSlice";
import DisplayMessage from "../../General/DisplayMessage";

export default function ReportCertificate({ route, navigation }) {
  const { item } = route?.params || {};
  const [visible, setVisible] = useState(true);
  const [issue, setIssue] = useState("");

  const [
    reportCertificateIssue,
    { data, isError, isLoading, isSuccess, error },
  ] = useReportCertificateIssueMutation();

  let displayMessage;

  const submitFormHandler = async () => {
    if (!issue || issue == null) {
      return;
    }
    const issuePayload = {
      type: "Certificate_Issue",
      content: `EndUser: ${item.endUserId}, Certificate: ${item.certNumber}, Issue: ${issue}`,
    };

    setVisible(true);
    setIssue("");

    reportCertificateIssue(issuePayload);
  };

  const successFormHandler = () => {
    setVisible(false);
    navigation.navigate({
      name: "CertificateView",
      params: item,
      merge: true,
    })
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

  if (isSuccess) {
    displayMessage = (
      <DisplayMessage
        styleProp={styles.displayMessage}
        visible={visible}
        actions={[
          {
            label: "Return",
            onPress: () => successFormHandler(),
          },
        ]}
        message={"Report submitted, thank you!"}
        materialCommunityIconName={"check-circle"}
      />
    );
  }

  if (isError) {
    displayMessage = (
      <DisplayMessage
        styleProp={styles.displayMessage}
        visible={visible}
        actions={[
          {
            label: "Close",
            onPress: () => setVisible(false),
          },
        ]}
        message={"Report submitted, thank you!"}
        materialCommunityIconName={"check-circle"}
      />
    );
  }


  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={styles.container}>
        <Text style={styles.displayHeading} variant="headlineMedium">
          Report Certificate Issue
        </Text>
        {!isSuccess && (
          <TextInput
            style={styles.inputField}
            multiline={true}
            numberOfLines={10}
            mode="outlined"
            label={`Enter issue for certificate ${item.certNumber}`}
            value={issue}
            onChangeText={(issue) => setIssue(issue)}
          />
        )}

        {displayMessage}
        {!isSuccess && (
          <Button
            style={styles.button}
            loading={isLoading}
            disabled={isSuccess || !issue}
            mode="contained"
            onPress={() => submitFormHandler()}
          >
            Submit Report
          </Button>
        )}

        {!isSuccess && prevButtonNavigateTo}
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
  displayMessage: {
    margin: defaultMargin,
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
    margin: defaultMargin - 5,
  },
  spinner: {
    margin: defaultMargin,
  },
});
