import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import GridExample from "./gridlayout";
import ItemList from "./itemlist";
import { db } from "./firebase.util";
import { collection, getDocs, orderBy, where } from "firebase/firestore";
export default ItemPage = ({ route }) => {
  const { username, email } = route.params.userData;
  const [latestItemList, setLatestItemList] = useState([]);
  useEffect(() => {
    getLatestItemList();
  }, []);

  const getLatestItemList = async () => {
    setLatestItemList([]);
    const querySnapShot = await getDocs(
      collection(db, "posts"),
      where("email", "==", email)
    );
    querySnapShot.forEach((doc) => {
      const data = doc.data();
      console.log("Docs", data);
      if (data.email === email)
        setLatestItemList((latestItemList) => [...latestItemList, data]);
    });
  };
  return (
    <ScrollView style={{ backgroundColor: "#ADD8E6" }}>
      <View style={styles.start}>
        <Text>
          FoodForAll
          {
            "                                                                                    "
          }
          <Text style={{ color: "#006400", fontWeight: "bold" }}>
            Inventory
          </Text>
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
    marginTop: 50,
  },
});