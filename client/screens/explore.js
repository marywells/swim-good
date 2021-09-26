import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text } from 'react-native';
import { BEACHES } from '../data/beach-data';
import MapView from 'react-native-map-clustering';
import { Marker, Callout } from 'react-native-maps';

export function Explore({ navigation, updateBeach }) {
  const INITIAL_REGION = {
    latitude: 51.509865,
    longitude: -0.118092,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  return (
    <View style={tailwind(style.body)}>
      <MapView
        style={{ flex: 1 }}
        minPoints={3}
        initialRegion={INITIAL_REGION}
        clusterColor={'navy'}
      >
        {BEACHES.map((beach) => (
          <Marker
            key={beach.EUBWID}
            coordinate={{ latitude: beach.lat, longitude: beach.long }}
            pinColor={beach.swimBan === true ? 'tomato' : 'navy'}
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
  body: 'bg-white h-full',
  calloutBeach: 'font-bold text-center',
  calloutSwim: 'font-thin text-center',
};
