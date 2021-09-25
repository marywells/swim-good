import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text } from 'react-native';
import { BEACHES } from '../data/beach-data';
import MapView, { Marker, Callout } from 'react-native-maps';

export function Explore({ navigation, updateBeach }) {
  return (
    <View style={tailwind(style.body)}>
      <MapView
        style={{ flex: 1, width: 600, height: 300 }}
        initialRegion={{
          latitude: 51.509865,
          longitude: -0.118092,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}
      >
        {BEACHES.map((beach) => (
          <Marker
            key={beach.EUBWID}
            coordinate={{ latitude: beach.lat, longitude: beach.long }}
            pinColor={beach.swimBan === true ? 'red' : 'blue'}
          >
            <Callout
              onPress={() => {
                updateBeach(beach);
                navigation.navigate('Beach');
              }}
            >
              <Text>
                {beach.label}
                {'\n'}
                {beach.swimBan === true
                  ? '🚫 Advise against bathing'
                  : '✔️ Safe to swim'}
              </Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const style = {
  body: 'bg-blue-400 h-full',
};
