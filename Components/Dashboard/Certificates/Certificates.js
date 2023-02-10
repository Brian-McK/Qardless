import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
} from "react-native-paper";
import CertificateView from "./CertificateView";
import CertificatesList from "./CertificatesList";
import CertificateFullInfo from "./CertificateFullInfo";
import ReportCertificate from "./ReportCertificate";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Certificates({ user, navigation }) {

  console.log(user);

  return (
    <Stack.Navigator
      initialRouteName={CertificatesList}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CertificatesList"
        navigation={navigation}
        component={CertificatesList}
        user={user}
      />
      <Stack.Screen
        name="CertificateView"
        navigation={navigation}
        component={CertificateView}
      />
      <Stack.Screen
        name="CertificateFullInfo"
        navigation={navigation}
        component={CertificateFullInfo}
      />

      <Stack.Screen
        name="ReportCertificate"
        navigation={navigation}
        component={ReportCertificate}
      />
    </Stack.Navigator>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: "black",
  padding: defaultPadding,
});
