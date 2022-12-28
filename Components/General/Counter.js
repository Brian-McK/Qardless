import React from "react";
import { StyleSheet } from "react-native";
import { increment, decrement } from "../../Redux/counterSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displaySmall">Counter</Text>

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => dispatch(increment())}
      >
        Increment
      </Button>

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => dispatch(decrement())}
      >
        Decrement
      </Button>

      <Text>{count}</Text>
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
