import styles from "./table.module.css";
const Table = ({ countries }) => {
  return (
    <div>
      <div className={styles.heading}>
        <button>
          <div className={styles.headingName}>Name</div>
        </button>
        <button>
          <div className={styles.headingPopulation}>Population</div>
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
