import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Listagem from './src/screens/Listagem';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName='Login'>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          option={{ title: 'Login' }}
        />
        <Stack.Screen
          name='Listagem'
          component={Listagem}
          option={{ title: 'Listagem' }}
        />
        <Stack.Screen name='Home' component={Home} option={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
