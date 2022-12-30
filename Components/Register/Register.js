import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgressBar, MD3Colors, Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useSelector, useDispatch } from "react-redux";

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
        onPress={() => navigation.navigate("Step2")}
      >
        Next
      </Button>
    );
    prevButtonNavigateTo = null;
  }

  if (formStepNumber == 2) {
    nextButtonNavigateTo = (
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Step3")}
      >
        Next
      </Button>
    );
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

  if (formStepNumber == 3) {
    nextButtonNavigateTo = null;

    prevButtonNavigateTo = (
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Step2")}
      >
        Prev
      </Button>
    );
  }

  const getProgressLevel = (formStepNum) => {
    if (formStepNum == 1) {
      setProgressLevel(0.33);
    } else if (formStepNum == 2) {
      setProgressLevel(0.66);
    } else {
      setProgressLevel(1);
    }
  };

  // Whenever the dependency updates trigger the getProgressLevel function
  useEffect(() => {
    getProgressLevel(formStepNumber);
  }, [formStepNumber]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.displayHeading} variant="displaySmall">
        Register
      </Text>

      <Text style={styles.displayHeading} variant="displaySmall">
        {"Step num: " + formStepNumber}
      </Text>

      <Stack.Navigator
        initialRouteName={Step1}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
      </Stack.Navigator>

      {nextButtonNavigateTo}

      {prevButtonNavigateTo}

      <ProgressBar progress={progressLevel} color={MD3Colors.error50} />
    </SafeAreaView>
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
  displayHeading: {
    textAlign: "center",
  },
  inputField: {
    marginBottom: defaultMargin,
  },
  button: {
    marginBottom: defaultMargin,
  },
});
