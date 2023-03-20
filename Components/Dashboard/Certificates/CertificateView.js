import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import QRCodeDisplay from "./QRCodeDisplay";

export default function CertificateView({ route, navigation }) {
  const { item } = route?.params || {};

  console.log(item);

  let prevButtonNavigateTo = (
    <Button
      style={styles.button}
      mode="contained"
      onPress={() => navigation.navigate("CertificatesList")}
    >
      Prev
    </Button>
  );

  return (
    <View style={styles.container}>
      <QRCodeDisplay navigation={navigation} item={item} />
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
