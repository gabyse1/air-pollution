import { PropTypes } from 'prop-types';

const ItemDetailsPollution = ({ detailsPollution }) => {
  const chArr = Object.entries(detailsPollution);

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
      <h2 className="section__title">Today&apos;s pollution measurements</h2>
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
  detailsPollution: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ItemDetailsPollution;
