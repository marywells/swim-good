import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function JournalItem({ item }) {
  return (
    <View>
      <View style={tailwind(style.journalContainer)}>
        <Text style={tailwind(style.journalDate)}>
          {item.date} {item.location}
        </Text>
        <Text style={tailwind(style.journalData)}>
          {item.comment}
          {'\n'}
          Distance: {item.distance}
          {'\n'}
          Exertion: {item.exertion}
        </Text>
      </View>
    </View>
  );
}

const style = {
  journalContainer:
    'bg-white bg-opacity-20 p-2 m-2 rounded-3xl border border-gray-200',
  journalDate: 'text-sm font-bold text-gray-600',
  journalData: 'text-sm text-gray-600',
};
