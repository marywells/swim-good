import tailwind from 'tailwind-rn';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { BEACHES } from './testdata';

export function SearchBox({ navigation, updateBeach }) {
  const [state, setState] = useState({
    data: BEACHES,
    searchValue: '',
  });

  function searchFunction(text) {
    const updatedData = BEACHES.filter((item) => {
      const target = `${item.label.toLowerCase()})`;
      const input = text.toLowerCase();
      return target.indexOf(input) > -1;
    });
    setState({ data: updatedData, searchValue: text });
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => {
          updateBeach(item);
          navigation.navigate('Beach');
        }}
      >
        <Text style={tailwind(style.item)}>{item.label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <View style={tailwind(style.searchBarContainer)}>
        <SearchBar
          placeholder='Find a beach'
          lightTheme
          round
          value={state.searchValue}
          containerStyle={{
            backgroundColor: 'transparent',
            border: 'none',
          }}
          inputStyle={{ backgroundColor: 'transparent', color: 'white' }}
          inputContainerStyle={{ backgroundColor: 'transparent' }}
          placeholderTextColor={'#ffffff'}
          onChangeText={(text) => searchFunction(text)}
        />
      </View>

      {state.searchValue.length > 2 && (
        <FlatList
          data={state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.EUBWID}
        />
      )}
    </View>
  );
}

const style = {
  searchBarContainer: 'bg-white bg-opacity-20 mt-10 ',
  item: 'text-lg p-3 text-white',
};
