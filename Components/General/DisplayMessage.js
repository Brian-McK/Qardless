import React from "react";
import { StyleSheet } from "react-native";
import { Banner } from "react-native-paper";

export default function DisplayMessage({
  message,
  materialCommunityIconName,
  actions,
  visible,
}) {
  return (
    <Banner
      visible={visible}
      icon={materialCommunityIconName}
      actions={actions}
    >
      {message}
    </Banner>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: defaultPadding,
  },
});
