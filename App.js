import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind(style.body)}>
      <Text style={tailwind(style.header)}>Swim Good App!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const style = {
  body: 'bg-yellow-200 justify-center items-center flex-1',
  header: 'text-blue-900 font-bold',
};
