import styles from "./CountryItem.module.css";


/* eslint-disable-next-line */
function CountryItem({ country }) {
  return (
    /* eslint-disable-next-line */
    <li className={styles.countryItem}><span>{country.emoji}</span><span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
