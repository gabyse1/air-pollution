import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import ProgressLine from './ProgressLine';
import Face1 from '../img/Face1';
import Face2 from '../img/Face2';
import Face3 from '../img/Face3';
import Face4 from '../img/Face4';
import Face5 from '../img/Face5';

const ItemDetailsGral = ({ detailsGral, dt, aqi }) => {
  const [dateTime, setDateTime] = useState('');
  const [aqiFeatures, setAqiFeatures] = useState(['yellow', 'fair']);

  useEffect(() => {
    const newDate = new Date(dt * 1000);
    setDateTime(`${newDate.toLocaleString('en-US',
      {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      })}`);
    switch (aqi) {
      case 1: { setAqiFeatures(['green', 'good']); break; }
      case 2: { setAqiFeatures(['yellow', 'fair']); break; }
      case 3: { setAqiFeatures(['orangered', 'moderate']); break; }
      case 4: { setAqiFeatures(['red', 'poor']); break; }
      case 5: { setAqiFeatures(['purple', 'very poor']); break; }
      default: { setAqiFeatures(['yellow', 'fair']); break; }
    }
  }, []);

  const displayFace = (indice) => {
    switch (indice) {
      case 1: { return <Face1 />; }
      case 2: { return <Face2 />; }
      case 3: { return <Face3 />; }
      case 4: { return <Face4 />; }
      case 5: { return <Face5 />; }
      default: { return <Face2 />; }
    }
  };

  return (
    <section className="page__section section__detail-gral">
      <div className="gral__aqi">
        <div className="aqi__name">
          {aqiFeatures[1]}
        </div>
        <div className="aqi__graph">
          <div className="graph__thermometer">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.5 518.31">
              <g>
                <path className="path-numbers" d="M417,557.45a1.17,1.17,0,0,1-.41.85,1.31,1.31,0,0,1-.91.39l-3.51,0-3.52,0c-.6,0-.89-.26-.88-.78l0-.27c.22-6.22.34-10,.34-11.3v-7.25c0-.46-.11-.69-.32-.69a5.74,5.74,0,0,0-1.48.3,6,6,0,0,1-1.5.29q-.75,0-.75-.9t0-2.49c0-1.11,0-1.95,0-2.52,0-.32.2-.57.61-.73a14,14,0,0,0,5.64-4c.27-.34.51-.51.71-.51l.29,0c.62.13,1.54.33,2.76.61.65.08,1.6.23,2.85.44a.49.49,0,0,1,.35.54c0,.1,0,.27-.05.51q-.27,2.15-.27,10.52,0,2.81,0,8.45T417,557.45Z" transform="translate(-228.15 -135.69)" />
                <path className="path-numbers" d="M424.29,455.73c0,.38,0,.94-.12,1.69s-.12,1.32-.12,1.71,0,1,0,1.84,0,1.46,0,1.87-.27.61-.81.61a22.41,22.41,0,0,1-2.29-.46,45.49,45.49,0,0,0-8.3-.49c-1.26,0-3.14.07-5.64.2s-4.37.21-5.59.21a.63.63,0,0,1-.71-.61c-.05-.55-.17-1.37-.37-2.46a23.34,23.34,0,0,1-.61-2.86c0-.36.69-.63,2.05-.81a6.84,6.84,0,0,0,3.08-.88,39.26,39.26,0,0,0,5.05-5.24q3.3-4,3.3-6a3.85,3.85,0,0,0-1.26-2.92,4.2,4.2,0,0,0-3-1.18,10.26,10.26,0,0,0-3.88.78,14.2,14.2,0,0,0-2.71,1.42,7.93,7.93,0,0,1-1.32.75c-.55,0-.83-.65-.83-1.95a14.25,14.25,0,0,0-.12-2.2c0-.21-.16-.65-.37-1.32a4.55,4.55,0,0,1-.29-1.27.81.81,0,0,1,.41-.61,16,16,0,0,1,5.42-2.27,25.44,25.44,0,0,1,5.89-.73,13.82,13.82,0,0,1,7.76,2,7.66,7.66,0,0,1,3.69,6.81q0,5.89-8.91,13.75c4.21-.21,7.52-.32,9.91-.32C424.05,454.83,424.29,455.13,424.29,455.73Z" transform="translate(-228.15 -135.69)" />
                <path className="path-numbers" d="M423.17,355.34a7.84,7.84,0,0,1-3.74,7,14.06,14.06,0,0,1-7.93,2.1,29.45,29.45,0,0,1-6-.51c-3.44-.72-5.15-1.35-5.15-1.91a1.49,1.49,0,0,1,.1-.44c.22-.6.56-1.5,1-2.71.13-.6.35-1.49.68-2.68.15-.41.39-.61.73-.61-.05,0,.68.27,2.19.8a11.44,11.44,0,0,0,3.7.81q4.78,0,4.78-3.2,0-2.56-4.54-2.56c-.41,0-.94,0-1.61.05l-1.32.05c-1,0-1.54,0-1.64,0-.71-.08-1.07-.36-1.07-.83a22.22,22.22,0,0,1,.29-4.69.78.78,0,0,1,.78-.61,20.8,20.8,0,0,1,2.46.21,20.73,20.73,0,0,0,2.43.21,2.33,2.33,0,0,0,1.74-.7,2.37,2.37,0,0,0,.7-1.77q0-2.88-4.2-2.88a17,17,0,0,0-4.76,1l-.22,0q-.32,0-.54-.69c0-.68-.08-1.46-.14-2.34,0-.19-.07-.59-.15-1.17a8.09,8.09,0,0,1-.1-1.15q0-1.29,4-2a30.14,30.14,0,0,1,5.34-.49,14.16,14.16,0,0,1,7.28,1.83,6.76,6.76,0,0,1,3.78,6.08,7.4,7.4,0,0,1-4,6.79,7.65,7.65,0,0,1,3.8,2.71A7.23,7.23,0,0,1,423.17,355.34Z" transform="translate(-228.15 -135.69)" />
                <path className="path-numbers" d="M424.65,258.2c0,.24-.21.41-.61.49a5.31,5.31,0,0,1-1.23,0l-.92-.07a.85.85,0,0,0-1,.95c0,.39,0,1,.08,1.77s.07,1.38.07,1.77c0,.57-.25.86-.76.86a78.58,78.58,0,0,1-8.86-.21c-.29-.14-.44-.32-.44-.53a11.91,11.91,0,0,1,.31-1.8,11.63,11.63,0,0,0,.3-2.1q0-.81-.9-.81c-1.09,0-2.72,0-4.9.1s-3.8.1-4.89.1c-1.3,0-1.95-.52-1.95-1.54,0-.52,0-1.3,0-2.33s0-1.81,0-2.33a2.32,2.32,0,0,1,.75-1.54,64.05,64.05,0,0,0,5.2-6.11q.8-1.09,5.3-8.57a35.43,35.43,0,0,1,1.91-3.07.94.94,0,0,1,.73-.42,22.84,22.84,0,0,1,3.62.88,18.34,18.34,0,0,0,4.14.88c.52,0,.78.33.78,1a26.67,26.67,0,0,1-.22,2.87c-.14,1.28-.22,2.24-.22,2.89v10.28c.31,0,.85,0,1.62-.14a11.7,11.7,0,0,1,1.58-.15c.31,0,.47.19.47.56s0,.85-.06,1.54-.07,1.2-.07,1.56,0,.89.09,1.6S424.65,257.84,424.65,258.2Zm-12.07-15.43c0-.1-.05-.15-.17-.15s-.29.11-.44.32l-3.12,5a27.22,27.22,0,0,1-3.66,4.66q1.33,0,6.83-.34c0-.65.15-2.25.35-4.81Q412.58,244.45,412.58,242.77Z" transform="translate(-228.15 -135.69)" />
                <path className="path-numbers" d="M423.25,155.49q0,10.9-13.45,10.91a44.92,44.92,0,0,1-5.22-.41c-2.83-.36-4.32-.79-4.47-1.3a11.75,11.75,0,0,1-.1-2.17,19.36,19.36,0,0,1,.25-2.74c.21-1.46.45-2.19.73-2.19a1.2,1.2,0,0,1,.41.14,14.7,14.7,0,0,0,6.67,1.47c3.6,0,5.39-1.17,5.39-3.52a3.11,3.11,0,0,0-2-2.9,8.1,8.1,0,0,0-3.69-.78,23.6,23.6,0,0,0-2.7.22,25.78,25.78,0,0,1-2.7.22c-.57,0-.85-.26-.85-.79q0-2.34.21-7.15c.14-3.21.2-5.59.2-7.15a1.69,1.69,0,0,1,.36-1,1.32,1.32,0,0,1,.79-.59q.54-.1,6.79-.1c4.74,0,7.92,0,9.55.05.43,0,.65.2.65.56a32.34,32.34,0,0,1-.29,3.81c-.24,2.06-.54,3.1-.88,3.1l-.27,0c-3.67-.32-6-.49-6.88-.49q-2.68,0-2.88.3a6.18,6.18,0,0,0-.42,2.76.74.74,0,0,0,.13.48c.4,0,1.05,0,1.92-.12s1.48-.12,1.93-.12a11.68,11.68,0,0,1,7.55,2.42A8.56,8.56,0,0,1,423.25,155.49Z" transform="translate(-228.15 -135.69)" />
                <path id="path15" className="path-bar" d="M333.83,501.06h28.31" transform="translate(-228.15 -135.69)" />
                <path id="path25" className="path-bar" d="M333.83,402.06h28.31" transform="translate(-228.15 -135.69)" />
                <path id="path35" className="path-bar" d="M333.83,301.94h28.31" transform="translate(-228.15 -135.69)" />
                <path id="path45" className="path-bar" d="M333.83,200.82h28.31" transform="translate(-228.15 -135.69)" />
                <path id="path10" className="path-bar" d="M333.83,548.63h49.35" transform="translate(-228.15 -135.69)" />
                <path id="path20" className="path-bar" d="M333.83,450.63h49.35" transform="translate(-228.15 -135.69)" />
                <path id="path30" className="path-bar" d="M333.83,350.63h49.35" transform="translate(-228.15 -135.69)" />
                <path id="path40" className="path-bar" d="M333.83,250.38h49.35" transform="translate(-228.15 -135.69)" />
                <path id="path50" className="path-bar" d="M333.83,151.13h49.35" transform="translate(-228.15 -135.69)" />
                <path id="path-aqi-base" className={`path-aqi-base aqi-index-color-${aqiFeatures[0]}`} d="M259.25,547.37a53.56,53.56,0,1,0,55.94,0Z" transform="translate(-228.15 -135.69)" />
                <ProgressLine aqiData={[aqi, 5]} aqiColor={aqiFeatures[0]} />
                <path id="path-container" className="path-container" d="M287.22,144A28.25,28.25,0,0,0,259,172.25V548.88A54,54,0,0,0,287.22,649h0a54.07,54.07,0,0,0,54.07-54.07h0a54.05,54.05,0,0,0-25.82-46V172.25A28.25,28.25,0,0,0,287.22,144Z" transform="translate(-228.15 -135.69)" />
                <path id="path-cristal" className="path-cristal" d="M251.32,593c3.23,16.23,12.7,28.66,29.94,33.3h0" transform="translate(-228.15 -135.69)" />
              </g>
            </svg>
          </div>
          <div className={`graph__face aqi-index-color-${aqiFeatures[0]}`}>
            {displayFace(aqi)}
          </div>
        </div>
        <h3 className="aqi__date">{dateTime}</h3>
      </div>
      <div className="gral__location">
        <h2>{detailsGral.name}</h2>
        <p>{`${detailsGral.state}, ${detailsGral.country}`}</p>
        <p className="desc__small">{`Lat. ${detailsGral.lat.toFixed(2)}, Lon. ${detailsGral.lon.toFixed(2)}`}</p>
      </div>
    </section>
  );
};

ItemDetailsGral.propTypes = {
  detailsGral: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
