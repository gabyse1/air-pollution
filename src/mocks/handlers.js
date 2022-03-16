import { rest } from 'msw';

const citiesBaseURL = 'http://api.openweathermap.org/geo/1.0/direct?';
const pollutionBaseURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
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
    ctx.json([
      {
        coord: {
          lon: -74.006,
          lat: 40.7127,
        },
        list: [
          {
            main: {
              aqi: 2,
            },
            components: {
              co: 357.15,
              no: 0.08,
              no2: 25.36,
              o3: 34.33,
              so2: 1.65,
              pm2_5: 13.3,
              pm10: 16.67,
              nh3: 0.44,
            },
            dt: 1647428400,
          },
        ],
      },
    ]),
  )),
];

export default handlers;
