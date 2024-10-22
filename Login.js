import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { authenticateUser, USER_TYPES } from "./firebase.util";

export default LoginScreen = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const GoHome = (userData) => {
    navigation.replace("Tabs", { userData });
  };
  const farmerHome = (userData) => {
    navigation.replace("farmerTabs", { userData });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const user = {
        password: password,
        email: email,
      };
      try {
        const userData = await authenticateUser(user);
        setEmail("");
        setPassword("");
        setErrors({});
  
        if (userData.usertype == USER_TYPES.FARMER) {
          farmerHome(userData);
        } else {
          GoHome(userData);
        }
      } catch (error) {
        Alert.alert("Login Error", error.message || "An unexpected error occurred.");
      }
    }
  };
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#ADD8E6", padding: 10 }}>
      <Text style={styles.title}>Welcome back to FoodForAll!</Text>
      <Text style={styles.Logintext}>Login To Continue</Text>
      <Text style={{color:"white"}}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="name1234@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}
      <Text style={{color:"white"}} >Password</Text>
      <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSignUp}>
        <Text style={styles.Logintext2}>Sign up here.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F0F4F8",  // Lighter and cleaner background for a modern look
  },
  title: {
    fontSize: 42,  // Slightly smaller for cleaner, more refined look
    fontWeight: "bold",
    fontFamily: "Roboto",  // Modern, clean font family like Google uses
    marginBottom: 30,
    marginTop: 60,  // Optimized for better layout on mobile
    color: "#0C9944",  // Consistent green with better contrast
    textAlign: "center",
  },
  Logintext: {
    fontSize: 18,
    fontWeight: "600",  // Semi-bold for readability without being too heavy
    marginBottom: 20,
    color: "#0C9944",  // Consistent green color
    textAlign: "center",
  },
  Logintext2: {
    fontSize: 14,
    fontWeight: "500",  // Medium weight for subtle emphasis
    marginBottom: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",  // White background for a clean input field
    width: "100%",
    height: 50,  // Slightly taller for more space to interact
    borderColor: "#E0E0E0",  // Light gray border to match Material Design
    borderWidth: 1,
    borderRadius: 12,  // More rounded corners for a modern feel
    color: "black",
    paddingHorizontal: 15,  // Padding inside the input for comfortable typing
    marginBottom: 20,
    shadowColor: "#000",  // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,  // Smooth shadow around input
    elevation: 3,  // Material Design-style elevation for Android devices
  },
  button: {
    backgroundColor: "#0C9944",  // Consistent dark green for buttons
    width: "100%",
    height: 50,  // Slightly taller for better touch target
    borderRadius: 25,  // Fully rounded corners for a clean, modern look
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",  // Subtle shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,  // Add depth on Android
  },
  buttonText: {
    color: "#FFFFFF",  // White text for clear contrast
    fontWeight: "bold",
    fontSize: 18,  // Slightly larger for emphasis
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,  // Consistent size for error text
    textAlign: "center",  // Align error messages to the center
  },
});
