import styles from "./table.module.css";

const orderBy = (countries, direction) => {
  if (direction == "asc") {
    return countries.sort((a, b) => (a.population > b.population ? 1 : -1));
  }
  if (direction === "desc") {
    return countries.sort((a, b) => (a.population > b.population ? -1 : 1));
  }
  return countries;
};

const Table = ({ countries }) => {
  const orderedCountries = orderBy(countries, "desc");
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.headingName}>
          <div>Name</div>
        </button>
        <button className={styles.headingPopulation}>
          <div>Population</div>
        </button>
      </div>
      {countries.map((country) => (
        <div className={styles.row}>
          <div className={styles.name}>{country.name}</div>
          <div className={styles.population}>{country.population}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
