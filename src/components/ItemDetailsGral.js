import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { BsThermometerHalf } from 'react-icons/bs';

const ItemDetailsGral = ({ detailsGral, dt }) => {
  const [dateTime, setDateTime] = useState('');
  useEffect(() => {
    const newDate = new Date(dt);
    setDateTime(newDate.toUTCString());
  });

  return (
    <section className="page__section section__main">
      <div className="gral__info">
        <h2>{detailsGral.name}</h2>
        <p>{`${detailsGral.state}, ${detailsGral.country}`}</p>
        <p>{`Lat. ${detailsGral.lat}, Lon. ${detailsGral.lon}`}</p>
        <p>{dateTime}</p>
      </div>
      <div className="gral__graph">
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
};

export default ItemDetailsGral;
