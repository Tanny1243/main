import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Button,
  Animated,
} from "react-native";
import Slider from "./Slider";

export default FarmerHomepage = ({ route }) => {
  const [expanded, setExpanded] = useState(false);
  const { username, email } = route.params.userData;
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const logoImg = require("./assets/icon.png");
  return (
    <View style={{ backgroundColor: "#9bdea1", height: "100%" }}>
      <View style={{ backgroundColor: "#9bdea1" }}>
        <View style={styles.start}>
          <Image
            source={logoImg}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          />
          <Text style={{ padding: 5 }}>
            NCFresh
            {
              "                                                                             "
            }
            <Text style={{ color: "#006400", fontWeight: "bold" }}>
              Farmer HomePage
            </Text>
          </Text>
        </View>
        <View style={styles.Box}>
          <Text style={styles.welcomeText}> Welcome Farmer {username}!</Text>
          <Text style={styles.text}>Welcome to the Hub of your Buisness!</Text>
          <Text style={styles.text}>
            Add up to your inventory and receive offers in your favorite
            platforms!!
          </Text>
        </View>
      </View>
      <View style={[styles.container, expanded && styles.expanded]}>
        <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
          <Text style={styles.title}>
            Welcome Farmers We've got changes to make!
          </Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.content}>
            <Text>
              93% of Americans want to eat healthy, and 63% of consumers say
              they try to eat healthy most or all of the time. While 93% of
              Americans express the desire to eat healthy, only 10% of consumers
              say they eat healthy ALWAYS.
            </Text>
            <Text>
              More than 80% of Americans' diets are low in vegetables, fruits
              and dairy, according to the 2020-2025 Dietary Guidelines for
              Americans.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "200",
    padding: 10,
  },
  welcomeText: {
    color: "white",
    fontWeight: "400",
    padding: 10,
  },
  start: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: 50,
    backgroundColor: "#9bdea1",
    paddingBottom: 10,
  },
  Icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 700,
  },
  Box: {
    justifyContent: "space-around",
    backgroundColor: "#006400",
    height: 100,
    width: 350,
    alignContent: "flex-end",
    borderRadius: 20,
    position: "relative",
    left: 5,
  },
  container: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    borderRadius: 40,
    overflow: "hidden",
  },
  expanded: {
    marginBottom: 100, // Add extra margin when expanded
    borderColor: "black",
    borderRadius: 40,
  },
  header: {
    paddingVertical: 30,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "green",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
  },
});