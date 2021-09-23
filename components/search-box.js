import tailwind from 'tailwind-rn';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { BEACHES } from './testdata';

// class ItemList extends React.PureComponent {
//   render() {
//     const { item } = this.props;
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           selectedBeach(item);
//         }}
//       >
//         <Text style={tailwind(style.beachName)}>{item.label}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

export function SearchBox({ navigation, updateBeach }) {
  const [query, setQuery] = useState('');
  let beaches = BEACHES.slice();

  function filterBeachNames(beach) {
    let search = query.toLowerCase();
    if (beach.label.toLowerCase().startsWith(search)) {
      return `${beach.label}`;
    } else {
      beaches.splice(beaches.indexOf(beach), 1);
    }
  }
  //update query state with user input
  function updateQuery(input) {
    setQuery(input);
    beaches = BEACHES.slice();
  }

  //when beach is selected, call ApiService, update state, navigate to beach
  function selectedBeach(item) {
    updateBeach(item);
    navigation.navigate('Beach');
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => {
          selectedBeach(item);
        }}
      >
        <Text style={tailwind(style.beachName)}>{filterBeachNames(item)}</Text>
      </TouchableOpacity>
    );
    //return <ItemList item={item} />;
  }

  return (
    <View>
      <SearchBar
        style={tailwind(style.searchInput)}
        containerStyle={tailwind(style.searchContainer)}
        lightTheme={true}
        onChangeText={updateQuery}
        value={query}
        placeholder='Find a beach...'
      />

      {query.length > 0 && (
        <FlatList
          data={beaches}
          keyExtractor={(i) => i.EUBWID}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const style = {
  searchContainer: 'bg-white',
  searchInput: 'bg-white',
  beachName: 'text-xl p-3',
};
