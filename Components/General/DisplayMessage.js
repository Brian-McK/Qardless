import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, Banner, MD2Colors } from "react-native-paper";

export default function DisplayError({ message, materialCommunityIconName }) {
  const [visible, setVisible] = useState(true);
  return (
    <Banner
      visible={visible}
      icon={materialCommunityIconName}
      actions={[
        {
          label: "Close",
          onPress: () => setVisible(false),
        },
      ]}
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
