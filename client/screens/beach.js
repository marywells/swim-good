import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BeachDetails } from '../components/beach-details';

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
      {swimConditions.waveHeight && (
        <View style={tailwind(style.body)}>
          <BeachDetails
            beach={beach}
            swimConditions={swimConditions}
            tideTimes={tideTimes}
            isFavourite={isFavourite}
            favourites={favourites}
          ></BeachDetails>
        </View>
      )}
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
};
