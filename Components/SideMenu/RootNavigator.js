import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import QRScanner from "../Dashboard/QRScanner";
import DashboardOverview from "../Dashboard/DashboardOverview";
import Certificates from "../Dashboard/Certificates/Certificates";

const Drawer = createDrawerNavigator();

export default function RootNavigator({ user, navigation }) {

  const loggedInUser = user;

  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent user={loggedInUser} navigation={navigation} />}
    >
      <Drawer.Screen name="Overview" component={DashboardOverview} user={loggedInUser} />
      <Drawer.Screen name="Certificates" component={Certificates} user={loggedInUser} />
      <Drawer.Screen name="QR Scanner" component={QRScanner} />
    </Drawer.Navigator>
  );
}
