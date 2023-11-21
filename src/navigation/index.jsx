import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import Restaurant from '../screens/Restaurant';
import PreparingOrderScreen from '../screens/PreparingOrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Restaurant' component={Restaurant} />
      <Stack.Screen
        name='Cart'
        options={{ presentation: 'modal' }}
        component={CartScreen}
      />
      <Stack.Screen
        name='PreparingOrder'
        options={{ presentation: 'fullScreenModal', headerShown: false }}
        component={PreparingOrderScreen}
      />
      <Stack.Screen
        name='Delivery'
        options={{ presentation: 'fullScreenModal', headerShown: false }}
        component={DeliveryScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
