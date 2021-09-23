import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Search } from './screens/search';
import { Beach } from './screens/beach';
import { createStackNavigator } from '@react-navigation/stack';
import * as ApiService from './api-service';

const Stack = createStackNavigator();

export default function App() {
  const [beachName, setBeachName] = useState('');
  const [swimConditions, setSwimConditions] = useState({
    waveHeight: '',
    swellDir: '',
    windSpeed: '',
    waterTemp: '',
    airTemp: '',
  });
  const [tideTimes, setTideTimes] = useState('');
  const [waterQuality, setWaterQuality] = useState({
    classification: '',
    swimBan: '',
  });

  function updateBeach(item) {
    getMarineData(item.lat, item.long);
    getTidalData(item.lat, item.long);
    updateLocalBeach(item);
  }

  function getMarineData(lat, long) {
    // ApiService.marineData(lat, long).then((data) => {
    //   console.log(data);
    // });
    // setSwimConditions({
    //   waveHeight: '1.2 metres',
    //   swellDir: calcSwellDir(180),
    //   windSpeed: '0.3m/s',
    //   waterTemp: '15°C',
    //   airTemp: '16°C',
    // });
  }

  function getTidalData(lat, long) {
    //fetch API and update state
    //ApiService.tidalData(lat, long);
    ApiService.tidalData(lat, long).then((result) => {
      console.log(result);
    });

    // setTideTimes({
    //   highTides: ['05:09', '17:47'],
    //   lowTides: ['11:48'],
    // });
  }

  function updateLocalBeach(item) {
    setBeachName(item.label);
    console.log(item.label);
    setWaterQuality({
      classification: item.classification,
      swimBan: item.swimBan,
    });
  }
  function calcSwellDir(angle) {
    const directions = [
      '↑ N',
      '↗ NE',
      '→ E',
      '↘ SE',
      '↓ S',
      '↙ SW',
      '← W',
      '↖ NW',
    ];
    return directions[Math.round(angle / 45) % 8];
  }

  return (
    <SafeAreaView style={tailwind(style.container)}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Search'>
            {(props) => (
              <Search component={Search} updateBeach={updateBeach} {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen name='Beach'>
            {(props) => (
              <Beach
                component={Beach}
                beachName={beachName}
                swimConditions={swimConditions}
                tideTimes={tideTimes}
                waterQuality={waterQuality}
                //{...props}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = {
  container: 'flex-1 pt-7',
};
