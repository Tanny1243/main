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
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <Text style={styles.title}>Welcome back to FoodForArll!</Text>
      <Text style={styles.Logintext}>Login To Continue</Text>
      <Text>Email</Text>
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
      <Text>Password</Text>
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
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 100,
    color: "#0C9944",
    textAlign: "center",
  },
  Logintext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#7ED957",
    textAlign: "center",
  },
  Logintext2: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#0C9944",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#7ED957",
    width: "100%",
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    color: "black",
    paddingHorizontal: 0,
    marginBottom: 20,
    opacity: 0.75,
  },
  button: {
    backgroundColor: "#0C9944",
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});