import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay={true}
        loop={true}
        source={require("../assets/animations/loader.json")}
        colorFilters="#85C1E9"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    marginTop: 20,
    position: "absolute",
    backgroundColor: "white",
    height: "115%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
