import tailwind from 'tailwind-rn';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

export function Favourites({ navigation }) {
  return (
    <View>
      <View style={tailwind(style.body)}>
        <Text style={tailwind(style.favourites)}>favourites</Text>

        <View style={tailwind(style.favouriteContainer)}>
          <View>
            <Text style={tailwind(style.favouriteName)}>FAVOURITE</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
  favourites:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300 text-4xl font-bold text-white  text-center',
  favouriteContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300 flex-row justify-around',
  favouriteName: 'text-3xl pb-1 text-white font-bold text-center',
  favouriteData: 'text-xl text-white font-bold text-center',
};
