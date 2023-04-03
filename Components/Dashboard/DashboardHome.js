import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "../SideMenu/RootNavigator";

export default function DashboardHome({ route, navigation }) {
  const [logoutRequested, setLogoutRequested] = useState(false);

  const { user } = route?.params || {}; 
  
  console.log("user", user);

  const logoutRequestCallback = (request) => {
    setLogoutRequested(request);
  };

  useEffect(() => {
    if (logoutRequested == true) {
      navigation.navigate("Home");
    }
  }, [logoutRequested]);

  // disable the back button in this screen
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <SafeAreaView style={styles.container}>
        <RootNavigator
          navigation={navigation}
          route={route}
          user={user}
          logoutRequestCallbackToHome={logoutRequestCallback}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
