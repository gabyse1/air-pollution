const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const apiKey = '382d7d126d3c48b5414498da95bcffaf';

const GET_POLLUTION_INFO_FROM_API = 'pollutionStore/pollution/GET_POLLUTION_INFO_FROM_API';

const initializeState = [];

const getPollutionInfoAPI = (latCity, lonCity) => async (dispatch) => {
  await fetch(`${baseURL}lat=${latCity}&lon=${lonCity}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_POLLUTION_INFO_FROM_API,
        payload: [data],
      });
    });
};

const pollutionReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_POLLUTION_INFO_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getPollutionInfoAPI,
};

export default pollutionReducer;
