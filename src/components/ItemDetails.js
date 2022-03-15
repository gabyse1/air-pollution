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
  const detailsPollution = useSelector((state) => state.pollutionReducer);
  useEffect(() => {
    dispatch(getPollutionInfoAPI(state.lat, state.lon));
  }, []);

  return (
    detailsPollution.map((obj) => (
      <main key={`${obj.coord.lat},${obj.coord.lon}`}>
        <Navbar />
        <ItemDetailsGral detailsGral={state} dt={obj.list[0].dt} aqi={obj.list[0].main.aqi} />
        <ItemDetailsInfo detailsPollution={obj} />
      </main>
    ))
  );
};

export default ItemDetails;
