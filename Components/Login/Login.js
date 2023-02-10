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
  const [loginUser, result] = useLoginUserMutation();

  // commented out to replicate going to the menu screen - TODO

  const handler = async () => {
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
        }
      })
      .catch((rejected) => {
        console.error(rejected);
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
        <Button style={styles.button} mode="contained" onPress={handler}>
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
