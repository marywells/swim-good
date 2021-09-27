import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Text } from 'react-native';

import LottieView from 'lottie-react-native';

export function Splash() {
  return (
    <View style={tailwind(style.body)}>
      <LottieView
        source={require('../assets/drop-lottie.json')}
        autoPlay={true}
        loop={false}
      />
    </View>
  );
}

const style = {
  body: 'h-full',
  favourites: 'justify-center absolute bottom-10 left-10',
  tabText: 'text-2xl ',
  explore: 'justify-center absolute bottom-10 right-10',
};
