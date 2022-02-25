import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function MyListings({ route }) {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <AppText></AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyListings;
