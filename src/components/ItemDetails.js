import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import ItemDetailsGral from './ItemDetailsGral';
import ItemDetailsPollution from './ItemDetailsPollution';
import ItemForecast from './ItemForecast';
import { getForecastInfoAPI, resetForecastState } from '../redux/forecast/forecastReducer';

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const forecast = useSelector((state) => state.forecastReducer);
  useEffect(() => {
    if (state) {
      dispatch(resetForecastState());
      dispatch(getForecastInfoAPI(state.lat, state.lon));
    } else window.location.replace('/home');
  }, []);

  return (
    <main>
      {
        forecast.length > 0 ? (
          <>
            <Navbar />
            <ItemDetailsGral detailsGral={state} dt={forecast[0].dt} aqi={forecast[0].main.aqi} />
            <ItemForecast forecastList={forecast} />
            <ItemDetailsPollution detailsPollution={forecast[0].components} />
          </>
        ) : (
          <div className="loading-message"><h1>Loading..</h1></div>
        )
      }
    </main>
  );
};

export default ItemDetails;
