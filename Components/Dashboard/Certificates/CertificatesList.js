import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  List,
  MD2Colors,
  MD3Colors,
  TouchableRipple,
  ActivityIndicator,
  Text,
} from "react-native-paper";
import { formatDate } from "../../../utils";

import { useGetCertificatesByUserIdQuery } from "../../../Redux/api/certificatesApiSlice";

export default function CertificatesList({ route, navigation }) {
  const user = route.params.user;

  const {
    data = [],
    isLoading,
    isError,
    isFetching,
  } = useGetCertificatesByUserIdQuery(user.id);

  let certItems = [];

  if (data) {
    certItems = data.map((item, index) => {
      return (
        <TouchableRipple
          key={index}
          onPress={() => {}}
          rippleColor={MD2Colors.purpleA200}
        >
          <List.Item
            key={index}
            title={item.courseTitle}
            description={`Awarded: ${formatDate(
              item.createdDate
            )} Ends: ${formatDate(item.expiryDate)}`}
            left={(props) => <List.Icon {...props} icon="file-document" />}
            right={(props) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CertificateView", {
                    item: item,
                  })
                }
              >
                <List.Icon {...props} icon="eye" color={MD2Colors.purple500} />
              </TouchableOpacity>
            )}
          />
        </TouchableRipple>
      );
    });
  }

  if (isError) return <Text>ERROR...</Text>;

  if (isFetching && !data) return <Text>NO CERTS...</Text>;

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>My Certificates</List.Subheader>
        {data && certItems}
      </List.Section>
      {isLoading && (
        <ActivityIndicator
          style={styles.spinner}
          size={"large"}
          animating={true}
          color={MD2Colors.deepPurple900}
        />
      )}
      {isError && (
        <Text variant="headlineSmall" style={styles.warningMessage}>
          Oops, something went wrong! :(
        </Text>
      )}
    </ScrollView>
  );
}

const defaultMargin = 20;

const styles = StyleSheet.create({
  container: {},
  spinner: {
    margin: defaultMargin,
  },
  warningMessage: {
    margin: defaultMargin,
    textAlign: "center",
  },
});
