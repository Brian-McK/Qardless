import { StyleSheet, Text, View } from "react-native";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home/Home";
import CustomNavigationBar from "./Components/General/CustomNavigationBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import store from "./Redux/store";
import { Provider } from "react-redux";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import "react-native-gesture-handler";

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
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="DashboardHome" component={DashboardHome} />
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
