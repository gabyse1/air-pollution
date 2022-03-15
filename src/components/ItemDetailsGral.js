import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { BsThermometerHalf } from 'react-icons/bs';

const ItemDetailsGral = ({ detailsGral, dt, aqi }) => {
  const [dateTime, setDateTime] = useState('');
  const [aqiColor, setAqiColor] = useState(['green', 'good']);
  useEffect(() => {
    const newDate = new Date(dt);
    setDateTime(newDate.toUTCString());
    switch (aqi) {
      case 1: { setAqiColor(['green', 'good']); break; }
      case 2: { setAqiColor(['yellow', 'fair']); break; }
      case 3: { setAqiColor(['orange', 'moderate']); break; }
      case 4: { setAqiColor(['red', 'poor']); break; }
      case 5: { setAqiColor(['purble', 'very poor']); break; }
      default: break;
    }
  }, []);

  return (
    <section className="page__section section__main">
      <div className="gral__info">
        <h2>{detailsGral.name}</h2>
        <p>{`${detailsGral.state}, ${detailsGral.country}`}</p>
        <p>{`Lat. ${detailsGral.lat}, Lon. ${detailsGral.lon}`}</p>
        <p>{dateTime}</p>
      </div>
      <div className="gral__graph">
        {aqiColor}
        <BsThermometerHalf />
      </div>
    </section>
  );
};

ItemDetailsGral.propTypes = {
  detailsGral: PropTypes.shape({
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
  dt: PropTypes.number.isRequired,
  aqi: PropTypes.number.isRequired,
};

export default ItemDetailsGral;
