import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BeachDetails } from '../components/beach-details';

export function Beach({
  beachName,
  swimConditions,
  tideTimes,
  waterQuality,
  clearFields,
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
            beachName={beachName}
            swimConditions={swimConditions}
            tideTimes={tideTimes}
            waterQuality={waterQuality}
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
