import tailwind from 'tailwind-rn';
import React from 'react';
import { View } from 'react-native';
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
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
  favourites: 'justify-center absolute bottom-10 left-10',
  tabText: 'text-2xl ',
  explore: 'justify-center absolute bottom-10 right-10',
};
