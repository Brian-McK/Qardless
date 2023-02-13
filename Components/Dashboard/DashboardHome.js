import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "../SideMenu/RootNavigator";

export default function DashboardHome({ route, navigation }) {
  const { user } = route?.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // prevent going back to the login screen with navigation - TODO - need to fix further down the line - https://reactnavigation.org/docs/preventing-going-back/
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation]);

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
