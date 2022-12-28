import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgressBar, MD3Colors, Text, Button } from "react-native-paper";
import CustomNavigationBar from "../General/CustomNavigationBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Stack = createNativeStackNavigator();

export default function Register({ navigation }) {
  const [progressLevel, setProgressLevel] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.displayHeading} variant="displaySmall">
        Register
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

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Step2")}
      >
        Next
      </Button>

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Step1")}
      >
        Prev
      </Button>

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
