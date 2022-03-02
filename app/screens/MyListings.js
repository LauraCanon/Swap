import React, { useContext, useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import listingsApi from "../api/listings";
import AuthContext from "../auth/context";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

function MyListings() {
  const { user } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: myListings,
    setData,
    error,
    loading,
    request: loadMyListings,
  } = useApi(listingsApi.getMyListings);

  useEffect(() => {
    loadMyListings();
    return () => setRefreshing(false);
  }, [refreshing]);

  return (
    <Screen style={styles.container}>
      <View>
        <FlatList
          data={myListings}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.console}
              url={item.images[0].url}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

export default MyListings;
