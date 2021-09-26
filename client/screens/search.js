import tailwind from 'tailwind-rn';
import React from 'react';
import { View } from 'react-native';
import { SearchBox } from '../components/search-box';
import { LinearGradient } from 'expo-linear-gradient';

export function Search({ navigation, updateBeach }) {
  return (
    <View>
      <LinearGradient
        colors={['#05545C', 'white']}
        style={tailwind(style.body)}
      >
        <SearchBox
          style={tailwind(style.container)}
          navigation={navigation}
          updateBeach={updateBeach}
        />
      </LinearGradient>
    </View>
  );
}

const style = {
  body: 'h-full',
  favourites: 'justify-center absolute bottom-10 left-10',
  tabText: 'text-2xl ',
  explore: 'justify-center absolute bottom-10 right-10',
};
