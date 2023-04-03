import React, { useState, useCallback } from "react";
import { View, StyleSheet, Alert, Linking } from "react-native";
import {
  MD3Colors,
  MD2Colors,
  Button,
  Text,
  Avatar,
  Card,
  IconButton,
  Divider,
  ActivityIndicator,
} from "react-native-paper";
import { formatDate } from "../../../utils";
import { useGetBusinessByIdQuery } from "../../../Redux/api/businessesApiSlice";
import DisplayMessage from "../../General/DisplayMessage";

const LeftContent = (props) => <Avatar.Icon {...props} icon="file-document" />;

const testSupportedURL =
  "https://qardlesspdfs.blob.core.windows.net/pdfs/BeanHonlyForkLift.pdf";

const testUnsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Invalid URL: ${url}`);
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
  const [visible, setVisible] = useState(true);
  const { item } = route?.params || {};


  console.log("CertificateFullInfo", JSON.stringify(item, null, 2));

  let displayMessage;

  const {
    data: business,
    isLoading,
    isError,
    isSuccess,
  } = useGetBusinessByIdQuery(item.course.businessId);

  console.log(business);

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

  if (isError || !item) {
    displayMessage = (
      <DisplayMessage
        visible={visible}
        actions={[
          {
            label: "Close",
            onPress: () => setVisible(false),
          },
        ]}
        message={"Error loading certificate data, please try again!"}
        materialCommunityIconName={"alert-circle"}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={item.course.title}
          titleVariant={"titleLarge"}
          subtitle={`Certificate Number: ${item.certNumber}`}
          left={LeftContent}
        />
        <Card.Content>
          <View style={styles.cardContent}>
            <View style={styles.certInfo}>
              <View>
                <Text variant="titleLarge">Issued By</Text>
                {isSuccess && <Text variant="bodyLarge">{business.name}</Text>}
                {isLoading && <Text variant="bodyLarge">loading...</Text>}
              </View>
              <Divider style={styles.divider} bold={true} />
              <View>
                <Text variant="titleLarge">Date Issued</Text>
                <Text variant="bodyLarge">{formatDate(item.course.courseDate)}</Text>
              </View>
              <Divider style={styles.divider} bold={true} />
              <View>
                <Text variant="titleLarge">Date Expires</Text>
                <Text variant="bodyLarge">{formatDate(item.course.expiry)}</Text>
              </View>
            </View>
            <View style={styles.certImgView}>
              {!item.pdfUrl && (
                <Text variant="bodyLarge">No cert available</Text>
              )}
              {item.pdfUrl && <OpenURLButton url={item.pdfUrl} />}
            </View>
          </View>
        </Card.Content>
      </Card>
      {prevButtonNavigateTo}
      {isLoading && (
        <ActivityIndicator
          style={styles.spinner}
          size={"large"}
          animating={true}
          color={MD2Colors.deepPurple900}
        />
      )}
      {displayMessage}
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
  spinner: {
    margin: defaultMargin,
  },
});
