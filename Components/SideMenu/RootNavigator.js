import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import QRScanner from "../Dashboard/QRScanner";
import DashboardOverview from "../Dashboard/DashboardOverview";
import Certificates from "../Dashboard/Certificates/Certificates";

const Drawer = createDrawerNavigator();

export default function RootNavigator({ user, navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <DrawerContent user={user} navigation={navigation} />
      )}
    >
      <Drawer.Screen
        name="Overview"
        initialParams={{ user }}
        component={DashboardOverview}
      />
      <Drawer.Screen
        name="Certificates"
        initialParams={{ user }}
        component={Certificates}
      />
      <Drawer.Screen name="QR Scanner" component={QRScanner} />
    </Drawer.Navigator>
  );
}
