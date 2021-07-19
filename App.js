import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Scroll } from 'react-native';
import CarItem from './components/CarItem';
export default function App() {
  return (
    <View style={styles.container}>

      <CarItem
        title="Model S"
        subTitle="Order Online For"
        subTitleCTA="Touchless Delivery"
        image={require("./assets/images/ModelX.jpeg")}
      />

      <StatusBar style="auto" />
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
