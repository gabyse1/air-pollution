import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://api.openweathermap.org/geo/1.0/direct?';
const apiKey = '382d7d126d3c48b5414498da95bcffaf';

const GET_SEARCHED_CITIES_FROM_API = 'citiesStore/cities/GET_SEARCHED_CITIES_FROM_API';

const initializeState = [];

const getSearchedCitiesAPI = (nameCity) => async (dispatch) => {
  await fetch(`${baseURL}q=${nameCity}&limit=5&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = data.map((obj) => ({
        id: uuidv4(),
        name: obj.name,
        lat: obj.lat,
        lon: obj.lon,
        country: obj.country,
        state: obj.state,
      }));
      dispatch({
        type: GET_SEARCHED_CITIES_FROM_API,
        payload: newInitializeState,
      });
    });
};

const citiesReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_SEARCHED_CITIES_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getSearchedCitiesAPI,
};

export default citiesReducer;
