import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text } from 'react-native';

import MapView from 'react-native-maps';

export function Explore({ navigation }) {
  return (
    <View style={tailwind(style.body)}>
      <MapView
        style={{ flex: 1, width: 600, height: 300 }}
        initialRegion={{
          latitude: 51.509865,
          longitude: -0.118092,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 51.494888, longitude: -0.12961 }}
          title={'mary'}
          description={'mary is here'}
        />
      </MapView>
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
};
