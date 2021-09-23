import moment from 'moment';

//time
const start = Math.floor(Date.now() / 1000) + 3600;
const end = start;

//date
const today = moment().format('YYYY-MM-DD');
const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');

const params =
  'waterTemperature,waveHeight,airTemperature,swellDirection,windSpeed';

const apiKey = 'test';

export function marineData(lat, long) {
  return fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}&start=${start}&end=${end}`,
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
