import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
} from "react-native-paper";

export default function CertificatesList({ navigation }) {
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
      <TouchableRipple
        key={index}
        onPress={() => {}}
        rippleColor={MD2Colors.purpleA200}
      >
        <List.Item
          key={index}
          title={item.Title}
          description={`Awarded: ${item.CreatedDate} Ends: ${item.ExpiryDate}`}
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
