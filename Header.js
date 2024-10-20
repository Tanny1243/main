import { View, Text, Image, TextInput } from "react-native";
import React from "react";
export default function HeaderTab() {
  const logoImg = require("./assets/icon.png");
  return (
    <View>
      {/* User Info Section  */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          source={logoImg}
          style={{ width: 50, height: 50, borderRadius: 30 }}
        />
        <View style={{ padding: 5 }}>
          <Text>NCFresh</Text>
          <Text>Home Page</Text>
        </View>
      </View>
    </View>
  );
}