import tailwind from 'tailwind-rn';
import React from 'react';
import moment from 'moment';

import { View, Text, TouchableOpacity } from 'react-native';

export function JournalItem({ item, removeEntry }) {
  return (
    <View>
      <View style={tailwind(style.journalOuter)}>
        <View style={tailwind(style.journalContainer)}>
          <Text style={tailwind(style.journalDate)}>
            {moment(item.date, 'DD-MM-YYYY').format('DD MMM ')} {'\n'}
            {item.location}
          </Text>
          <Text style={tailwind(style.journalData)}>
            Distance
            {'\n'}
            <Text style={tailwind(style.journalDataBold)}>{item.distance}</Text>
          </Text>
          <Text style={tailwind(style.journalData)}>
            Duration{'\n'}
            <Text style={tailwind(style.journalDataBold)}>{item.duration}</Text>
          </Text>
          <Text style={tailwind(style.journalData)}>
            Exertion{'\n'}
            <Text style={tailwind(style.journalDataBold)}>
              {item.exertion}%
            </Text>
          </Text>
        </View>
        <View>
          <Text style={tailwind(style.journalComment)}> {item.comment}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={tailwind(style.delButton)}
        onPress={() => {
          removeEntry(item._id);
        }}
      >
        <Text style={tailwind(style.delButtonText)}>delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = {
  journalOuter:
    'bg-white bg-opacity-20 p-2 m-1 rounded-2xl border border-gray-200 ',
  journalContainer: 'flex-row justify-between',
  journalDate: 'text-sm font-bold text-gray-600',
  journalData: 'text-xs text-gray-600 text-center',
  journalDataBold: 'text-2xl text-gray-600 font-bold text-center',
  journalComment: 'text-xs text-gray-600',
  delButton: 'w-14 p-1 m-14 rounded-3xl self-end absolute',
  delButtonText: 'text-xs text-center text-gray-500',
};
