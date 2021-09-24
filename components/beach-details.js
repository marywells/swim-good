import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text } from 'react-native';
import * as interpret from './interpreters';

export function BeachDetails({
  beachName,
  swimConditions,
  tideTimes,
  waterQuality,
  favourites,
}) {
  function isFave(name) {
    for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].label === name) return true;
    }
  }

  return (
    <View>
      {swimConditions.waveHeight && (
        <View style={tailwind(style.body)}>
          <Text style={tailwind(style.beachName)}>
            {beachName.toLowerCase()}
          </Text>
          {isFave(beachName) ? <Text>remove</Text> : <Text>add</Text>}

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
            <View>
              <Text style={tailwind(style.tideText)}>
                High Tides{'\n'}
                {tideTimes.highTides}
              </Text>
            </View>
            <View>
              <Text style={tailwind(style.tideText)}>
                Low Tides{'\n'}
                {tideTimes.lowTides}
              </Text>
            </View>
          </View>

          <View style={tailwind(style.waterContainer)}>
            <Text style={tailwind(style.waterText)}>
              🏊🏽‍♀️ {interpret.rateWaterQuality(waterQuality.classification)} water
              quality
              {'\n'}
              {'\n'}
              {interpret.starRating(waterQuality.classification)}
              {'\n'}
              {'\n'}
              Pollution Alert: {interpret.pollutionAlert(waterQuality.swimBan)}
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
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300 flex-row justify-around',
  tideText: 'font-bold text-white text-center',
  waterContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  waterText: 'font-bold text-white text-center',
};
