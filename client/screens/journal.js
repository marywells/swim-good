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
        <View style={tailwind(style.journal)}>
          <Text
            style={{
              fontFamily: 'Archivo_900Black',
              color: 'white',
              fontSize: 45,
              textAlign: 'center',
            }}
          >
            Journal
          </Text>
        </View>
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
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
  journal: 'pt-1 m-1',
  modalView: 'm-4 p-2 bg-white rounded-3xl items-center',
  centerView: 'flex-1 justify-center items-center',
  addButton: 'p-3 m-1 mb-3 ml-20 mr-20 rounded-3xl',
  addText: 'text-lg text-center text-white',
};
