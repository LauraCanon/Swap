import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";
import Screen from "../components/Screen";

function ListingDetailScreen({ route }) {
  const listing = route.params;

  return (
    <Screen>
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
    </Screen>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: 10,
  },
});

export default ListingDetailScreen;
