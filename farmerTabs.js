import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FarmerHomepage from "./farmerHomepage";
import Accounts from "./account";
import ItemPage from "./FarmerItems";
import Benefits from "./Benefits";
import PostPage from "./postPage";
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    showlabel: false,
    position: "absolute",
    bottom: 13,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 90,
  },
};
export default FarmerTabs = (props) => {
  const userData = props.route.params;
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="My Home"
        component={FarmerHomepage}
        initialParams={userData}
      />
      <Tab.Screen
        name="Inventory"
        component={ItemPage}
        initialParams={userData}
      />
      <Tab.Screen
        name="Add Post"
        component={PostPage}
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