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
  MD2Colors,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginUserMutation } from "../../Redux/api/usersApiSlice";
import DisplayMessage from "../General/DisplayMessage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginUser, result] = useLoginUserMutation();

  // reset to initial state
  const resetState = () => {
    setEmail("");
    setPassword("");
  };

  const loginHandler = async () => {
    const userLoginPayload = {
      email: email,
      // email verfied and password hash need to be fixed - TODO
      password: password,
    };

    loginUser(userLoginPayload)
      .unwrap()
      .then((fulfilled) => {
        if (fulfilled) {
          navigation.navigate("DashboardHome", {
            user: fulfilled,
          });
          resetState();
        }
      })
      .catch((rejected) => {
        resetState();
      });
  };

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
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={styles.button}
          disabled={result.isLoading}
          mode="contained"
          onPress={loginHandler}
        >
          Login
        </Button>
        {result.isLoading && (
          <ActivityIndicator
            style={styles.spinner}
            size={"large"}
            animating={true}
            color={MD2Colors.deepPurple900}
          />
        )}
        {result.isError && (
          <DisplayMessage
            message={"There was an error logging in, please check your details"}
            materialCommunityIconName={"alert-circle"}
          />
        )}
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
  spinner: {
    margin: defaultMargin,
  },
});
