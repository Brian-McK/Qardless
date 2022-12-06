import { StyleSheet, Text, View } from "react-native";
import Register from "./Components/Register/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home/Home";
import CustomNavigationBar from "./Components/General/CustomNavigationBar";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName={Home}
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
