import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { currentStep, getStep1FormData } from "../../Redux/registerSlice";

export default function Step1() {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

      // capture the data when changing focus on stack - TODO - Create custom hook
  useEffect(() => {
    if (!isFocused) {
      dispatch(
        getStep1FormData({
          firstName,
          surname,
          email,
        })
      );
    }
  }, [dispatch, isFocused]);

  useFocusEffect(
    useCallback(() => {
      dispatch(currentStep(1));
    }, [dispatch, currentStep])
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="First Name"
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
      />

      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Surname"
        value={surname}
        onChangeText={(surname) => setSurname(surname)}
      />

      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
    </View>
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
  textInput: {
    marginBottom: defaultMargin,
  },
});
