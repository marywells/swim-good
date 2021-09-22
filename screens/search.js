import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function Search({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Beach');
        }}
      >
        <Text>Search Bar Here</Text>
      </TouchableOpacity>
    </View>
  );
}
