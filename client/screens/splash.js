import tailwind from 'tailwind-rn';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

export function Splash() {
  return (
    <View style={tailwind(style.body)}>
      <LottieView
        source={require('../assets/drop-lottie.json')}
        autoPlay={true}
        loop={false}
      />
      <View style={tailwind(style.logo)}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/swim-good.png')}
        />
      </View>
    </View>
  );
}

const style = {
  body: 'h-full items-center justify-end',
  logo: 'pb-24',
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 280,
    height: 50,
  },
});
