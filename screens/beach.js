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
  function starRating(num) {
    if (num === 4) return '⭐⭐⭐⭐';
    if (num === 3) return '⭐⭐⭐★';
    if (num === 2) return '⭐⭐★★';
    if (num === 1) return '⭐★★★';
  }
  function rateWaterQuality(num) {
    if (num === 4) return 'Excellent';
    if (num === 3) return 'Good';
    if (num === 2) return 'Sufficent';
    if (num === 1) return 'Poor';
  }
  function pollutionAlert(bool) {
    if (bool === true) return '🚫 Advise against bathing';
    if (bool === false) return '✔️ Safe to swim';
  }
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
            <View>
              <Text style={tailwind(style.keyInfoTextHeader)}>
                Waves{'\n'} 🌊
              </Text>
              <Text style={tailwind(style.keyInfoText)}>
                {swimConditions.waveHeight}
              </Text>
            </View>
            <View>
              <Text style={tailwind(style.keyInfoTextHeader)}>
                Swell{'\n'} {swimConditions.swellDir}
              </Text>
              <Text style={tailwind(style.keyInfoText)}>
                {swimConditions.windSpeed}
              </Text>
            </View>
          </View>

          <View style={tailwind(style.tempContainer)}>
            <Text style={tailwind(style.tempText)}>
              💧 | {swimConditions.waterTemp}
              {'\n'}⛅ | {swimConditions.airTemp}
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
              🏊🏽‍♀️ {rateWaterQuality(waterQuality.classification)} water quality
              {'\n'}
              {starRating(waterQuality.classification)}
              {'\n'}
              Pollution Alert: {pollutionAlert(waterQuality.swimBan)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
  beachName:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300 text-4xl font-bold text-white  text-center',
  keyInfoContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300 flex-row justify-around',
  keyInfoTextHeader: 'text-3xl pb-1 text-white font-bold text-center',
  keyInfoText: 'text-xl text-white font-bold text-center',
  tempContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  tempText: 'font-bold text-white text-lg text-center',
  tideContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  tideText: 'font-bold text-white',
  waterContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  waterText: 'font-bold text-white text-center',
};
