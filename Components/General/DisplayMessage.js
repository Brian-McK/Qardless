import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, Banner, MD2Colors } from "react-native-paper";

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
