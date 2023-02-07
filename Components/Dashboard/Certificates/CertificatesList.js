import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
  ActivityIndicator,
  Text,
} from "react-native-paper";
import { formatDate } from "../../../utils";

import { useGetCertificatesByUserIdQuery } from "../../../Redux/api/certificatesApiSlice";

export default function CertificatesList({ user, navigation }) {
  console.log("!! CERT LISTS", user);

  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
    isFetching,
    isUninitialized,
    error,
  } = useGetCertificatesByUserIdQuery("c00cd5ff-4d89-4129-5909-08db090082d6");

  console.log(
    "!!",
    data,
    isLoading,
    isError,
    isSuccess,
    isUninitialized,
    error
  );

  let dummyCertItems = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  let certItems = [];

  if (data) {
    certItems = data.map((item, index) => {
      
      return (
        <TouchableRipple
          key={index}
          onPress={() => {}}
          rippleColor={MD2Colors.purpleA200}
        >
          <List.Item
            key={index}
            title={item.courseTitle}
            description={`Awarded: ${formatDate(
              item.createdDate
            )} Ends: ${formatDate(item.expiryDate)}`}
            left={(props) => <List.Icon {...props} icon="file-document" />}
            right={(props) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CertificateView", {
                    item: item,
                  })
                }
              >
                <List.Icon {...props} icon="eye" color={MD2Colors.purple500} />
              </TouchableOpacity>
            )}
          />
        </TouchableRipple>
      );
    });
  }

  if (isError) return <Text>ERROR...</Text>;

  if (isFetching && !data) return <Text>NO CERTS...</Text>;

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>My Certificates</List.Subheader>
        {data && certItems}
      </List.Section>
      {isLoading && (
        <ActivityIndicator
          style={styles.spinner}
          size={"large"}
          animating={true}
          color={MD2Colors.deepPurple900}
        />
      )}
      {isError && (
        <Text variant="headlineSmall" style={styles.warningMessage}>
          Oops, something went wrong! :(
        </Text>
      )}
    </ScrollView>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {},
  spinner: {
    margin: defaultMargin,
  },
  warningMessage: {
    margin: defaultMargin,
    textAlign: "center",
  },
});
