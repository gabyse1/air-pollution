import AirPollution from '../img/AirPollution';

const HomeMain = () => (
  <section className="page__section home__main">
    <div className="home__ppt">
      <h1>World&apos;s Air Pollution</h1>
      <h2>Air Quality Index (AQI)</h2>
      <p>
        The Air Quality Index is based on measurement of particulate matter (PM2.5 and PM10),
        Ozone (O3), Nitrogen Dioxide (NO2), Sulfur Dioxide (SO2) and Carbon Monoxide (CO) emissions.
      </p>
    </div>
    <div className="home__graph">
      <AirPollution />
    </div>
  </section>
);

export default HomeMain;
