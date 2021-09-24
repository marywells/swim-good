import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FaveItem } from '../components/fave-item';
import { FAVES } from '../data/fave-data';

export function Favourites({ navigation, updateBeach }) {
  //function, for each element of faves, return a fave item (props)

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
      <View style={tailwind(style.body)}>
        <Text style={tailwind(style.favourites)}>favourites</Text>

        <FlatList
          data={FAVES}
          renderItem={renderItem}
          keyExtractor={(item) => item.EUBWID}
        />
      </View>
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
  favourites:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300 text-4xl font-bold text-white  text-center',
};
