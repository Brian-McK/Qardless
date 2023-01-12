import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgressBar, MD3Colors, Text, Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitFormData = async () => {
    dispatch(
      getStep3FormData({
        eircode,
        phone,
        password,
      })
    );

    const userLoginPayload = {
      email: step1FormData.email,
      // email verfied and password hash need to be fixed - TODO
      emailVerified: true,
      passwordHash: step3FormData.password,
    };

    const isFalsy = Object.values(userLoginPayload).some((value) => {
      if (!value) {
        return true;
      }
      return false;
    });

    if (isFalsy) {
      return;
    }

    registerEndUser(userRegisterPayload);

    console.log("!!", isLoading, isError, isSuccess, isUninitialized, error);
  };


  useEffect(() => {
    console.log("Login screen loaded");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.displayHeading} variant="headlineMedium">
        Login
      </Text>
      <TextInput
        style={styles.inputField}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.inputField}
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
    </SafeAreaView>
  );
}

const defaultMargin = 20;

const defaultPadding = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: defaultPadding,
  },
  displayHeading: {
    textAlign: "center",
    marginBottom: defaultMargin
  },
  inputField: {
    marginBottom: defaultMargin,
  },
  button: {
    marginBottom: defaultMargin,
  },
});
