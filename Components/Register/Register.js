import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgressBar, MD3Colors, Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Step1 from "./Step1";
import Step3 from "./Step3";
import { useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Stack = createNativeStackNavigator();

export default function Register({ navigation }) {
  // no need to store in redux store
  const [progressLevel, setProgressLevel] = useState(0);

  const { formStepNumber } = useSelector((state) => state.register);

  let nextButtonNavigateTo;
  let prevButtonNavigateTo;

  if (formStepNumber == 1) {
    nextButtonNavigateTo = (
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Step3")}
      >
        Next
      </Button>
    );
    prevButtonNavigateTo = null;
  }

  if (formStepNumber == 3) {
    nextButtonNavigateTo = null;

    prevButtonNavigateTo = (
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Step1")}
      >
        Prev
      </Button>
    );
  }

  const getProgressLevel = (formStepNum) => {
    if (formStepNum == 1) {
      setProgressLevel(0.5);
    } else {
      setProgressLevel(1);
    }
  };

  // Whenever the dependency updates trigger the getProgressLevel function
  useEffect(() => {
    getProgressLevel(formStepNumber);
  }, [formStepNumber]);

  return (

      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <View style={styles.inner}>
          <Text style={styles.displayHeading} variant="headlineMedium">
            Register
          </Text>

          <Stack.Navigator
            initialRouteName={Step1}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Step1" component={Step1} />
            <Stack.Screen name="Step3" component={Step3} />
          </Stack.Navigator>

          <View style={styles.btnContainer}>
            {nextButtonNavigateTo}

            {prevButtonNavigateTo}

            <ProgressBar progress={progressLevel} style={{height: 10, borderRadius: 20}} color={MD3Colors.primary50} />
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    backgroundColor: "#fff",
  },
  displayHeading: {
    textAlign: "center",
  },
  inputField: {
    marginBottom: defaultMargin,
  },
  button: {
    marginBottom: defaultMargin,
  },
  btnContainer: {
    marginTop: 12,
    padding: defaultPadding
  },
});
