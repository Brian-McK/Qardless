import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Step2() {
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [county, setCounty] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Address 1"
        value={address1}
        onChangeText={(address1) => setAddress1(address1)}
      />

      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Address 2"
        value={address2}
        onChangeText={(address2) => setAddress2(address2)}
      />

      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Address 3"
        value={county}
        onChangeText={(county) => setCounty(county)}
      />
    </View>
  );
}

const defaultMargin= 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: defaultPadding,
  },
  textInput: {
    marginBottom: defaultMargin
  }
});