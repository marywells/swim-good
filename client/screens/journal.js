import tailwind from 'tailwind-rn';
import React, { useState } from 'react';
import { View, Text, FlatList, Modal, TouchableOpacity } from 'react-native';
import { Form } from '../components/form';
import { JournalItem } from '../components/journal-item';
import { LinearGradient } from 'expo-linear-gradient';

export function Journal({ journalEntries, submitEntry, removeEntry }) {
  const [modalVisible, setModalVisible] = useState(false);

  function renderItem({ item }) {
    return <JournalItem item={item} removeEntry={removeEntry}></JournalItem>;
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
                submitEntry={submitEntry}
              ></Form>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={[tailwind(style.addButton), { backgroundColor: '#05545C' }]}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={tailwind(style.addText)}>add an entry</Text>
        </TouchableOpacity>
        <FlatList
          data={journalEntries}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </LinearGradient>
    </View>
  );
}

const style = {
  body: 'h-full',
  journal: 'pt-5 m-3 rounded-xl text-4xl font-bold text-white text-center',
  modalView: 'm-4 p-2 bg-white rounded-3xl items-center',
  centerView: 'flex-1 justify-center items-center',
  addButton: 'p-3 m-3 ml-20 mr-20 rounded-3xl',
  addText: 'text-lg text-center text-white',
};
