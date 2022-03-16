const baseURL = 'https://api.openweathermap.org/data/2.5/air_pollution?';
const apiKey = '382d7d126d3c48b5414498da95bcffaf';

const GET_POLLUTION_INFO_FROM_API = 'pollutionStore/pollution/GET_POLLUTION_INFO_FROM_API';
const RESET_POLLUTION_STATE = 'pollutionStore/pollution/RESET_POLLUTION_STATE';

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

const resetPollutionState = () => ({ type: RESET_POLLUTION_STATE });

const pollutionReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_POLLUTION_INFO_FROM_API:
      return action.payload;
    case RESET_POLLUTION_STATE:
      return [];
    default:
      return state;
  }
};

export {
  getPollutionInfoAPI,
  resetPollutionState,
};

export default pollutionReducer;
