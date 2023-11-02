import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

/* eslint-disable-next-line */
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  /* eslint-disable-next-line */
  if (!cities.length) return <Message message="Add your first city" />;

  /* eslint-disable-next-line */
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
    
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    // /* eslint-disable-next-line */
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem city={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
