import React from "react";
import { StyleSheet } from "react-native";
import CertificateView from "./CertificateView";
import CertificatesList from "./CertificatesList";
import CertificateFullInfo from "./CertificateFullInfo";
import ReportCertificate from "./ReportCertificate";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Certificates({ route, navigation }) {
  const user = route.params.user;

  return (
    <Stack.Navigator
      initialRouteName={CertificatesList}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CertificatesList"
        user={user}
        initialParams={{ user }}
        navigation={navigation}
        component={CertificatesList}
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
