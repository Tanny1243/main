import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Homepage";
import Accounts from "./account";
import Benefits from "./Benefits";

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    showlabel: false,
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 90,
  },
};
export default Tabs = (props) => {
  const userData = props.route.params;
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} initialParams={userData} />
      <Tab.Screen
        name="Benefits"
        component={Benefits}
        initialParams={userData}
      />
      <Tab.Screen
        name="Accounts"
        component={Accounts}
        initialParams={userData}
      />
    </Tab.Navigator>
  );
};