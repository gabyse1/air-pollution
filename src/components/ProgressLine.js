import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { keyframes } from 'styled-components';
import StyledProgressLine from './styles/ProgressLine.styled';

const ProgressLine = ({ aqiData, aqiColor }) => {
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const aqiPercent = Math.floor((aqiData[0] / aqiData[1]) * 100);
    setProg(500 - (500 * aqiPercent) / 100);
  }, []);

  const loaderKeyframe = keyframes`
    from {
      stroke-dashoffset: 500;
    }

    to {
      stroke-dashoffset: ${prog};
    }
  `;

  return (
    <StyledProgressLine id="line-aqi-index" className={`line-aqi-index aqi-index-color-${aqiColor}`} x1="59.07" y1="512.31" x2="59.07" y2="12.31" kf={loaderKeyframe} />
  );
};

ProgressLine.propTypes = {
  aqiData: PropTypes.arrayOf(PropTypes.number).isRequired,
  aqiColor: PropTypes.string.isRequired,
};

export default ProgressLine;
