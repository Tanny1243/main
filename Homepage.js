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

  const getLatestItemList = async () => {
    setLatestItemList([]);
    const querySnapShot = await getDocs(collection(db, "posts"));
    querySnapShot.forEach((doc) => {
      console.log("Docs", doc.data());
      setLatestItemList((latestItemList) => [...latestItemList, doc.data()]);
    });
  };
  return (
    <ScrollView style={{ backgroundColor: "#ADD8E6" }}>
      <View style={styles.start}>
        <HeaderTab />
      </View>
      <View style={styles.Box}>
        <Text style={styles.Welcome}> Welcome {username}!</Text>
        <Text style={styles.Text}>
          Here's a few restaurants that are donating food!
        </Text>
      </View>
      <ItemList latestItemList={latestItemList} />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   start: {
//     flexDirection: "row",
//     textAlign: "center",
//     marginTop: 50,
//     paddingBottom: 10,
//   },
//   Icons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 700,
//   },
//   Box: {
//     justifyContent: "space-around",
//     backgroundColor: "#006400",
//     height: 100,
//     width: 350,
//     alignContent: "flex-end",
//     borderRadius: 20,
//     position: "relative",
//     left: 5,
//   },
//   Welcome: {
//     color: "white",
//     fontWeight: "400",
//     padding: 5,
//   },
//   Text: {
//     color: "white",
//     fontWeight: "200",
//     padding: 10,
//   },
// });

const styles = StyleSheet.create({
  start: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: 50,
    paddingBottom: 10,
    backgroundColor: "#ADD8E6",  // Light blue background
  },
  Icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 700,
  },
  Box: {
    justifyContent: "space-around",
    backgroundColor: "#006400",  // Dark green for the box
    height: 100,
    width: 350,
    alignContent: "flex-end",
    borderRadius: 20,
    position: "relative",
    left: 5,
    shadowColor: "#000",  // Soft shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,  // Elevation for depth
  },
  Welcome: {
    color: "#7ED957",  // Light green for the welcome text
    fontWeight: "400",
    padding: 5,
    fontSize: 18,  // Slightly larger text for emphasis
  },
  Text: {
    color: "#FFFFFF",  // White for contrast
    fontWeight: "200",
    padding: 10,
    fontSize: 16,  // Light text size for balance
  },
});