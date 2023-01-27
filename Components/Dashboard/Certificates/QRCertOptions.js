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
  Divider,
  Surface,
  IconButton,
} from "react-native-paper";

export default function QRCertOptions(props) {

  const { item } = props;

  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={2}>
        <IconButton
          icon="information"
          iconColor={MD3Colors.neutralVariant30}
          size={40}
          onPress={() => props.navigation.navigate("CertificateFullInfo", {
            item
          })}
        />
        <IconButton
          icon="flag"
          iconColor={MD3Colors.error40}
          size={40}
          onPress={() => console.log("Pressed Flag")}
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
