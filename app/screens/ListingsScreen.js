import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

// const listTab = [
//   {
//     console: "Nintendo",
//     id: 1,
//   },
//   {
//     console: "Play Station",
//     id: 2,
//   },
//   {
//     console: "X-box",
//     id: 3,
//   },
// ];

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  // const [dataList, setDataList] = useState(getListingsApi);
  // const [console, setConsole] = useState("");

  // const setStatusFilter = (console) => {
  //   if (console !== "") {
  //     setDataList([
  //       ...getListingsApi.data.filter((e) => e.console === console),
  //     ]);
  //   } else {
  //     setDataList(getListingsApi.data);
  //   }
  //   setConsole(console);
  // };

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {/* <View style={styles.tab}>
        {listTab.map((list, id) => (
          <TouchableOpacity
            style={[styles.btnTab, console === list.console]}
            onPress={() => setStatusFilter(list.console)}
          >
            <AppText style={styles.console}>
              {list.console}
              {id.id}
            </AppText>
          </TouchableOpacity>
        ))}
      </View> */}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        key={getListingsApi.data.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.console}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 8,
  },
  // btnTab: {
  //   width: Dimensions.get("screen").width / 3,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   padding: 5,
  // },
  // tab: {
  //   flexDirection: "row",
  //   marginBottom: 5,
  // },
  // console: {
  //   color: colors.primary,
  //   fontWeight: "bold",
  // },
});

export default ListingsScreen;
