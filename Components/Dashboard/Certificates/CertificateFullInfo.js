import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
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
} from "react-native-paper";
import QRCodeDisplay from "./QRCodeDisplay";

const LeftContent = (props) => <Avatar.Icon {...props} icon="clipboard-list" />;

export default function CertificateFullInfo({ route, navigation }) {
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
      <Card>
        <Card.Title
          title={item.Title}
          titleVariant={"titleLarge"}
          subtitle={`Serial Number: ${item.SerialNumber}`}
          left={LeftContent}
        />
        <Card.Content>
          <View style={styles.cardContent}>
            <View style={styles.certInfo}>
              <View>
                <Text variant="titleMedium">Issued By</Text>
                <Text variant="bodyMedium">{item.BusinessId}</Text>
              </View>
              <View>
                <Text variant="titleMedium">Date Issued</Text>
                <Text variant="bodyMedium">{item.CreatedDate}</Text>
              </View>
              <View>
                <Text variant="titleMedium">Date Expires</Text>
                <Text variant="bodyMedium">{item.CreatedDate}</Text>
              </View>
            </View>
            <View style={styles.certImg}>
              <Text>Hello</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>
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
  cardContent: {
    padding: defaultPadding,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  certInfo: {
    backgroundColor: MD2Colors.amber100,
  },
  certImg: {
    backgroundColor: MD2Colors.blue100,
    height: 350,
    width: 180,
  },
});
