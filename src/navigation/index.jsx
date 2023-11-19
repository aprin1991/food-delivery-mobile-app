import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Restaurant from "../screens/Restaurant";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
    </Stack.Navigator>
  );
};

export default Navigation;
