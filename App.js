import 'react-native-gesture-handler';
import React from 'react';
import tailwind from 'tailwind-rn';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Search } from './screens/search';
import { Beach } from './screens/beach';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Text style={tailwind(style.header)}>Swim Good</Text> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Beach' component={Beach} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = {
  body: 'bg-yellow-200 items-center flex-1',
  header: 'text-blue-900 font-bold',
};
