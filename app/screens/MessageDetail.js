import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function MessageDetail({ route }) {
  const messages = route.params;
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={messages.image} />
        </View>
        <AppText style={styles.title}>{messages.title}</AppText>
        <AppText style={styles.description}>{messages.description}</AppText>
        <View style={styles.buttonContainer}>
          <AppButton style={styles.button} title="Chat"></AppButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
    marginTop: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default MessageDetail;
