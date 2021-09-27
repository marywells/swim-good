import tailwind from 'tailwind-rn';
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Form } from '../components/form';
import { JournalItem } from '../components/journal-item';
import { LinearGradient } from 'expo-linear-gradient';

export function Journal({ navigation }) {
  const journalEntries = [
    {
      ID: '1',
      date: '2021-09-27',
      comment: 'Morning swim - leisurely pace',
      location: 'Scarborough',
      distance: '1km',
      exertion: 'Easy',
    },
    {
      ID: '2',
      date: '2021-09-13',
      comment: 'Horrible conditions, freezing cold',
      location: 'Filey',
      distance: '1.5k',
      exertion: 'Tough',
    },
    {
      ID: '3',
      date: '2021-09-12',
      comment: 'Why is it raining so much?',
      location: 'Whitby',
      distance: '800m',
      exertion: 'Easy',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  function renderItem({ item }) {
    return <JournalItem item={item}></JournalItem>;
  }
  return (
    <View>
      <LinearGradient
        colors={['#05545C', 'white']}
        style={tailwind(style.body)}
      >
        <Text style={tailwind(style.journal)}>Journal</Text>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
        >
          <View style={tailwind(style.centerView)}>
            <View style={tailwind(style.modalView)}>
              <Form
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              ></Form>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={[tailwind(style.addButton), { backgroundColor: '#05545C' }]}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={tailwind(style.addText)}>add an entry</Text>
        </TouchableHighlight>
        <FlatList
          data={journalEntries}
          renderItem={renderItem}
          keyExtractor={(item) => item.ID}
        />
      </LinearGradient>
    </View>
  );
}

const style = {
  body: 'h-full',
  journal: 'p-1 pt-5 m-3 rounded-xl text-4xl font-bold text-white text-center',
  modalView: 'm-4 p-2 bg-white rounded-3xl items-center',
  centerView: 'flex-1 justify-center items-center',
  addButton: 'p-3 m-3 ml-20 mr-20 rounded-3xl',
  addText: 'text-lg text-center text-white',
};
