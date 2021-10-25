import tailwind from 'tailwind-rn';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import * as interpret from './interpreters';
import LottieView from 'lottie-react-native';
import moment from 'moment';

export function BeachDetails({
  beach,
  swimConditions,
  tideTimes,
  isFavourite,
  favourites,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { label, classification, swimBan } = beach;
  const today = moment().format('DD MMMM');

  return (
    <View>
      <View style={tailwind(style.beachName)}>
        <Text
          style={{
            fontFamily: 'Archivo_900Black',
            color: 'white',
            fontSize: 45,
            textAlign: 'center',
          }}
        >
          {label}
        </Text>
      </View>

      <View style={tailwind(style.keyInfoContainer)}>
        <Text style={tailwind(style.date)}>Today, {today}</Text>
        <View style={tailwind(style.keyInfoInner)}>
          <View>
            <Text
              style={{
                fontFamily: 'Archivo_900Black',
                color: '#f5f5f5',
                fontSize: 26,
                textAlign: 'center',
                paddingBottom: 12,
              }}
            >
              Waves
            </Text>
            <LottieView
              source={require('../assets/wave.json')}
              autoPlay={true}
              loop={true}
            />
            <Text style={tailwind(style.keyInfoTextWave)}>
              {swimConditions.waveHeight}
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: 'Archivo_900Black',
                color: '#f5f5f5',
                fontSize: 26,
                textAlign: 'center',
              }}
            >
              Swell
            </Text>
            <Text style={tailwind(style.keyInfoTextIcon)}>
              {swimConditions.swellDir}
            </Text>
            <Text style={tailwind(style.keyInfoText)}>
              {swimConditions.windSpeed}
            </Text>
          </View>
        </View>
        <View style={tailwind(style.tempContainer)}>
          <View>
            <LottieView
              source={require('../assets/water.json')}
              autoPlay={true}
              loop={true}
            />
            <Text style={tailwind(style.tempText)}>
              | {swimConditions.waterTemp}
            </Text>
          </View>
          <View>
            <LottieView
              source={require('../assets/sun.json')}
              autoPlay={true}
              loop={true}
            />
            <Text style={tailwind(style.tempText)}>
              | {swimConditions.airTemp}
            </Text>
          </View>
        </View>
      </View>

      <View style={tailwind(style.lowerContainer)}>
        <View>
          <Text style={tailwind(style.tideTextHeader)}>High Tides</Text>
          <Text style={tailwind(style.tideText)}>{tideTimes.highTides}</Text>
        </View>
        <View>
          <Text style={tailwind(style.tideTextHeader)}>Low Tides</Text>
          <Text style={tailwind(style.tideText)}>{tideTimes.lowTides}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={tailwind(style.lowerContainer)}
      >
        <View>
          <Text style={tailwind(style.tideTextHeader)}>
            {interpret.rateWaterQuality(classification)} water quality
          </Text>
          <Text style={tailwind(style.waterText)}>
            {interpret.starRating(classification)}
          </Text>
        </View>
        <View>
          <Text style={tailwind(style.tideTextHeader)}>Pollution alert</Text>
          <Text style={tailwind(style.waterText)}>
            {interpret.pollutionAlert(swimBan)}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={tailwind(style.centerView)}>
          <View style={tailwind(style.modalView)}>
            <Text style={tailwind(style.modalTitle)}>Water quality</Text>
            <Text>
              Classification calculated annually by the UK Environment Agency,
              based on samples from the previous four years. Classifications
              from best to worst, are "excellent", "good", "sufficient" and
              "poor".{'\n'}
            </Text>
            <Text style={tailwind(style.modalTitle)}>Pollution alert</Text>
            <Text>
              Pollution alerts are based on the effects of tide, wind and
              seasonality on water quality. These factors affect the levels of
              bacteria that get washed into the sea. When these factors combine
              to make short term pollution, a pollution alert is issued.{'\n'}
            </Text>
            <Text style={[tailwind(style.modalTitle), { color: '#05545C' }]}>
              https://environment.data.gov.uk/{'\n'}
            </Text>
            <TouchableOpacity
              style={[
                tailwind(style.modalButton),
                { backgroundColor: '#05545C' },
              ]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={tailwind(style.modalButtonText)}>close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {interpret.isFave(label, favourites) ? (
        <View
          style={[
            tailwind(style.addRemoveContainer),
            { backgroundColor: '#05545C' },
          ]}
        >
          <TouchableOpacity onPress={() => isFavourite(true)}>
            <Text style={tailwind(style.removeText)}>
              remove from favourites
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            tailwind(style.addRemoveContainer),
            { backgroundColor: '#357787' },
          ]}
        >
          <TouchableOpacity onPress={() => isFavourite(false)}>
            <Text style={tailwind(style.addText)}>add to favourites</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const style = {
  beachName: 'pt-1 m-1',
  date: 'text-gray-100 pb-3 text-lg text-center',
  keyInfoContainer:
    'bg-white bg-opacity-20 p-4 m-2 ml-3 mr-3 rounded-xl border border-gray-300',
  keyInfoInner: 'flex-row justify-around',
  keyInfoTextIcon: 'text-4xl pt-2 text-gray-100 font-bold text-center',
  keyInfoText: 'text-2xl pt-3 text-gray-100 font-bold text-center',
  keyInfoTextWave: 'pt-12 text-2xl text-gray-100 font-bold text-center',
  tempContainer: 'pr-10 pt-5',
  tempText: 'font-bold text-gray-100 text-xl text-center pl-20',
  lowerContainer:
    'bg-white bg-opacity-40 p-4 m-2 ml-3 mr-3 rounded-xl border border-gray-300 flex-row justify-around',
  tideTextHeader: 'text-gray-600 font-bold text-sm text-center',
  tideText: 'text-gray-600 text-xl text-center',
  waterText: 'text-gray-600 text-lg text-center',
  addRemoveContainer: 'p-3 m-3 ml-24 mr-24 rounded-3xl',
  addText: 'text-lg text-center text-white',
  removeText: 'text-lg text-center text-white',
  modalView: 'm-4 p-10 bg-white rounded-3xl items-center',
  centerView: 'flex-1 justify-center',
  modalTitle: 'font-bold',
  modalButton: 'w-20 p-2 m-1 rounded-2xl self-center',
  modalButtonText: 'text-sm text-center text-white',
};
