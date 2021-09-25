import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchBox } from '../components/search-box';
import MapView from 'react-native-maps';

export function Search({ navigation, updateBeach }) {
  return (
    <View style={tailwind(style.body)}>
      <View>
        <SearchBox
          style={tailwind(style.container)}
          navigation={navigation}
          updateBeach={updateBeach}
        />
      </View>
      <View style={tailwind(style.favourites)}>
        <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
          <Text style={tailwind(style.tabText)}>❤</Text>
        </TouchableOpacity>
      </View>
      <View style={tailwind(style.explore)}>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Text style={tailwind(style.tabText)}>🗺️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
  favourites: 'justify-center absolute bottom-10 left-10',
  tabText: 'text-2xl ',
  explore: 'justify-center absolute bottom-10 right-10',
};
