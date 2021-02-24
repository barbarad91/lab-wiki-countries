import { Link } from 'react-router-dom';

const CountriesList = ({ countriesList }) => (
  <section>
    {countriesList.map((country) => (
      <div className="row" key={country.cca3}>
        <Link to={`/${country.cca3}`}>{country.name.official}</Link>
      </div>
    ))}
  </section>
);

export default CountriesList;