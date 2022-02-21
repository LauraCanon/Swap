import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/mario.jpeg")}
    >
      <View style={styles.buttonsContainer}>
        <AppButton tittle="Login" />
        <AppButton tittle="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsContainer: {
    padding: 30,
    marginBottom: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
