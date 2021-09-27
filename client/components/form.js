import tailwind from 'tailwind-rn';
import React, { useState } from 'react';
import moment from 'moment';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export function Form({ modalVisible, setModalVisible, submitEntry }) {
  const today = moment().format('DD-MM-YYYY');

  const [date, setDate] = useState(today);
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');
  const [distance, setDistance] = useState('');
  const [exertion, setExertion] = useState('');

  function handleSubmit() {
    if (
      date.length < 1 ||
      location.length < 1 ||
      comment.length < 1 ||
      distance.length < 1 ||
      exertion.length < 1
    ) {
      return;
    } else {
      const entry = {
        date,
        location,
        comment,
        distance,
        exertion,
      };
      submitEntry(entry);
    }
  }
  return (
    <View>
      <View style={tailwind(style.inputField)}>
        <TextInput
          style={tailwind(style.inputText)}
          onChangeText={(t) => setDate(t)}
          defaultValue={today}
        />
      </View>
      <View style={tailwind(style.inputField)}>
        <TextInput
          style={tailwind(style.inputText)}
          placeholder='Enter location'
          onChangeText={(t) => setLocation(t)}
          defaultValue={location}
        />
      </View>
      <View style={tailwind(style.inputField)}>
        <TextInput
          style={tailwind(style.inputText)}
          placeholder='Describe your swim'
          onChangeText={(t) => setComment(t)}
          defaultValue={comment}
        />
      </View>
      <View style={tailwind(style.inputField)}>
        <TextInput
          style={tailwind(style.inputText)}
          placeholder='Set distance'
          onChangeText={(t) => setDistance(t)}
          defaultValue={distance}
        />
      </View>
      <View style={tailwind(style.inputField)}>
        <TextInput
          style={tailwind(style.inputText)}
          placeholder='Exertion'
          onChangeText={(t) => setExertion(t)}
          defaultValue={exertion}
        />
      </View>
      <TouchableOpacity
        style={[tailwind(style.modalButton), { backgroundColor: '#05545C' }]}
        onPress={() => {
          handleSubmit();
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={tailwind(style.modalButtonText)}>add</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[tailwind(style.modalButton), { backgroundColor: '#05545C' }]}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={tailwind(style.modalButtonText)}>cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = {
  inputField: 'bg-gray-100 w-72 p-2 m-1 ml-3 mr-3',
  inputText: '',
  modalButton: 'w-20 p-2 m-1 rounded-3xl self-center',
  modalButtonText: 'text-sm text-center text-white',
};
