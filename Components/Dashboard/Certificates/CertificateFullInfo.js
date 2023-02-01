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
import { formatDate } from "../../../utils";

const LeftContent = (props) => <Avatar.Icon {...props} icon="file-document" />;

const testSupportedURL =
  "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf";

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

  // {"business": null, "businessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "certNumber": "string", "courseDate": "2023-02-01T13:56:15.168", "courseTitle": "string", "createdDate": "2023-02-01T13:56:15.168", "endUser": null, "endUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "expiryDate": "2023-02-01T13:56:15.168", "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "pdfUrl": "string"}

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={item.courseTitle}
          titleVariant={"titleLarge"}
          subtitle={`Serial Number: ${item.certNumber}`}
          left={LeftContent}
        />
        <Card.Content>
          <View style={styles.cardContent}>
            <View style={styles.certInfo}>
              <View>
                <Text variant="titleLarge">Issued By</Text>
                <Text variant="bodyLarge">{item.businessId}</Text>
              </View>
              <Divider style={styles.divider} bold={true} />
              <View>
                <Text variant="titleLarge">Date Issued</Text>
                <Text variant="bodyLarge">{formatDate(item.createdDate)}</Text>
              </View>
              <Divider style={styles.divider} bold={true} />
              <View>
                <Text variant="titleLarge">Date Expires</Text>
                <Text variant="bodyLarge">{formatDate(item.expiryDate)}</Text>
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
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  certInfo: {
    marginBottom: defaultMargin,
  },
  divider: {
    marginVertical: 10,
  },
});
