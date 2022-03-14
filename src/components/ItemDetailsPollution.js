import { PropTypes } from 'prop-types';

const ItemDetailsPollution = ({ detailsPollution }) => (
  <section className="page__section">
    <div className="components__container">
      <div className="component__item">
        <div className="item__quantity">
          <span>CO</span>
          <span>{`${detailsPollution.components.co} μg/m3`}</span>
        </div>
        <div className="item__color-aqi">
          <div className="aqi__circle">
            {detailsPollution.components.co}
          </div>
        </div>
      </div>
    </div>
  </section>
);

ItemDetailsPollution.propTypes = {
  detailsPollution: PropTypes.shape({
    main: PropTypes.objectOf(PropTypes.number).isRequired,
    components: PropTypes.objectOf(PropTypes.number).isRequired,
    dt: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetailsPollution;
