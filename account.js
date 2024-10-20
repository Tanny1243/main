// Screen3.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default Account = ({ navigation, route }) => {
  const { username, email } = route.params.userData;
  const Logout = () => {
    navigation.replace("Login");
  };
  const logoImg = require("./assets/icon.png");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Page</Text>
      <Text style={styles.text}>Welcome to your account {username}!</Text>
      <Image
        source={logoImg}
        style={{ height: 175, width: 160, borderRadius: 30, marginBottom: 30 }}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={Logout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9bdea1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 45,
  },
  text: {
    fontSize: 15,
    marginBottom: 100,
    fontWeight: "bold",
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  logoutButtonText: {
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
  },
});