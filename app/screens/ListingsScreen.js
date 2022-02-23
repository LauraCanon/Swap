import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Legend of Zelda",
    console: "Nintendo Switch",
    image: require("../assets/Zelda2.jpeg"),
  },
  {
    id: 2,
    title: "Call of Duty - Black Ops",
    console: "Play Station",
    image: require("../assets/callofduty.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.console}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default ListingsScreen;
