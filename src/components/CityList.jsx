import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

/* eslint-disable-next-line */
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
/* eslint-disable-next-line */
  if (!cities.length) return <Message message="Add your first city" />;

  return (
    /* eslint-disable-next-line */
    <ul className={styles.cityList}>{cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
