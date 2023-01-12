import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ProgressBar,
  MD3Colors,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../Redux/api/usersApiSlice";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginUser, { isLoading, isError, isSuccess, isUninitialized, error }] =
    useLoginUserMutation();

  // commented out to replicate going to the menu screen - TODO
  // const loginEndUser = (loginDetails) => {
  //   console.log("loginEndUser: ");
  //   console.log(loginDetails);

  //   loginUser(loginDetails);
  // };

  const submitFormData = async () => {
    const userLoginPayload = {
      email: email,
      // email verfied and password hash need to be fixed - TODO
      emailVerified: true,
      passwordHash: password,
    };

    // commented out to replicate going to the menu screen - TODO
    // const isFalsy = Object.values(userLoginPayload).some((value) => {
    //   if (!value) {
    //     return true;
    //   }
    //   return false;
    // });

    // if (isFalsy) {
    //   return;
    // }

    // commented out to replicate going to the menu screen - TODO
    // loginEndUser(userRegisterPayload);

    console.log("!!", isLoading, isError, isSuccess, isUninitialized, error);

    navigation.navigate("Dashboard");
  };

  useEffect(() => {
    console.log("Login screen loaded");
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
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
          Login
        </Button>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    marginBottom: defaultMargin,
  },
  inputField: {
    marginBottom: defaultMargin,
  },
  button: {
    marginBottom: defaultMargin,
  },
});
