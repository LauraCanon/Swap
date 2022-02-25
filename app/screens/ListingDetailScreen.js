import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import Screen from "../components/Screen";

function ListingDetailScreen({ route }) {
  const listing = route.params;

  return (
    <Screen>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={listing.images[0]} />
          </View>
          <View style={styles.detailContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.subTitle}>{listing.console}</AppText>
          </View>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/ProfilePicture.jpeg")}
              title="Laura Canón"
              subTitle="3 Listings"
            />
          </View>
          <View style={styles.contact}>
            <ContactSellerForm listing={listing} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contact: {
    padding: 10,
  },
  detailContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: 300,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  keyboard: {
    marginBottom: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    padding: 15,
  },
});

export default ListingDetailScreen;
