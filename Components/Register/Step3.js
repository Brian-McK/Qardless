import { useFocusEffect } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Step3() {
  const [eircode, setEircode] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  useFocusEffect(() => {
    console.log("Loaded 3");
 });

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Eircode"
        value={eircode}
        onChangeText={(eircode) => setEircode(eircode)}
      />

      <TextInput
        mode="outlined"
        label="Phone"
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
      />

      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
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
