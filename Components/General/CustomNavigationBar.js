import { Appbar } from "react-native-paper";

export default function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header statusBarHeight={0}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Qardless" />
    </Appbar.Header>
  );
}
