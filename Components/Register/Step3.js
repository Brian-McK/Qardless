import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TextInput,
  Button,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  currentStep,
  resetCurrentStep,
  getStep3FormData,
  resetStep3FormData,
  formDataToUserCreateDTO,
  registerUser,
} from "../../Redux/registerSlice";

export default function Step3() {
  const [eircode, setEircode] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const { step1FormData, step2FormData, step3FormData, user, isLoading } =
    useSelector((state) => state.register);

  const dispatch = useDispatch();

  const submitFormData = () => {
    dispatch(
      getStep3FormData({
        eircode,
        phone,
        password,
      })
    );

    // can probably access ThunkAPI to merge these in the reducer later on - TODO
    // need to use local storage to keep textfield content in memory - TODO
    const formDataMerged = {
      ...step1FormData,
      ...step2FormData,
      ...step3FormData,
    };

    // check for falsy values
    if (Object.keys(formDataMerged).every((k) => !formDataMerged[k])) {
      console.log(formDataMerged);
      return;
    }

    dispatch(formDataToUserCreateDTO(formDataMerged));

    try {
      dispatch(registerUser(user)).unwrap();
    } catch (error) {
      console.log("failed to register user", error);
    }
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

      <Text>{isLoading.toString()}</Text>

      {isLoading && (
        <ActivityIndicator
          style={styles.spinner}
          animating={true}
          color={MD2Colors.red800}
          size={"large"}
        />
      )}
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
  spinner: {
    margin: defaultMargin,
  },
});
