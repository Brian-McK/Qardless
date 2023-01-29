import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerContent(props) {
  const fullName = "Brian McKenna";

  const fullNameArr = fullName.split(" ");

  const initials = fullNameArr.shift().charAt(0) + fullNameArr.pop().charAt(0);

  const navItems = [
    { name: "Home", iconName: "home" },
    { name: "Certificates", iconName: "file-document" },
    { name: "QR Scanner", iconName: "barcode" },
  ];

  const drawerItems = navItems.map((item, index) => {
    return (
      <DrawerItem
        key={index}
        icon={({ color, size }) => (
          <MaterialCommunityIcons
            name={item.iconName}
            color={color}
            size={size}
          />
        )}
        label={item.name}
        onPress={() => props.navigation.navigate(item.name)}
      />
    );
  });

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Text label={initials} size={50} />
          <Title style={styles.title}>{fullName}</Title>
          <Caption style={styles.caption}>brian@gmail.com</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          {drawerItems}
        </Drawer.Section>
        <Drawer.Section>
          <View>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="theme-light-dark"
                  color={color}
                  size={size}
                />
              )}
              label="Dark Mode"
              onPress={() => {}}
            />
          </View>
          <View style={styles.switch}>
            <Switch value={false} />
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.logoutSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />
            )}
            label="Logout"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logoutSection: {},
  switch: {
    position: "absolute",
    marginLeft: "60%",
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
