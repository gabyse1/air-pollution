import { PropTypes } from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SearchResultItem = ({ resultItem }) => (
  <li className="list__item">
    <div className="item__location">
      <span>{resultItem.name}</span>
      <p>{`${resultItem.state}, ${resultItem.country}`}</p>
      <p>{`Lat. ${resultItem.lat}, Lon. ${resultItem.lon}`}</p>
    </div>
    <div className="item__more">
      <Link
        to={`/details/${resultItem.name}`}
        state={resultItem}
      >
        <BiRightArrowCircle />
      </Link>
    </div>
  </li>
);

SearchResultItem.propTypes = {
  resultItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    state: PropTypes.string,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

export default SearchResultItem;
