import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useState, useLayoutEffect, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { currentStep, getStep1FormData } from "../../Redux/registerSlice";

export default function Step1() {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  // capture the data when changing focus on stack
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
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      console.log("Loaded 1");
      dispatch(currentStep(1));
    }, [dispatch, currentStep, 1])
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
