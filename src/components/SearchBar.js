import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchedCitiesAPI } from '../redux/cities/citiesReducer';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const onChangeSearchBar = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.trim() !== '') dispatch(getSearchedCitiesAPI(e.target.value.trim()));
  };

  return (
    <section className="page__section" id="section__searchbar">
      <input
        type="search"
        name="input__search-location"
        id="input__search-location"
        data-testid="input__search-location"
        placeholder="Search AQI by city name"
        onChange={onChangeSearchBar}
        value={searchValue}
      />
    </section>
  );
};

export default SearchBar;
