import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Drawer } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";

export default function SideNav({ navigation }) {
  const [active, setActive] = useState("");

  const navItems = [
    { name: "Home", iconName: "home" },
    { name: "Certificates", iconName: "clipboard-list" },
    { name: "QR Scanner", iconName: "barcode" },
  ];

  useEffect(() => {
    console.log("Dashboard screen loaded");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Drawer.Section title="Menu" showDivider={true}>
        {navItems.map((item) => (
          <Drawer.Item
            style={styles.drawerItems}
            key={item.name}
            icon={item.iconName}
            label={item.name}
            active={active === item.name}
            onPress={() => setActive(item.name)}
          />
        ))}
      </Drawer.Section>
    </SafeAreaView>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    padding: defaultPadding,
    width: "75%",
  },
  drawerItems: {
    color: "red",
  },
  displayHeading: {
    textAlign: "center",
    marginBottom: defaultMargin,
  },
  button: {
    marginBottom: defaultMargin,
  },
});
