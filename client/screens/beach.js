import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BeachDetails } from '../components/beach-details';
import { LinearGradient } from 'expo-linear-gradient';

export function Beach({
  beach,
  swimConditions,
  tideTimes,
  clearFields,
  isFavourite,
  favourites,
}) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        clearFields();
        return false;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );
  return (
    <View>
      <LinearGradient
        colors={['#05545C', 'transparent']}
        style={tailwind(style.body)}
      >
        {swimConditions.waveHeight ? (
          <View>
            <BeachDetails
              beach={beach}
              swimConditions={swimConditions}
              tideTimes={tideTimes}
              isFavourite={isFavourite}
              favourites={favourites}
            ></BeachDetails>
          </View>
        ) : (
          <Text style={tailwind(style.choose)}>Choose a beach</Text>
        )}
      </LinearGradient>
    </View>
  );
}

const style = {
  body: 'h-full',
  choose:
    'bg-white bg-opacity-20 p-3 m-4 mt-10 rounded-xl border border-gray-300 text-4xl font-bold text-white  text-center',
};
