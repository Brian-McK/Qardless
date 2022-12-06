import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Step1(props) {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  props.progressCallback(0.33);


  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="First Name"
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
      />

      <TextInput
        mode="outlined"
        label="Surname"
        value={surname}
        onChangeText={(surname) => setSurname(surname)}
      />

      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
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
