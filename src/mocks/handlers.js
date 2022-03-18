import { rest } from 'msw';

const citiesBaseURL = 'https://api.openweathermap.org/geo/1.0/direct?';
const pollutionBaseURL = 'https://api.openweathermap.org/data/2.5/air_pollution/forecast?';
const apiKey = '382d7d126d3c48b5414498da95bcffaf';

const handlers = [
  rest.get(`${citiesBaseURL}q=New York&limit=5&appid=${apiKey}`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        name: 'New York',
        lat: 40.7127281,
        lon: -74.0060152,
        country: 'US',
        state: 'New York',
      },
      {
        name: 'New York',
        lat: 55.0252998,
        lon: -1.4869496,
        country: 'GB',
        state: 'England',
      },
      {
        name: 'New York',
        lat: 39.6852874,
        lon: -93.9268836,
        country: 'US',
        state: 'Missouri',
      },
      {
        name: 'New York',
        lat: 7.9631123,
        lon: -11.7636869,
        country: 'SL',
        state: 'Bo District',
      },
      {
        name: 'New York',
        lat: 32.1679321,
        lon: -95.6691277,
        country: 'US',
        state: 'Texas',
      },
    ]),
  )),
  rest.get(`${pollutionBaseURL}lat=40.71&lon=-74.01&appid=${apiKey}`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(
      [
        {
          main: {
            aqi: 3,
          },
          components: {
            co: 447.27,
            no: 10.73,
            no2: 27.76,
            o3: 65.8,
            so2: 8.35,
            pm2_5: 21.28,
            pm10: 28.03,
            nh3: 2.15,
          },
          dt: 1647622800,
        },
        {
          main: {
            aqi: 3,
          },
          components: {
            co: 427.25,
            no: 7.26,
            no2: 26.73,
            o3: 88.69,
            so2: 9.54,
            pm2_5: 23.58,
            pm10: 29.93,
            nh3: 2.22,
          },
          dt: 1647626400,
        },
        {
          main: {
            aqi: 3,
          },
          components: {
            co: 397.21,
            no: 4.64,
            no2: 23.65,
            o3: 110.15,
            so2: 9.18,
            pm2_5: 24,
            pm10: 29.45,
            nh3: 2.03,
          },
          dt: 1647630000,
        },
      ],
    ),
  )),
];

export default handlers;
