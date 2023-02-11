import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
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

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(true);
  const [
    loginUser,
    { data, isLoading, isError, isSuccess },
  ] = useLoginUserMutation();

  let displayMessage;

  // reset to initial state
  const resetState = () => {
    setEmail("");
    setPassword("");
  };

  const loginHandler = async () => {
    const userLoginDetails = {
      email: email,
      // email verfied and password hash need to be fixed - TODO
      password: password,
    };

    setVisible(true);

    loginUser(userLoginDetails);

    resetState();
  };

  if (isSuccess) {
    navigation.navigate("DashboardHome", {
      user: data,
    });
  }

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
          disabled={isLoading}
          mode="contained"
          onPress={loginHandler}
        >
          Login
        </Button>
        {isLoading && (
          <ActivityIndicator
            style={styles.spinner}
            size={"large"}
            animating={true}
            color={MD2Colors.deepPurple900}
          />
        )}
        {displayMessage}
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
