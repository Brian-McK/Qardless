import { StyleSheet, Text, View } from 'react-native';
import Register from './Components/Register/Register';

export default function App () {
  return (
    <View style={styles.container}>
      <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
