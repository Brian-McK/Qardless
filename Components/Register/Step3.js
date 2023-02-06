import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Button, Snackbar, MD2Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  currentStep,
  getStep3FormData,
  isLoading,
  // registerUser,
} from "../../Redux/registerSlice";
import {
  useRegisterUserMutation,
} from "../../Redux/api/usersApiSlice";

export default function Step3({ navigation }) {
  const [eircode, setEircode] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [
    registerUser,
    { isLoading, isError, isSuccess, isUninitialized, error },
  ] = useRegisterUserMutation();

  const { step1FormData, step3FormData, user } = useSelector(
    (state) => state.register
  );

  const registerEndUser = (user) => {
    console.log("registerEndUser: ");
    console.log(user);

    registerUser(user);
  };

  const dispatch = useDispatch();

  const submitFormData = async () => {
    dispatch(
      getStep3FormData({
        eircode,
        phone,
        password,
      })
    );

    const userRegisterPayload = {
      name: `${step1FormData.firstName} ${step1FormData.surname}`,
      email: step1FormData.email,
      // email verfied and password hash need to be fixed - TODO
      emailVerified: true,
      passwordHash: step3FormData.password,
      contactNumber: step3FormData.phone,
    };

    const isFalsy = Object.values(userRegisterPayload).some((value) => {
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

  const onDismissSnackBar = () => setSnackbarVisible(false);

  let snackbar;

  if (isSuccess) {
    snackbar = (
      <Snackbar
        visible={true}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Login",
          onPress: () => {
            navigation.navigate("Home");
          },
        }}
      >
        Successfully registered. Go to Login!
      </Snackbar>
    );
  }

  useFocusEffect(
    useCallback(() => {
      console.log("Loaded 3");
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
          loading={isLoading}
          disabled={isLoading}
          mode="contained"
          onPress={() => submitFormData()}
        >
          Submit
        </Button>

        {snackbar}

        <Text>{isSuccess}</Text>
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
  spinner: {
    margin: defaultMargin,
  },
});
