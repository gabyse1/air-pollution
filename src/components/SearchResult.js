import { useSelector } from 'react-redux';
import SearchResultItem from './SearchResultItem';

const SearchResult = () => {
  const searchList = useSelector((state) => state.citiesReducer);

  return (
    <section className="page__section" id="section__searchresult">
      <ul className="search__list">
        {
          searchList && searchList.map((obj) => <SearchResultItem key={`${obj.lat},${obj.lon}`} resultItem={obj} />)
        }
      </ul>
    </section>
  );
};

export default SearchResult;
