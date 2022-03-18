import forecastReducer from '../redux/forecast/forecastReducer';

describe('Validate forecast reducers', () => {
  const GET_FORECAST_INFO_FROM_API = 'forecastStore/forecast/GET_FORECAST_INFO_FROM_API';

  const defaultData = [
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
  ];

  it('When there is neither an state nor an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(forecastReducer(undefined, {})).toEqual([]);
  });

  it('When dispatch action GET_FORECAST_INFO_FROM_API, the reducer should update the empty initial state with the API data.', () => {
    const initialState = [];
    const apiData = defaultData;
    const action = { type: GET_FORECAST_INFO_FROM_API, payload: apiData };

    expect(forecastReducer(initialState, action)).toEqual(apiData);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = defaultData;
    expect(forecastReducer(previousState, {})).toEqual(previousState);
  });
});
