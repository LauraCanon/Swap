import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#F4F6F6",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  detailContainer: {
    padding: 8,
  },
  image: {
    width: "40%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    marginBottom: 5,
    textAlign: "center",
  },
});

export default Card;
