import tailwind from 'tailwind-rn';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { BEACHES } from './testdata';

export function SearchBox({ navigation }) {
  const data = BEACHES;
  const [query, setQuery] = useState('');
  const [beaches, setBeaches] = useState(BEACHES);

  //filter search list
  function filterBeachNames(beach) {
    let search = query.toLowerCase();
    if (
      beach.label.toLowerCase().startsWith(search) ||
      beach.district.toLowerCase().startsWith(search)
    ) {
      return `${beach.label}, ${beach.district}`;
    } else {
      beaches.splice(beaches.indexOf(beach), 1);
    }
  }

  //update query state with user input
  function updateQuery(input) {
    setQuery(input);
    setBeaches(data.slice());
  }

  function selectedBeach(item) {
    //update App state
    //call API Service to get beach data
    console.log(item);
    navigation.navigate('Beach');
  }

  return (
    <View>
      <SearchBar
        onChangeText={updateQuery}
        value={query}
        placeholder='Find a beach...'
      />

      {query.length > 0 && (
        <FlatList
          data={beaches}
          keyExtractor={(i) => i.EUBWID}
          extraData={query}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                selectedBeach(item);
              }}
            >
              <Text>{filterBeachNames(item)}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
