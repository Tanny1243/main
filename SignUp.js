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
    <ScrollView style={{ flex: 1, backgroundColor: "#ADD8E6", padding: 10 }}>
      <Text style={styles.title}>Welcome to FoodForAll!</Text>

      <Text style ={{color:"white"}}>Name</Text>
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
      <Text style ={{color:"white"}} >Email</Text>
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
      <Text style ={{color:"white"}}>Password</Text>
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
      <Text style={{ fontSize: 30, marginTop: 5, textAlign: "center", color:"#0C9944", fontWeight: "bold" }}>
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
            Restauraunt
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
        placeholder="User Info (based on your comfort put your business address, phone #, Instagram handle or even your email. This space is so that people can reach out to you!"
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
    paddingHorizontal: 20,  // Increased padding for a more spacious layout
    backgroundColor: "#ADD8E6",  // Lighter and more modern background color
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 42,  // Slightly smaller for a cleaner look
    fontWeight: "bold",
    marginBottom: 30,  // Increased spacing for balance
    marginTop: 60,
    color: "#0C9944",  // Dark green consistent with Google's modern design
    textAlign: "center",
    fontFamily: "Roboto",  // Clean font, like Google uses
  },
  input1: {
    height: 100,
    borderWidth: 1,
    borderColor: "#E0E0E0",  // Light gray border for minimalism
    borderRadius: 12,  // Rounded corners for a polished modern look
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "black",  // Dark text for clarity
    textAlignVertical: "top",
    backgroundColor: "#FFFFFF",  // Clean white background for input
    opacity: 0.9,  // Slight transparency for a refined feel
    width: "100%",
    shadowColor: "#000",  // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,  // Material Design style shadow for Android
  },
  Logintext: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FFFFFF",  // White text for contrast
    textAlign: "center",
    backgroundColor: "#0C9944",  // Dark green for consistency
    paddingVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  Logintext2: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 50,  // Adjusted for layout balance
    color: "#0C9944",  // Dark green for thematic consistency
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",  // Clean white background for input field
    width: "100%",
    height: 50,  // Taller input for better UX
    borderColor: "#E0E0E0",  // Lighter border for a modern look
    borderWidth: 2,
    borderRadius: 12,  // Rounded corners for modern feel
    color: "black",
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: "#000",  // Subtle shadow for material depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,  // Elevation for Android
  },
  button: {
    backgroundColor: "#0C9944",  // Dark green for consistency
    width: "100%",
    height: 50,  // Comfortable button height
    borderRadius: 25,  // Fully rounded for a polished look
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",  // Subtle shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,  // Material depth for Android
  },
  buttonText: {
    color: "#FFFFFF",  // White for clarity
    fontWeight: "bold",
    fontSize: 18,  // Larger for readability
  },
  usertype: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,  // Match with other rounded elements
    backgroundColor: "#7ED957",  // Consistent green tone for user types
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 10,
    minWidth: "48%",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  activeUserType: {
    backgroundColor: "#0C9944",
    borderWidth: 0,
  },
  userTypeLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  userTypeLabelSelected: {
    color: "#7ED957",
  },
  roles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    backgroundColor: "#7ED957",
    padding: 10,
    borderRadius: 12,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
});
