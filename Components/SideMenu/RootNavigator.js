import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Certificates from "../Dashboard/Certificates";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

export default function RootNavigator({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent navigation={navigation} />}>
      <Drawer.Screen name="Certificates" component={Certificates} />
      <Drawer.Screen name="QR Scanner" component={Certificates} />
    </Drawer.Navigator>
  );
}
