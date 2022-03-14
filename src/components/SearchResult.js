import SearchResultItem from './SearchResultItem';

const SearchResult = () => {
  const searchList = [
    {
      name: 'Lima',
      lat: -12.0621065,
      lon: -77.0365256,
      country: 'PE',
      state: 'Lima',
    },
    {
      name: 'Lima',
      lat: 40.7399785,
      lon: -84.105006,
      country: 'US',
      state: 'Ohio',
    },
    {
      name: 'Lima',
      lat: 40.1775458,
      lon: -91.378483,
      country: 'US',
      state: 'Illinois',
    },
    {
      name: 'Lima',
      lat: 42.8991586,
      lon: -77.60859439851696,
      country: 'US',
      state: 'New York',
    },
    {
      name: 'Lima',
      lat: 36.8429349,
      lon: 50.2516748,
      country: 'IR',
      state: 'Gilan Province',
    },
  ];

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
