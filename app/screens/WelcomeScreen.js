import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/mario.jpeg")}
    >
      <View style={styles.logoContainer}>
        <AppText style={styles.line}>SWAP</AppText>
        <AppText style={styles.tagline}>A Community for Gamers!</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 30,
    marginBottom: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  tagline: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.gray,
  },
  line: {
    fontWeight: "bold",
    fontSize: 28,
    color: colors.gray,
  },
});

export default WelcomeScreen;
