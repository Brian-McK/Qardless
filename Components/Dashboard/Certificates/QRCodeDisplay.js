import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MD3Colors, Text, Surface } from "react-native-paper";
import QRCertOptions from "./QRCertOptions";

// TODO - https://dev.to/one/react-native-prevent-screen-capture-on-selected-screens-19f6#:~:text=Here%20are%20the%20steps%20to%20prevent%20screen%20capture%20on%20selected%20screens.&text=import%20%7B%20useIsFocused%20%7D%20from%20'%40react,variable%20on%20the%20selected%20screen.

export default function QRCodeDisplay(props) {
  const { item } = props;

  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={1}>
        <Text variant="headlineSmall" style={styles.title}>
          {item.courseTitle}
        </Text>

        <Image
          style={styles.qrImage}
          source={require("../../../assets/beanhonlyforklift.png")}
        />

        <QRCertOptions navigation={props.navigation} item={item} />
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
