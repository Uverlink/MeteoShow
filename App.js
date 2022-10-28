import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import About from './components/About';
import Search from './components/Search'

export default class App extends Component {
  render () {
    return (
      <View style={{marginVertical: 40}}>
          <Search />
     </View>
   );
  }
}
