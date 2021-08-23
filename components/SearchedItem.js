import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const SearchedItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigation.navigate("Detail", {
          id: props.data.id,
          title: props.data.title,
          userName: props.data.userName,
        })
      }
    >
      <View style={styles.listItems}>
        <View style={styles.votes}>
          <View>
            <Text style={styles.voteText}>{props.data.upVotes}</Text>
          </View>
          <View>
            <Icon style={styles.caretup} name="caretup"></Icon>
          </View>
        </View>
        <View style={styles.questionItem}>
          <View>
            <Text style={styles.questionTitle}>{props.data.title}</Text>
          </View>
          <View>
            <Text>
              asked by{" "}
              <Text style={styles.username}>{props.data.userName}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    borderColor: "gray",
    flexDirection: "row",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowOffset:{width:0, height:2},

  },
  caretup: {
    color:"white"
  },
  votes: {
    flex: 1,
    padding: 20,
    backgroundColor: "#8980F5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius:10
  },
  voteText: {
    fontSize: 17,
    color:"white"
  },
  questionItem: {
    flex: 4,
    padding: 5,
    flexDirection: "column",
  },
  questionTitle: {
    fontWeight: "bold",
    color: "gray",
  },
  username: {
    color: "#8980F5",
  },
});

export default SearchedItem;
