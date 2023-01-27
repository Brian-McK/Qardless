import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
  Button,
  Text,
  Avatar,
  Card,
  IconButton,
  Divider,
} from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="file-document" />;

const testSupportedURL = "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf";

const testUnsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <IconButton
      icon="download-circle"
      mode="contained"
      iconColor={MD3Colors.secondary70}
      containerColor={MD3Colors.primary95}
      size={80}
      onPress={handlePress}
    />
  );
};

export default function CertificateFullInfo({ route, navigation }) {
  const { item } = route?.params || {};

  let prevButtonNavigateTo = (
    <Button
      style={styles.button}
      mode="contained"
      onPress={() =>
        navigation.navigate({
          name: "CertificateView",
          params: item,
          merge: true,
        })
      }
    >
      Prev
    </Button>
  );

  // Id: "12345",
  // Title: "Dummy Certificate",
  // QrCodeUri: "12345",
  // PdfUri: "12345",
  // SerialNumber: "12345",
  // Expires: true,
  // CreatedDate: "01/01/2023",
  // ExpiryDate: "01/01/2024",
  // EndUserId: "12345",
  // BusinessId: "12345",

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={item.Title}
          titleVariant={"titleLarge"}
          subtitle={`Serial Number: ${item.SerialNumber}`}
          left={LeftContent}
        />
        <Card.Content>
          <View style={styles.cardContent}>
            <View style={styles.certInfo}>
              <View>
                <Text variant="titleLarge">Issued By</Text>
                <Text variant="bodyLarge">{item.BusinessId}</Text>
              </View>
              <Divider style={styles.divider} bold={true} />
              <View>
                <Text variant="titleLarge">Date Issued</Text>
                <Text variant="bodyLarge">{item.CreatedDate}</Text>
              </View>
              <Divider style={styles.divider} bold={true} />
              <View>
                <Text variant="titleLarge">Date Expires</Text>
                <Text variant="bodyLarge">{item.CreatedDate}</Text>
              </View>
            </View>
            <View style={styles.certImgView}>
              <OpenURLButton url={testSupportedURL} />
            </View>
          </View>
        </Card.Content>
      </Card>
      {prevButtonNavigateTo}
    </View>
  );
}

const defaultMargin = 20;

const defaultPadding = 20;

const styles = StyleSheet.create({
  container: {},
  button: {
    margin: defaultMargin,
  },
  cardContent: {
    padding: defaultPadding,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  certInfo: {},
  divider: {
    marginVertical: 10,
  },
});
