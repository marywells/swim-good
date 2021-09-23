import React from 'react';
import { View, Text } from 'react-native';

export function Beach({ beachName, swimConditions, tideTimes, waterQuality }) {
  return (
    <View>
      <Text>BEACH: {beachName}</Text>
      <Text>Wave Height: {swimConditions.waveHeight}</Text>
      <Text>Swell Direction: {swimConditions.swellDir}</Text>
      <Text>Wind Speed: {swimConditions.windSpeed}</Text>
      <Text>Water Temp: {swimConditions.waterTemp}</Text>
      <Text>Air Temp: {swimConditions.airTemp}</Text>
      <Text>High Tides: {tideTimes.highTides}</Text>
      <Text>Low Tides: {tideTimes.lowTides}</Text>
      <Text>Water Quality: {waterQuality.classification} out of 5</Text>
      <Text>Swim Ban? {waterQuality.swimBan.toString()}</Text>
    </View>
  );
}
