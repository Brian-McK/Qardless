import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";
import QRCodeDisplay from "./QRCodeDisplay";

var deviceWidth = Dimensions.get("window").width;

export default function CertificateView({ route, navigation }) {
  const { item } = route?.params || {};

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
    <ScrollView>
      <View style={styles.container}>
        <QRCodeDisplay navigation={navigation} item={item} />

        {prevButtonNavigateTo}
      </View>
    </ScrollView>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  scrollView: {},
  button: {
    margin: defaultMargin,
  },
});
