import axios from 'axios';
const API_KEY = '3046ad11a19532df369035b6239c44cb';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city: string) {
  const request: Promise<string> = axios.get(ROOT_URL, {
    params: {
      appid: API_KEY,
      q: city,
    },
  });

  console.log('Request = ', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
