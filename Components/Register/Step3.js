import { useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { currentStep, getStep3FormData } from "../../Redux/registerSlice";
import { useRegisterUserMutation } from "../../Redux/api/usersApiSlice";
import DisplayMessage from "../General/DisplayMessage";

export default function Step3({ navigation }) {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(true);
  const [registerUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const { step1FormData, step3FormData } = useSelector(
    (state) => state.register
  );

  let displayMessage;

  const dispatch = useDispatch();

  const submitFormHandler = async () => {
    dispatch(
      getStep3FormData({
        phone,
        password,
      })
    );

    const userDetails = {
      name: `${step1FormData.firstName} ${step1FormData.surname}`,
      email: step1FormData.email,
      // email verfied and password hash need to be fixed - TODO
      password: step3FormData.password,
      contactNumber: step3FormData.phone,
    };

    setVisible(true);

    registerUser(userDetails);
  };

  if (isSuccess) {
    displayMessage = (
      <DisplayMessage
        visible={visible}
        actions={[
          {
            label: "Close",
            onPress: () => setVisible(false),
          },
          {
            label: "Login",
            onPress: () => {
              navigation.navigate("Home");
            },
          },
        ]}
        message={"Successfully registered, Go to the login screen to login!"}
        materialCommunityIconName={"check-circle"}
      />
    );
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
        message={
          "Error registering, please ensure fields are filled in correctly"
        }
        materialCommunityIconName={"alert-circle"}
      />
    );
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(currentStep(3));
    }, [dispatch, currentStep])
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={styles.container}>
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
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={styles.button}
          loading={isLoading}
          disabled={isLoading}
          mode="contained"
          onPress={() => submitFormHandler()}
        >
          Submit
        </Button>

        {displayMessage}
      </View>
    </TouchableWithoutFeedback>
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
  button: {
    marginBottom: defaultMargin,
  },
  spinner: {
    margin: defaultMargin,
  },
});
