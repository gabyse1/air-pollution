import pollutionReducer from '../redux/pollution/pollutionReducer';

describe('Validate pollution reducers', () => {
  const GET_POLLUTION_INFO_FROM_API = 'pollutionStore/pollution/GET_POLLUTION_INFO_FROM_API';

  const defaultData = {
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
  };

  it('When there is neither an state nor an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(pollutionReducer(undefined, {})).toEqual([]);
  });

  it('When dispatch action GET_POLLUTION_INFO_FROM_API, the reducer should update the empty initial state with the API data.', () => {
    const initialState = [];
    const apiData = [defaultData];
    const action = { type: GET_POLLUTION_INFO_FROM_API, payload: apiData };

    expect(pollutionReducer(initialState, action)).toEqual(apiData);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = [defaultData];
    expect(pollutionReducer(previousState, {})).toEqual(previousState);
  });
});
