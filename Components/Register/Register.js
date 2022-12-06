import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


export default function Register() {
  const [progressLevel, setProgressLevel] = useState(0);

  const handleProgress = (progress) => {
    setProgressLevel(progress);
  };

  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Step3 progressCallback={handleProgress} />
      <ProgressBar progress={progressLevel} color={MD3Colors.error50} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
