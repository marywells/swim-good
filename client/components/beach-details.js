import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as interpret from './interpreters';
import moment from 'moment';

export function BeachDetails({
  beach,
  swimConditions,
  tideTimes,
  isFavourite,
  favourites,
}) {
  const { label, classification, swimBan } = beach;
  const today = moment().format('DD MMMM');

  return (
    <View>
      <Text style={tailwind(style.beachName)}>{label}</Text>

      <View style={tailwind(style.keyInfoContainer)}>
        <Text style={tailwind(style.date)}>Today, {today}</Text>
        <View style={tailwind(style.keyInfoInner)}>
          <View>
            <Text style={tailwind(style.keyInfoTextHeader)}>Waves</Text>
            <Text style={tailwind(style.keyInfoTextIcon)}>🌊</Text>
            <Text style={tailwind(style.keyInfoText)}>
              {swimConditions.waveHeight}
            </Text>
          </View>

          <View>
            <Text style={tailwind(style.keyInfoTextHeader)}>Swell</Text>
            <Text style={tailwind(style.keyInfoTextIcon)}>
              {swimConditions.swellDir}
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
      </View>

      <View style={tailwind(style.tideContainer)}>
        <View>
          <Text style={tailwind(style.tideTextHeader)}>High Tides</Text>
          <Text style={tailwind(style.tideText)}>{tideTimes.highTides}</Text>
        </View>
        <View>
          <Text style={tailwind(style.tideTextHeader)}>Low Tides</Text>
          <Text style={tailwind(style.tideText)}>{tideTimes.lowTides}</Text>
        </View>
      </View>
      <View style={tailwind(style.waterContainer)}>
        <Text style={tailwind(style.waterText)}>
          🏊🏽‍♀️ {interpret.rateWaterQuality(classification)} water quality
          {'\n'}
          {interpret.starRating(classification)}
          {'\n'}
          Pollution alert: {interpret.pollutionAlert(swimBan)}
        </Text>
      </View>
      {interpret.isFave(label, favourites) ? (
        <View
          style={[
            tailwind(style.addRemoveContainer),
            { backgroundColor: '#05545C' },
          ]}
        >
          <TouchableOpacity onPress={() => isFavourite(true)}>
            <Text style={tailwind(style.removeText)}>
              remove from favourites
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            tailwind(style.addRemoveContainer),
            { backgroundColor: '#05545C' },
          ]}
        >
          <TouchableOpacity onPress={() => isFavourite(false)}>
            <Text style={tailwind(style.addText)}>add to favourites</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const style = {
  body: '',
  beachName:
    'p-1 pt-5 m-3 rounded-xl text-4xl font-bold text-white text-center',
  date: 'text-gray-100 pb-3 text-sm text-center',
  keyInfoContainer:
    'bg-white bg-opacity-20 p-4 m-3 rounded-xl border border-gray-300',
  keyInfoInner: 'flex-row justify-around',
  keyInfoTextHeader: 'text-3xl  text-gray-100 text-center',
  keyInfoTextIcon: 'text-4xl p-2 text-gray-100 font-bold text-center',
  keyInfoText: 'text-2xl text-gray-100 font-bold text-center',
  tempContainer: 'p-3 pt-5',
  tempText: 'font-bold text-gray-100 text-lg text-center',
  tideContainer:
    'bg-white bg-opacity-40 p-2 m-2 rounded-xl border border-gray-300 flex-row justify-around',
  tideTextHeader: 'text-gray-600 font-bold text-sm text-center',
  tideText: 'text-gray-600 text-xl text-center',
  waterContainer:
    'bg-white bg-opacity-40 p-1 m-2 rounded-xl border border-gray-300',
  waterText: 'text-gray-600 text-lg text-center',
  addRemoveContainer: 'p-3 m-3 ml-20 mr-20 rounded-3xl',
  addText: 'text-lg text-center text-white',
  removeText: 'text-lg text-center text-white',
};
