import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Handler from './src/Handler';


const Stack = createStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen 
        name="Home" 
        component={Handler} 
        options={{ title: 'Home' }}
      />
  </Stack.Navigator>
    </NavigationContainer>
    
  );
}