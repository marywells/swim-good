import tailwind from 'tailwind-rn';
import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as interpret from './interpreters';

export function BeachDetails({
  beach,
  swimConditions,
  tideTimes,
  handleFavourite,
  favourites,
}) {
  const { label, classification, swimBan } = beach;
  return (
    <View>
      {swimConditions.waveHeight && (
        <View style={tailwind(style.body)}>
          <View style={tailwind(style.favourites)}>
            <Pressable onPress={() => handleFavourite()}>
              {interpret.isFave(label, favourites) ? (
                <Text style={tailwind(style.addRemove)}>➖</Text>
              ) : (
                <Text style={tailwind(style.addRemove)}>➕</Text>
              )}
            </Pressable>
          </View>
          <Text style={tailwind(style.beachName)}>{label.toLowerCase()}</Text>

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
              🏊🏽‍♀️ {interpret.rateWaterQuality(classification)} water quality
              {'\n'}
              {'\n'}
              {interpret.starRating(classification)}
              {'\n'}
              {'\n'}
              Pollution Alert: {interpret.pollutionAlert(swimBan)}
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
  addRemove: 'justify-center absolute top-8 right-6 text-lg',
};
