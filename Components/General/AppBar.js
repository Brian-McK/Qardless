import { Appbar } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';

const AppBar = (props) => (
  <>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  </>
);

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
