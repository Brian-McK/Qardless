import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import {
  MD2Colors,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginUserMutation } from "../../Redux/api/usersApiSlice";
import DisplayMessage from "../General/DisplayMessage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(true);
  const [loginUser, { data, isLoading, isError, isSuccess }] =
    useLoginUserMutation();

  let displayMessage;

  const resetState = () => {
    setEmail("");
    setPassword("");
  };

  const loginHandler = async () => {
    const userLoginDetails = {
      email: email,
      password: password,
    };

    setVisible(true);

    loginUser(userLoginDetails);
  };

  useEffect(() => {
    if (isSuccess == true) {
      resetState();
      navigation.navigate("DashboardHome", {
        user: data,
      });
    }
  }, [isSuccess]);

  if (isError) {
    displayMessage = (
      <DisplayMessage
        visible={visible}
        actions={[
          {
            label: "Close",
            onPress: () => setVisible(false),
          },
        ]}
        message={"Error logging in, please try again!"}
        materialCommunityIconName={"alert-circle"}
      />
    );
  }

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#fff" }}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <View style={styles.inner}>
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

          <View style={styles.btnContainer}>
            <Button
              style={styles.button}
              disabled={isLoading}
              mode="contained"
              onPress={loginHandler}
            >
              Login
            </Button>
          </View>

          {isLoading && (
            <ActivityIndicator
              style={styles.spinner}
              size={"large"}
              animating={true}
              color={MD2Colors.deepPurple900}
            />
          )}
          {displayMessage}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const defaultMargin = 20;

const defaultPadding = 40;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: "flex-start",
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
  btnContainer: {
    marginTop: 12,
  },
  spinner: {
    margin: defaultMargin,
  },
});
