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
        <View style={tailwind(style.body)}>
          <Text style={tailwind(style.beachName)}>
            {beachName.toLowerCase()}
          </Text>
          <View style={tailwind(style.keyInfoContainer)}>
            <Text style={tailwind(style.keyInfoText)}>
              Waves: {swimConditions.waveHeight}
              {'\n'}
              Swell {swimConditions.swellDir}
              {'\n'}
              Speed: {swimConditions.windSpeed}
            </Text>
          </View>
          <View style={tailwind(style.tempContainer)}>
            <Text style={tailwind(style.tempText)}>
              Water: {swimConditions.waterTemp}
              {'\n'}
              Air: {swimConditions.airTemp}
            </Text>
          </View>
          <View style={tailwind(style.tideContainer)}>
            <Text style={tailwind(style.tideText)}>
              High Tides: {tideTimes.highTides}
              {'\n'}
              Low Tides: {tideTimes.lowTides}
            </Text>
          </View>
          <View style={tailwind(style.waterContainer)}>
            <Text style={tailwind(style.waterText)}>
              Water Quality: {waterQuality.classification} out of 5 stars{'\n'}
              Swim Ban? {waterQuality.swimBan.toString()}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const style = {
  body: 'bg-blue-600 h-full',
  beachName:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300 text-4xl font-bold text-white ',
  keyInfoContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  keyInfoText: 'text-xl text-white',
  tempContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  tempText: 'font-bold text-white',
  tideContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  tideText: 'font-bold text-blue-300',
  waterContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  waterText: 'font-bold text-blue-300',
};
