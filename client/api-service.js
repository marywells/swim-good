import { REACT_APP_API_KEY } from '@env';
import moment from 'moment';

const apiKey = REACT_APP_API_KEY;
const serverURL = 'http://localhost:4000';

const current = moment().add(1, 'hour').unix();
const today = moment().format('YYYY-MM-DD');
const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');

const params =
  'waterTemperature,waveHeight,airTemperature,swellDirection,windSpeed';

export function marineData(lat, long) {
  return fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}&start=${current}&end=${current}`,
    {
      headers: {
        Authorization: `${apiKey}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
}
export function tidalData(lat, long) {
  return fetch(
    `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${long}&start=${today}&end=${tomorrow}`,
    {
      headers: {
        Authorization: `${apiKey}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
}

export function getFavourites() {
  return fetch(`${serverURL}/get`)
    .then((response) => response.json())
    .then((data) => data);
}

export function addBeach(item) {
  console.log('added');
  const { EUBWID, label, district, classification, swimBan, lat, long } = item;
  console.log(EUBWID);
  return fetch(`${serverURL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      EUBWID,
      label,
      district,
      classification,
      swimBan,
      lat,
      long,
    }),
  });
}

export function removeBeach(ID) {
  //DELETE request
  console.log('removed');
}
