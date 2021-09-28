import tailwind from 'tailwind-rn';
import React from 'react';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

import { View, Text, TouchableOpacity } from 'react-native';

export function JournalItem({ item, removeEntry }) {
  return (
    <View>
      <View style={tailwind(style.journalOuter)}>
        <View style={tailwind(style.journalContainer)}>
          <View style={tailwind(style.dateContainer)}>
            <Text style={tailwind(style.journalDate)}>
              {moment(item.date, 'DD-MM-YYYY').format('DD MMM ')}
            </Text>
            <Text style={tailwind(style.journalLoc)}>{item.location}</Text>
          </View>
          <View>
            <Text style={tailwind(style.journalData)}>Distance</Text>
            <Text style={tailwind(style.journalDataBold)}>{item.distance}</Text>
          </View>
          <View>
            <Text style={tailwind(style.journalData)}>Duration</Text>
            <Text style={tailwind(style.journalDataBold)}>{item.duration}</Text>
          </View>
          <View>
            <Text style={tailwind(style.journalData)}>Exertion</Text>
            <Text style={tailwind(style.journalDataBold)}>
              {item.exertion}%
            </Text>
          </View>
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
        <Text style={tailwind(style.delButtonText)}>
          <Ionicons name={'remove-circle-outline'} size={22} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = {
  journalOuter:
    'bg-white bg-opacity-20 p-2 m-1 rounded-2xl border border-gray-200 ',
  journalContainer: 'pl-1 pr-3 flex-row justify-between',
  dateContainer: 'w-20',
  journalDate: 'text-sm text-gray-600',
  journalLoc: 'text-lg font-bold text-gray-700',
  journalData: 'text-xs text-gray-600 text-center',
  journalDataBold: 'text-3xl text-gray-700 font-bold text-center',
  journalComment: 'text-sm text-gray-600',
  delButton: ' p-2 m-14 rounded-3xl self-end absolute',
  delButtonText: ' text-center text-gray-600',
};
