import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text } from 'react-native';
import { BEACHES } from '../data/beach-data';
import MapView from 'react-native-map-clustering';
import { Marker, Callout } from 'react-native-maps';

export function Explore({ navigation, updateBeach }) {
  const INITIAL_REGION = {
    latitude: 51.38770455,
    longitude: 1.37575226,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <View style={tailwind(style.body)}>
      <MapView
        style={{ flex: 1 }}
        minPoints={3}
        clusterColor={'#29b6f6'}
        initialRegion={INITIAL_REGION}
      >
        {BEACHES.map((beach) => (
          <Marker
            key={beach.EUBWID}
            coordinate={{ latitude: beach.lat, longitude: beach.long }}
            pinColor={beach.swimBan === true ? '#ef5350' : '#29b6f6'}
          >
            <Callout
              style={tailwind(style.callout)}
              onPress={() => {
                updateBeach(beach);
                navigation.navigate('Beach');
              }}
            >
              <Text style={tailwind(style.calloutBeach)}>
                {beach.label}
                {'\n'}
                <Text style={tailwind(style.calloutSwim)}>
                  {beach.swimBan === true
                    ? '🚫 Advise against bathing'
                    : '✔️ Safe to swim'}
                </Text>
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
  calloutBeach: 'font-bold text-center',
  calloutSwim: 'font-thin text-center',
};
