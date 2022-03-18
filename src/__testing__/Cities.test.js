import citiesReducer from '../redux/cities/citiesReducer';

describe('Validate cities reducers', () => {
  const GET_SEARCHED_CITIES_FROM_API = 'citiesStore/cities/GET_SEARCHED_CITIES_FROM_API';

  const defaultData = {
    name: 'New York',
    lat: 40.7127281,
    lon: -74.0060152,
    country: 'US',
    state: 'New York',
  };

  it('When there is neither an state nor an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(citiesReducer(undefined, {})).toEqual([]);
  });

  it('When dispatch action GET_SEARCHED_CITIES_FROM_API, the reducer should update the empty initial state with the API data.', () => {
    const initialState = [];
    const apiData = [defaultData];
    const action = { type: GET_SEARCHED_CITIES_FROM_API, payload: apiData };

    expect(citiesReducer(initialState, action)).toEqual(apiData);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = [defaultData];
    expect(citiesReducer(previousState, {})).toEqual(previousState);
  });
});
