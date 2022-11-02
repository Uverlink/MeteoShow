import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, processColor } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import Result from './components/Result';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
let news = undefined;

export default class App extends Component {

  render () {
    return (
      <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Météo Actuelle') {
                    iconName = focused
                      ? 'partly-sunny'
                      : 'partly-sunny-outline';
                  } else if (route.name === 'Trouver ma Ville') {
                    iconName = focused ? 'search' : 'search-outline';
                  } else if (route.name === 'À Propos') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: 'coral',
                tabBarInactiveBackgroundColor: 'black'
              })}>
        <Tab.Screen name="Météo Actuelle" component={Result} />
        <Tab.Screen name="Trouver ma Ville" component={Search} options={{ tabBarBadge: news }} />
        <Tab.Screen name="À Propos" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
   );
  }
}
