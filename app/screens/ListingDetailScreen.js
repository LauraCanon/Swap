import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

function ListingDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Zelda2.jpeg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>
          Legend Of Zelda - Breath of the Wild 2
        </AppText>
        <AppText style={styles.subTitle}>Nintendo Switch</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/ProfilePicture.jpeg")}
            title="Laura Canón"
            subTitle="3 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "60%",
    height: 300,
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
    marginVertical: 30,
  },
});

export default ListingDetailScreen;
