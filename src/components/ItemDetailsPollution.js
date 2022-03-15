import { PropTypes } from 'prop-types';

const ItemDetailsPollution = ({ detailsPollution }) => {
  const chArr = Object.entries(detailsPollution.list[0].components);

  return (
    <section className="page__section">
      <div className="components__container">
        {
          chArr.map((obj) => (
            <div className="component__item" key={`${obj[0]}-${obj[1]}`}>
              <div className="item__quantity">
                <span>{obj[0]}</span>
                <span>{`${obj[1]} μg/m3`}</span>
              </div>
              <div className="item__color-aqi">
                <div className="aqi__circle">
                  {obj[1]}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

ItemDetailsPollution.propTypes = {
  detailsPollution: PropTypes.shape({
    coord: PropTypes.objectOf(PropTypes.number).isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      main: PropTypes.objectOf(PropTypes.number).isRequired,
      components: PropTypes.objectOf(PropTypes.number).isRequired,
      dt: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

// {
//   "coord": {
//       "lon": 50,
//       "lat": 50
//   },
//   "list": [
//       {
//           "main": {
//               "aqi": 2
//           },
//           "components": {
//               "co": 273.71,
//               "no": 0,
//               "no2": 0.56,
//               "o3": 113.01,
//               "so2": 1.88,
//               "pm2_5": 10.66,
//               "pm10": 10.67,
//               "nh3": 0.24
//           },
//           "dt": 1647280800
//       }
//   ]
// }

export default ItemDetailsPollution;
