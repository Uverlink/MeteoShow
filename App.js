import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Result from './components/Result.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Result />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color:"white",
    marginTop:40,
    flex:1,
    backgroundColor: "#010A18",
  },
})
