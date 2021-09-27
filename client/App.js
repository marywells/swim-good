import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import moment from 'moment';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Search } from './screens/search';
import { Beach } from './screens/beach';
import { Favourites } from './screens/favourites';
import { Explore } from './screens/explore';
import { Journal } from './screens/journal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as ApiService from './api-service';
import { calcSwellDir } from './components/interpreters';

const Tab = createBottomTabNavigator();

export default function App() {
  const [beach, setBeach] = useState('');
  const [swimConditions, setSwimConditions] = useState('');
  const [tideTimes, setTideTimes] = useState('');
  const [favourites, setFaves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    updateFavourites();
  }, []);

  function updateFavourites() {
    ApiService.getFavourites().then((data) => {
      setFaves(data);
    });
  }

  function updateBeach(item) {
    setIsLoading(true);
    getMarineData(item.lat, item.long);
    getTidalData(item.lat, item.long);
    setBeach(item);
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
    //   setIsLoading(false);
    // });

    setSwimConditions({
      waveHeight: '1.2 m',
      swellDir: calcSwellDir(180),

      windSpeed: '0.3 m/s',
      waterTemp: '15°C',
      airTemp: '16°C',
    });
    setIsLoading(false);
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

  function isFavourite(bool) {
    if (bool) {
      ApiService.removeBeach(beach.EUBWID).then(() => updateFavourites());
    } else {
      ApiService.addBeach(beach).then(() => updateFavourites());
    }
  }

  return (
    <SafeAreaView style={tailwind(style.container)}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'Beach') {
                iconName = 'water-outline';
              } else if (route.name === 'Favourites') {
                iconName = 'star-outline';
              } else if (route.name === 'Explore') {
                iconName = 'location-outline';
              } else if (route.name === 'Journal') {
                iconName = 'book-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#077A87',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name='Search'>
            {(props) => (
              <Search component={Search} updateBeach={updateBeach} {...props} />
            )}
          </Tab.Screen>
          <Tab.Screen name='Beach'>
            {(props) => (
              <Beach
                component={Beach}
                beach={beach}
                swimConditions={swimConditions}
                tideTimes={tideTimes}
                favourites={favourites}
                isFavourite={isFavourite}
                isLoading={isLoading}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name='Favourites'>
            {(props) => (
              <Favourites
                component={Favourites}
                updateBeach={updateBeach}
                favourites={favourites}
                {...props}
              />
            )}
          </Tab.Screen>

          <Tab.Screen name='Explore'>
            {(props) => (
              <Explore
                component={Explore}
                updateBeach={updateBeach}
                {...props}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name='Journal'>
            {(props) => <Journal component={Journal} {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = {
  container: 'flex-1 pt-6',
};
