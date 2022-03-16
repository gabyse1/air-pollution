import { PropTypes } from 'prop-types';

const ItemDetailsPollution = ({ detailsPollution }) => {
  const chArr = Object.entries(detailsPollution.list[0].components);

  const componentName = (ele) => {
    switch (ele) {
      case 'co': return 'Carbon monoxide';
      case 'no': return 'Nitrogen monoxide';
      case 'no2': return 'Nitrogen dioxide';
      case 'o3': return 'Ozone';
      case 'so2': return 'Sulfur dioxide';
      case 'pm2_5': return 'Fine particles matter';
      case 'pm10': return 'Coarse particulate matter';
      case 'nh3': return 'Ammonia';
      default: return 'Searching name';
    }
  };

  return (
    <section className="page__section section__detail-components">
      <div className="components__container">
        {
          chArr.map((obj) => (
            <div className="component__item" key={`${obj[0]}-${obj[1]}`}>
              <div className="item__details">
                <span className="details__name">{obj[0]}</span>
                <p>{componentName(obj[0])}</p>
              </div>
              <div className="item__measure">
                <p className="measure__amount">
                  {`${obj[1]} `}
                  <span className="measure__unit">μg/m3</span>
                </p>
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
