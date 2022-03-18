import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types';

const ItemForecast = ({ forecastList }) => {
  const fcHour = forecastList.slice(0, 24);

  const getHour = (dt) => {
    const newDate = new Date(dt * 1000);
    return (`${newDate.toLocaleTimeString('en-US',
      {
        hour: 'numeric',
        minute: 'numeric',
      })}`);
  };

  const getDay = (dt) => {
    const newDate = new Date(dt * 1000);
    return (`${newDate.toLocaleString('en-US',
      {
        weekday: 'long',
      })}`);
  };

  const getAqiColor = (indice) => {
    switch (indice) {
      case 1: return 'green';
      case 2: return 'yellow';
      case 3: return 'orangered';
      case 4: return 'red';
      case 5: return 'purple';
      default: return 'yellow';
    }
  };

  const buildForecastByDay = () => {
    const fcDay = [];
    for (let i = 0; i < forecastList.length; i += 24) {
      fcDay.push(forecastList[i]);
    }

    return fcDay.map((ele) => (
      <li key={uuidv4()}>
        <p>{getDay(ele.dt)}</p>
        <div className="aqi-info">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle className={`hour__aqi-circle aqi-index-color-${getAqiColor(ele.main.aqi)}`} cx="50" cy="50" r="50" />
          </svg>
          <p>{ele.main.aqi}</p>
        </div>
      </li>
    ));
  };

  return (
    <section className="page__section section__detail-forecast">
      <ul className="forecast__list">
        {
          fcHour.map((ele) => (
            <li key={uuidv4()}>
              <p>{getHour(ele.dt)}</p>
              <div className="aqi-info">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle className={`hour__aqi-circle aqi-index-color-${getAqiColor(ele.main.aqi)}`} cx="50" cy="50" r="50" />
                </svg>
                <p>{ele.main.aqi}</p>
              </div>
            </li>
          ))
        }
      </ul>
      <ul className="forecast__list forecast__list-days">
        {buildForecastByDay()}
      </ul>
    </section>
  );
};

ItemForecast.propTypes = {
  forecastList: PropTypes.arrayOf(PropTypes.shape({
    main: PropTypes.objectOf(PropTypes.number).isRequired,
    components: PropTypes.objectOf(PropTypes.number).isRequired,
    dt: PropTypes.number.isRequired,
  })).isRequired,
};

export default ItemForecast;
