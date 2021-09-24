import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import tailwind from 'tailwind-rn';
import moment from 'moment';
import { Text, View, SafeAreaView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Search } from './screens/search';
import { Beach } from './screens/beach';
import { Favourites } from './screens/favourites';
import { createStackNavigator } from '@react-navigation/stack';
import * as ApiService from './api-service';
import { calcSwellDir } from './components/interpreters';
import { FAVES } from './data/fave-data';

const Stack = createStackNavigator();

export default function App() {
  const [beachName, setBeachName] = useState('');
  const [swimConditions, setSwimConditions] = useState('');
  const [tideTimes, setTideTimes] = useState('');
  const [waterQuality, setWaterQuality] = useState('');
  const [favourites, setFaves] = useState(FAVES);

  function updateBeach(item) {
    getMarineData(item.lat, item.long);
    getTidalData(item.lat, item.long);
    updateLocalBeach(item);
  }

  function getMarineData(lat, long) {
    // ApiService.marineData(lat, long).then((data) => {
    //   const result = {
    //     waveHeight: data.hours[0].waveHeight.sg + ' m',
    //     swellDir: calcSwellDir(data.hours[0].swellDirection.sg),
    //     windSpeed: data.hours[0].windSpeed.sg + ' m/s',
    //     waterTemp: Math.round(data.hours[0].waterTemperature.sg) + '°C',
    //     airTemp: Math.round(data.hours[0].airTemperature.sg) + '°C',
    //   };
    //   setSwimConditions(result);
    // });

    setSwimConditions({
      waveHeight: '1.2 m',
      swellDir: calcSwellDir(180),

      windSpeed: '0.3 m/s',
      waterTemp: '15°C',
      airTemp: '16°C',
    });
  }

  function getTidalData(lat, long) {
    // ApiService.tidalData(lat, long).then((result) => {
    //   const data = result.data;
    //   let highs = [];
    //   let lows = [];
    //   for (let i = 0; i < data.length; i++) {
    //     let time = moment(data[i].time.toString()).format('HH:mm');
    //     if (data[i].type === 'high') {
    //       highs.length > 0 ? highs.push(' & ' + time) : highs.push(time);
    //     } else if (data[i].type === 'low') {
    //       lows.length > 0 ? lows.push(' & ' + time) : lows.push(time);
    //     }
    //   }
    //   setTideTimes({
    //     highTides: highs,
    //     lowTides: lows,
    //   });
    // });

    setTideTimes({
      highTides: ['05:09 & 17:47'],
      lowTides: ['11:48'],
    });
  }

  function updateLocalBeach(item) {
    setBeachName(item.label);
    setWaterQuality({
      classification: item.classification,
      swimBan: item.swimBan,
    });
  }

  function clearFields() {
    setBeachName('');
    setSwimConditions('');
    setTideTimes('');
    setWaterQuality('');
  }

  function addFavourite(item) {}

  function removeFavourite(item) {}

  return (
    <SafeAreaView style={tailwind(style.container)}>
      <NavigationContainer style={tailwind(style.nav)}>
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
                favourites={favourites}
                clearFields={clearFields}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name='Favourites'>
            {(props) => (
              <Favourites
                component={Favourites}
                updateBeach={updateBeach}
                favourites={favourites}
                {...props}
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
