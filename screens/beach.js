import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export function Beach({
  beachName,
  swimConditions,
  tideTimes,
  waterQuality,
  clearFields,
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
        <View>
          <Text style={tailwind(style.beachName)}>{beachName}</Text>
          <Text style={tailwind(style.keyInfo)}>
            <br></br>
            Waves: {swimConditions.waveHeight}
            <br></br>
            Swell {swimConditions.swellDir}
            <br></br>
            Speed: {swimConditions.windSpeed}
          </Text>
          <br></br>
          <Text style={tailwind(style.temperatues)}>
            Water Temp: {swimConditions.waterTemp}
            <br></br>
            Air Temp: {swimConditions.airTemp}
          </Text>
          <br></br>
          <Text style={tailwind(style.tides)}>
            High Tides: {tideTimes.highTides} <br></br>
            Low Tides: {tideTimes.lowTides}
          </Text>
          <br></br>
          <Text style={tailwind(style.waterQuality)}>
            Water Quality: {waterQuality.classification} out of 5 <br></br>
            Swim Ban? {waterQuality.swimBan.toString()}
          </Text>
        </View>
      )}
    </View>
  );
}

const style = {
  beachName: 'text-xl font-bold',
  keyInfo: 'text-xl',
  temperatures: 'font-bold',
  tides: 'text-blue-300',
  waterQuality: 'text-red-600',
};
