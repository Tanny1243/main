import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { createUserDocument, USER_TYPES } from "./firebase.util";
import { NavigationContainer } from "@react-navigation/native";

export default SignUpScreen = ({ navigation }) => {
  const GoHome = (userData) => {
    navigation.replace("Tabs", { userData });
  };
  const farmerHome = (userData) => {
    navigation.replace("farmerTabs", { userData });
  };

  const goToLogin = () => {
    navigation.replace("Login");
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");
  const [errors, setErrors] = useState({});
  const [bio, setBio] = useState("");

  const validateForm = () => {
    let errors = {};

    if (!userName) errors.userName = "Your Name is required";
    if (!usertype) errors.usertype = "A User Type is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      const user = {
        username: userName,
        password: password,
        email: email,
        usertype: usertype,
      };
      if (bio) {
        user["bio"] = bio;
      }
      try {
        const userDocRef = await createUserDocument(user);
        setEmail("");
        setUserName("");
        setPassword("");
        setUserType("");
        setBio("");
        setErrors({});

        if (usertype === USER_TYPES.FARMER) {
          farmerHome(user);
        } else {
          GoHome(user);
        }
      } catch (error) {
        Alert.alert("Error", error);
      }
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <Text style={styles.title}>Welcome to NCFresh!</Text>

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        keyboardType="email-address"
        autoCapitalize="none"
        value={userName}
        onChangeText={(value) => setUserName(value)}
      />
      {errors.userName ? (
        <Text style={styles.errorText}>{errors.userName}</Text>
      ) : null}
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="name1234@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(value) => setEmail(value)}
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
        onChangeText={(value) => setPassword(value)}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}
      <Text style={{ fontSize: 30, marginTop: 5, textAlign: "center" }}>
        {" "}
        Choose Role{" "}
      </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            setUserType(USER_TYPES.FARMER);
          }}
          style={[
            styles.usertype,
            usertype === USER_TYPES.FARMER && styles.activeUserType,
          ]}
          // color={usertype === USER_TYPES.FARMER ? "#006400" : "white"}
        >
          <Text
            style={[
              styles.userTypeLabel,
              usertype === USER_TYPES.FARMER && styles.userTypeLabelSelected,
            ]}
          >
            Farmer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Customer"
          onPress={() => {
            setUserType(USER_TYPES.CUSTOMER);
          }}
          //color={usertype === USER_TYPES.CUSTOMER ? "#006400" : "white"}
          style={[
            styles.usertype,
            usertype === USER_TYPES.CUSTOMER && styles.activeUserType,
          ]}
        >
          <Text
            style={[
              styles.userTypeLabel,
              usertype === USER_TYPES.CUSTOMER && styles.userTypeLabelSelected,
            ]}
          >
            Customer
          </Text>
        </TouchableOpacity>
      </View>
      {errors.usertype ? (
        <Text style={styles.errorText}>{errors.usertype}</Text>
      ) : null}
      <TextInput
        style={styles.input1}
        multiline={true}
        numberOfLines={8}
        placeholder="Bio (based on your comfort put your buisness adress, phone #, Instagram handel or even your email. This space is so that peopele can reach out to you!"
        value={bio}
        onChangeText={(value) => setBio(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.Logintext2}>
          Already have an account? Login here.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
    color: "#0C9944",
    textAlign: "center",
  },
  input1: {
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 0,
    marginBottom: 10,
    color: "white",
    textAlignVertical: "top",
    backgroundColor: "#7ED957",
    width: "100%",
  },
  Logintext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#7ED957",
    textAlign: "center",
    backgroundColor: "#7ED957",
    width: "100%",
  },
  Logintext2: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 250,
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
    color: "white",
    paddingHorizontal: 0,
    marginBottom: 10,
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
    marginBottom: 10,
  },
  usertype: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#7ED957",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  activeUserType: {
    backgroundColor: "#0C9944",
    borderWidth: 0,
  },
  userTypeLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
  userTypeLabelSelected: {
    color: "#7ED957",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  roles: {
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: 125,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    backgroundColor: "#7ED957",
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});