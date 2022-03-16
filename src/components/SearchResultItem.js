import { PropTypes } from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SearchResultItem = ({ resultItem }) => (
  <li className="search__list-item" data-testid="matchElement">
    <div className="item__location">
      <h3>{resultItem.name}</h3>
      <p>{`${resultItem.state}, ${resultItem.country}`}</p>
      <p className="desc__small">{`Lat. ${resultItem.lat.toFixed(2)}, Lon. ${resultItem.lon.toFixed(2)}`}</p>
    </div>
    <div className="item__more">
      <Link
        className="btn__nav btn_nav-a"
        to={`/details/${resultItem.name}`}
        state={resultItem}
        data-testid="detailsButton"
      >
        <BiRightArrowCircle />
      </Link>
    </div>
  </li>
);

SearchResultItem.propTypes = {
  resultItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.string,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

export default SearchResultItem;
