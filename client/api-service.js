import { REACT_APP_API_KEY, SERVER_URL } from '@env';
import moment from 'moment';

const apiKey = REACT_APP_API_KEY;
const serverURL = `http://${SERVER_URL}:4000`;

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
  return fetch(`${serverURL}/favourites/get`)
    .then((response) => response.json())
    .then((data) => data);
}

export function getJournalEntries() {
  return fetch(`${serverURL}/journal/get`)
    .then((response) => response.json())
    .then((data) => data);
}

export function addBeach(item) {
  const { EUBWID, label, district, classification, swimBan, lat, long } = item;
  return fetch(`${serverURL}/favourites/post`, {
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

export function addEntry(item) {
  const { date, location, comment, distance, exertion, duration } = item;
  return fetch(`${serverURL}/journal/post`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date,
      location,
      comment,
      distance,
      exertion,
      duration,
    }),
  });
}

export function removeBeach(EUBWID) {
  return fetch(`${serverURL}/favourites/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      EUBWID,
    }),
  });
}

export function deleteEntry(_id) {
  return fetch(`${serverURL}/journal/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id,
    }),
  });
}
