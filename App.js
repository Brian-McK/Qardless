import { StyleSheet, Text, View } from "react-native";
import Register from "./Components/Register/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home/Home";
import CustomNavigationBar from "./Components/General/CustomNavigationBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import store from "./Redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator
              initialRouteName={Home}
              screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
