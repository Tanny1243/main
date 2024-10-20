import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { app } from "./firebase.util";
import Slider from "./Slider";
import HeaderTab from "./Header";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  where,
} from "firebase/firestore";
import ItemList from "./itemlist";
export default Homepage = ({ route }) => {
  const { username, email } = route.params.userData;
  const db = getFirestore(app);
  const [latestItemList, setLatestItemList] = useState([]);
  useEffect(() => {
    getLatestItemList();
  }, []);
  const logoImg = require("./assets/icon.png");

  const getLatestItemList = async () => {
    setLatestItemList([]);
    const querySnapShot = await getDocs(collection(db, "posts"));
    querySnapShot.forEach((doc) => {
      console.log("Docs", doc.data());
      setLatestItemList((latestItemList) => [...latestItemList, doc.data()]);
    });
  };
  return (
    <ScrollView style={{ backgroundColor: "#9bdea1" }}>
      <View style={styles.start}>
        <HeaderTab />
      </View>
      <View style={styles.Box}>
        <Text style={styles.Welcome}> Welcome {username}!</Text>
        <Text style={styles.Text}>
          Here's a few options of fresh produce from your local farmers!
        </Text>
      </View>
      <ItemList latestItemList={latestItemList} />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  start: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: 50,
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
  Welcome: {
    color: "white",
    fontWeight: "400",
    padding: 5,
  },
  Text: {
    color: "white",
    fontWeight: "200",
    padding: 10,
  },
});