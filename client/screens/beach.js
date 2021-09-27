import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { BeachDetails } from '../components/beach-details';
import { LinearGradient } from 'expo-linear-gradient';

export function Beach({
  beach,
  swimConditions,
  tideTimes,
  favourites,
  isFavourite,
  isLoading,
}) {
  return (
    <View>
      <LinearGradient
        colors={['#05545C', 'transparent']}
        style={tailwind(style.body)}
      >
        <View>
          {isLoading ? (
            <View style={tailwind(style.loading)}>
              <ActivityIndicator size='large' color='#05545C' />
            </View>
          ) : (
            <BeachDetails
              beach={beach}
              swimConditions={swimConditions}
              tideTimes={tideTimes}
              isFavourite={isFavourite}
              favourites={favourites}
            ></BeachDetails>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

const style = {
  body: 'h-full',
  loading: 'h-full justify-center justify-around items-center',
  choose:
    'bg-white bg-opacity-20 p-3 m-4 mt-10 rounded-xl border border-gray-300 text-4xl font-bold text-white text-center',
};
