const baseURL = 'https://api.openweathermap.org/data/2.5/air_pollution/forecast?';
const apiKey = '382d7d126d3c48b5414498da95bcffaf';

const GET_FORECAST_INFO_FROM_API = 'forecastStore/forecast/GET_FORECAST_INFO_FROM_API';
const RESET_FORECAST_STATE = 'forecastStore/forecast/RESET_FORECAST_STATE';

const initializeState = [];

const getForecastInfoAPI = (latCity, lonCity) => async (dispatch) => {
  await fetch(`${baseURL}lat=${latCity}&lon=${lonCity}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_FORECAST_INFO_FROM_API,
        payload: data.list,
      });
    });
};

const resetForecastState = () => ({ type: RESET_FORECAST_STATE });

const forecastReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_FORECAST_INFO_FROM_API:
      return action.payload;
    case RESET_FORECAST_STATE:
      return [];
    default:
      return state;
  }
};

export {
  getForecastInfoAPI,
  resetForecastState,
};

export default forecastReducer;
