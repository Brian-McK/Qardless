import { StyleSheet, Text, View } from 'react-native';
import AppBar from '../General/AppBar';
import Step1 from './Step1';

export default function Register() {
  return (
    <View style={styles.container}>
      <AppBar title="Register"/>
      <Step1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});