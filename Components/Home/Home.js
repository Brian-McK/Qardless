import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";


export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
        <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
