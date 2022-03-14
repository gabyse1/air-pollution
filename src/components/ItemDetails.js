// import { PropTypes } from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetailsGral from './ItemDetailsGral';
import ItemDetailsInfo from './ItemDetailsPollution';

const ItemDetails = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    console.log(state);
    setLocationId(name);
  });

  const detailsGral = {
    name: 'Lima',
    lat: -12.0621065,
    lon: -77.0365256,
    country: 'PE',
    state: 'Lima',
  };

  const detailsPollution = {
    main: {
      aqi: 2,
    },
    components: {
      co: 273.71,
      no: 0,
      no2: 0.56,
      o3: 113.01,
      so2: 1.88,
      pm2_5: 10.66,
      pm10: 10.67,
      nh3: 0.24,
    },
    dt: 1647280800,
  };

  return (
    <>
      <h1>{locationId}</h1>
      <ItemDetailsGral detailsGral={detailsGral} dt={detailsPollution.dt} />
      <ItemDetailsInfo detailsPollution={detailsPollution} />
    </>
  );
};

// ItemDetails.defaultProps = {
//   state: { lat: 0, lon: 0 },
// };

// ItemDetails.propTypes = {
//   props: PropTypes.shape({
//     state: PropTypes.objectOf(PropTypes.number),
//   }).isRequired,
// };

export default ItemDetails;
