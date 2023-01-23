import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { List, MD2Colors, MD3Colors, TouchableRipple } from "react-native-paper";

export default function Certificates() {
  const dummyCertItems = [
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

  const certItems = dummyCertItems.map((item, index) => {
    return (
      <TouchableRipple onPress={() => {}} rippleColor={MD2Colors.purpleA200}>
        <List.Item
          key={index}
          title={item.Title}
          description="Item description"
          left={(props) => <List.Icon {...props} icon="clipboard-list" />}
          right={(props) => <List.Icon {...props} icon="eye" />}
        />
      </TouchableRipple>
    );
  });

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>My Certificates</List.Subheader>
        {certItems}
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
