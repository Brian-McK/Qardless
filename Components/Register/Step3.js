import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
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

    const userRegisterPayload = {
      firstName: step1FormData.firstName,
      lastName: step1FormData.surname,
      email: step1FormData.email,
      // email verfied and password hash need to be fixed - TODO
      emailVerified: true,
      passwordHash: step3FormData.password,
      phoneMobile: step3FormData.phone,
      AddressCode: step3FormData.eircode,
      AddressDetailed: `${step2FormData.address1}, ${step2FormData.address2}, ${step2FormData.county}`,
    };

    console.log(userRegisterPayload);

    const isFalsy = Object.values(userRegisterPayload).some(value => {
      if (!value) {
        return true;
      }
      return false;
    });
    
    console.log(isFalsy);
    

    // dispatch(registerUser(user))
    //   .unwrap()
    //   .then((payload) => console.log("fulfilled", payload))
    //   .catch((error) => console.error("rejected", error));
  };

  useFocusEffect(
    useCallback(() => {
      console.log("Loaded 3");
      dispatch(currentStep(3));
    }, [dispatch, currentStep])
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
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
