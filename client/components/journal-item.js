import tailwind from 'tailwind-rn';
import React from 'react';
import moment from 'moment';

import { View, Text, TouchableOpacity } from 'react-native';

export function JournalItem({ item, removeEntry }) {
  return (
    <View>
      <View style={tailwind(style.journalContainer)}>
        <Text style={tailwind(style.journalDate)}>
          {moment(item.date, 'DD-MM-YYYY').format('Do MMMM ')}at {item.location}
        </Text>
        <Text style={tailwind(style.journalData)}>
          {item.comment}
          {'\n'}
          Distance: {item.distance}
          {'\n'}
          Exertion: {item.exertion}
        </Text>
        <TouchableOpacity
          style={tailwind(style.delButton)}
          onPress={() => {
            removeEntry(item._id);
          }}
        >
          <Text style={tailwind(style.delButtonText)}>delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = {
  journalContainer:
    'bg-white bg-opacity-20 p-2 m-1 rounded-3xl border border-gray-200 ',
  journalDate: 'text-sm font-bold text-gray-600 text-center',
  journalData: 'text-sm text-gray-600',
  delButton: 'w-14 p-1 mt-16 rounded-3xl self-end absolute',
  delButtonText: 'text-xs text-center text-gray-500',
};
