import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import {
  currentStep,
  resetCurrentStep,
  getStep3FormData,
  resetStep3FormData,
} from "../../Redux/registerSlice";

export default function Step3() {
  const [eircode, setEircode] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const submitFormData = () => {
    dispatch(
      getStep3FormData({
        eircode,
        phone,
        password,
      })
    );
  };

  useFocusEffect(
    useCallback(() => {
      console.log("Loaded 3");
      dispatch(currentStep(3));
    }, [dispatch, currentStep])
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Eircode"
        value={eircode}
        onChangeText={(eircode) => setEircode(eircode)}
      />

      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Phone"
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
      />

      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => submitFormData()}
      >
        Submit
      </Button>
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
