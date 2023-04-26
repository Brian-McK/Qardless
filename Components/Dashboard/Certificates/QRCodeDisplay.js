import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MD3Colors, Text, Surface } from "react-native-paper";
import QRCertOptions from "./QRCertOptions";
import { QR_API } from "react-native-dotenv";
import QRCode from "react-native-qrcode-svg";

export default function QRCodeDisplay(props) {
  const { item } = props;

  const loadQrCode = () => {
    if (item.pdfUrl) {
      return (
        <Image
          style={styles.qrImage}
          source={{
            uri: `${QR_API}=${item.pdfUrl}`,
          }}
        />
      );
    } else {
      return (
        <Text variant="headlineMedium" style={styles.title}>
          QR Code not available
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={1}>
        <Text variant="headlineSmall" style={styles.title}>
          {item.course.title}
        </Text>

        {/* QR Code API not hosted and cant use ngrok to run 2 api's at once as we only have free account. View below will generate */}
        {/* <View>{item && loadQrCode()}</View> */}

        <View>
          <QRCode
            value={item.pdfUrl}
            size={250}
            color="black"
            backgroundColor="white"
          />
        </View>

        <QRCertOptions navigation={props.navigation} item={item} />
        <Text variant="titleSmall" style={styles.title}>
          Status: {item.isFrozen ? "Frozen" : "Active"}
        </Text>
      </Surface>
    </View>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {
    padding: defaultPadding,
  },
  title: {
    margin: defaultMargin,
  },
  surface: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: MD3Colors.primary90,
    borderRadius: 30,
  },
  qrImage: {
    height: 250,
    width: 250,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "grey",
  },
});
