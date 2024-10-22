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

      <TouchableOpacity style={styles.logoutButton} onPress={Logout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.Box}>
        <Text style={styles.smallText}> Dear respected user, we hope our app experience is seamless and you are able to use it properly for your needs.</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",  // Light blue background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 45,
    color: "#006400",  // Dark green for the title
  },
  text: {
    fontSize: 20,
    marginBottom: 100,
    fontWeight: "bold",
    color: "#FFFFFF",  // Light green for smaller text
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",  // White button background
    borderRadius: 10,
    shadowColor: "#000",  // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,  // Elevation for Android material style
    top: 120,
  },
  logoutButtonText: {
    color: "#006400",  // Dark green for the button text
    fontWeight: "bold",
    textAlign: "center",
  },
  Box: {
    justifyContent: "space-around",
    backgroundColor: "#006400",  // Dark green for the box
    height: 125,
    width: 360,
    alignContent: "flex-end",
    borderRadius: 20,
    position: "relative",
    bottom: 80,
    shadowColor: "#000",  // Soft shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,  // Elevation for depth
    alignItems: "center",
  },
  smallText: {
    fontSize: 18,
    color: "#ffffff", 
    alignContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  }

});


