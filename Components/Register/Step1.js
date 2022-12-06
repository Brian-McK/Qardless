import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Step1() {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="First Name"
        value={firstName}
        onChangeText={(firstName) => setText(firstName)}
      />

      <TextInput
        mode="outlined"
        label="Surname"
        value={surname}
        onChangeText={(surname) => setText(surname)}
      />

      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(email) => setText(email)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
