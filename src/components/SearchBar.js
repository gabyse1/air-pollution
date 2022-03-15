import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchedCitiesAPI } from '../redux/city/citiesReducer';

const SearchBar = () => {
  const [searchValue, setSearcheValue] = useState('');
  const dispatch = useDispatch();
  const onChangeSearchBar = (e) => {
    setSearcheValue(e.target.value);
    dispatch(getSearchedCitiesAPI(e.target.value));
  };

  return (
    <section className="page__section" id="section__searchbar">
      <input
        type="search"
        name="input__search-location"
        id="input__search-location"
        placeholder="Input location's name"
        onChange={onChangeSearchBar}
        value={searchValue}
      />
    </section>
  );
};

export default SearchBar;
