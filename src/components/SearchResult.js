import { useSelector } from 'react-redux';
import SearchResultItem from './SearchResultItem';

const SearchResult = () => {
  const searchList = useSelector((state) => state.citiesReducer);

  return (
    <section className="page__section" id="section__searchresult">
      <ul className="search__list" data-testid="searchList">
        {
          searchList && searchList.map((obj) => <SearchResultItem key={obj.id} resultItem={obj} />)
        }
      </ul>
    </section>
  );
};

export default SearchResult;
