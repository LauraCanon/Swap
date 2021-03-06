import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "John Niño",
    description:
      "Hey! Is this game still available? I have a few games to swap if you're interested",
    image: require("../assets/john.jpg"),
  },
  {
    id: 2,
    title: "Paola Cañon",
    description: "Hello, I'm interested in this game. Can we talk to swap it?",
    image: require("../assets/paola.jpg"),
  },
  {
    id: 3,
    title: "Silvia Pedroza",
    description: "This is a nice game, can we talk?",
    image: require("../assets/silvia.jpg"),
  },
];

function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  const handleSelect = (item) => {
    navigation.navigate("My Messages", item);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => handleSelect(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "John Nino",
              description:
                "Hey! Is this game still available? I have a few games to swap if you're interested",
              image: require("../assets/john.jpg"),
            },
            {
              id: 2,
              title: "Paola Canon",
              description:
                "Hello, I'm interested in this game. Can we talk to swap it?",
              image: require("../assets/paola.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
