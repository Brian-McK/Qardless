import React from "react";
import { View, StyleSheet } from "react-native";
import { MD3Colors, Surface, IconButton } from "react-native-paper";

export default function QRCertOptions(props) {
  const { item } = props;

  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={2}>
        <IconButton
          icon="information"
          iconColor={MD3Colors.neutralVariant30}
          size={40}
          onPress={() =>
            props.navigation.navigate("CertificateFullInfo", {
              item,
            })
          }
        />
        <IconButton
          icon="flag"
          iconColor={MD3Colors.error40}
          size={40}
          onPress={() =>
            props.navigation.navigate("ReportCertificate", {
              item,
            })
          }
        />
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
  },
  surface: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 20,
  },
});
