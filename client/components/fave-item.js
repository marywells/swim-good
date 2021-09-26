import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function FaveItem({ navigation, updateBeach, item }) {
  return (
    <TouchableOpacity
      onPress={() => {
        updateBeach(item);
        navigation.navigate('Beach');
      }}
    >
      <View style={tailwind(style.favouriteContainer)}>
        <Text style={tailwind(style.favouriteData)}>
          {item.label}, {item.district}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = {
  favouriteContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-3xl border border-gray-300 flex-row justify-around',
  favouriteData: 'text-xl text-white font-bold text-center',
};
