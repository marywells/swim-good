import tailwind from 'tailwind-rn';
import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SearchBox } from '../components/search-box';

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
        <Pressable onPress={() => navigation.navigate('Favourites')}>
          <Text style={tailwind(style.favouritesText)}>❤</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
  favourites: 'justify-center absolute bottom-10 left-10',
  favouritesText: 'text-2xl ',
};
