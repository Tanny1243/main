import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp";
import HomeScreen from "./Homepage";
import Tabs from "./Tab";
import FarmerTabs from "./farmerTabs";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="farmerTabs" component={FarmerTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}