import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FaveItem } from '../components/fave-item';
import { LinearGradient } from 'expo-linear-gradient';

export function Favourites({ navigation, updateBeach, favourites }) {
  function renderItem({ item }) {
    return (
      <FaveItem
        navigation={navigation}
        updateBeach={updateBeach}
        item={item}
      ></FaveItem>
    );
  }
  return (
    <View>
      <LinearGradient
        colors={['#05545C', 'white']}
        style={tailwind(style.body)}
      >
        <Text style={tailwind(style.favourites)}>Favourites</Text>
        <FlatList
          data={favourites}
          renderItem={renderItem}
          keyExtractor={(item) => item.EUBWID}
        />
      </LinearGradient>
    </View>
  );
}

const style = {
  body: 'h-full',
  favourites:
    'p-1 pt-5 m-3 rounded-xl text-4xl font-bold text-white text-center',
};
