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
  Surface,
} from "react-native-paper";
import QRCertOptions from "./QRCertOptions";

export default function QRCodeDisplay(props) {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={4}>
        <Text variant="headlineMedium" style={styles.title}>
          {props.item.Title}
        </Text>

        <Image
          style={styles.qrImage}
          source={require("../../../assets/placeholderqrwithpdf.png")}
        />

        <QRCertOptions navigation={props.navigation} item={props.item} />
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
    color: "white",
    padding: defaultPadding,
  },
  surface: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: MD2Colors.cyan800,
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
