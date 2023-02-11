import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "../SideMenu/RootNavigator";

export default function DashboardHome({ route, navigation }) {
  const { user } = route?.params || {};

  useEffect(() => {
    console.log("Dashboard screen loaded");
    console.log(user);
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <SafeAreaView style={styles.container}>
        <RootNavigator navigation={navigation} user={user} />
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
