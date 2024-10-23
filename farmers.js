// Screen2.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Farmers() {
  const [postlist, setPostlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const logoImg = require("./assets/icon.png");
  return (
    <View>
      <View style={styles.start}>
        <Image
          source={logoImg}
          style={{ width: 50, height: 50, borderRadius: 30 }}
        />
        <Text>
          FoodForAll
          {
            "                                                                             "
          }
          <Text style={{ color: "#006400", fontWeight: "bold" }}>Farmers</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});