import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import PutOnSale from "../screens/PutOnSale";
import Inbox from "../screens/Inbox";
import Profile from "../screens/Profile";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../theme/Colors";
import LogoTitle from "../components/LogoTitle";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryVariant,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          headerTitle: () => <LogoTitle />,
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Chercher",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PutOnSale"
        component={PutOnSale}
        options={{
          tabBarLabel: "Vendre",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
          headerTitle: "Vends un article",
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="inbox" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
