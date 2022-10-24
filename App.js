import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import About from './components/About';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>C'est instantané.</Text>
      <About />
      <StatusBar style="auto" />
      <ActivityIndicator color='red' size='large' animating={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
