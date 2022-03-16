import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ItemDetailsGral from './ItemDetailsGral';
import Navbar from './Navbar';
import ItemDetailsInfo from './ItemDetailsPollution';
import { getPollutionInfoAPI } from '../redux/pollution/pollutionReducer';

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const city = useSelector((state) => state.citiesReducer);
  const detailsPollution = useSelector((state) => state.pollutionReducer);
  useEffect(() => {
    const myCity = city.filter((ele) => ele.id === state);
    dispatch(getPollutionInfoAPI(myCity[0].lat, myCity[0].lon));
  }, []);

  return (
    detailsPollution.map((obj) => (
      <main key={state}>
        <Navbar />
        <ItemDetailsGral detailsGral={city[0]} dt={obj.list[0].dt} aqi={obj.list[0].main.aqi} />
        <ItemDetailsInfo detailsPollution={obj} />
      </main>
    ))
  );
};

export default ItemDetails;
