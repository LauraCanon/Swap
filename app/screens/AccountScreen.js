import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Laura Canon"
          subTitle="laurafcanon@gmail.com"
          image={require("../assets/ProfilePicture.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#ff5252" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
