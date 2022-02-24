import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.console}
            imageUrl={item.images[0].url}
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
