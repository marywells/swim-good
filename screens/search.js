import tailwind from 'tailwind-rn';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SearchBox } from '../components/search-box';

export function Search({ navigation, updateBeach }) {
  return (
    <View>
      <SearchBox navigation={navigation} updateBeach={updateBeach} />
    </View>
  );
}
