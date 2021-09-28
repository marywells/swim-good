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
        <View style={tailwind(style.favourites)}>
          <Text
            style={{
              fontFamily: 'Archivo_900Black',
              color: 'white',
              fontSize: 45,
              textAlign: 'center',
            }}
          >
            Favourites
          </Text>
        </View>
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
  favourites: 'pt-1 m-1',
};
