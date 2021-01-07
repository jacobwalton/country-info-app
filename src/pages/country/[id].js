import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Country.module.css";

const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);

  const country = await res.json();
  return country;
};

const Country = ({ country }) => {
  const [borders, setBorders] = useState([]);
  const getBorders = async () => {
    const borders = await Promise.all(
      country.borders.map((border) => getCountry(border))
    );
    setBorders(borders);
  };
  useEffect(() => {
    getBorders();
  }, []);

  return (
    <Layout title={country.name}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.overviewPanel}>
            <img src={country.flag} alt={country.name}></img>
            <h1 className={styles.overviewName}>{country.name}</h1>
            <div className={styles.overviewRegion}>{country.region}</div>

            <div className={styles.overviewNumbers}>
              <div className={styles.population}>
                <div className={styles.overviewValue}>{country.population}</div>
                <div className={styles.overviewLabel}>Population</div>
              </div>
              <div className={styles.area}>
                <div className={styles.overviewValue}>{country.area}</div>
                <div className={styles.overviewLabel}>Area</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.detailPanel}>
            <h4 className={styles.detailHeading}>Details</h4>

            <div className={styles.panelRow}>
              <div className={styles.panelLabel}>Capital</div>
              <div className={styles.panelValue}>{country.capital}</div>
            </div>

            <div className={styles.panelRow}>
              <div className={styles.panelLabel}>Subregion</div>
              <div className={styles.panelValue}>{country.subregion}</div>
            </div>

            <div className={styles.panelRow}>
              <div className={styles.panelLabel}>
                {country.languages.length > 1
                  ? "Primary Languages"
                  : " Primary Language"}
              </div>
              <div className={styles.panelValue}>
                {country.languages.map(({ name }) => name).join(", ")}
              </div>
            </div>

            <div className={styles.panelRow}>
              <div className={styles.panelLabel}>
                {country.currencies.length > 1 ? "Currencies" : " Currency"}
              </div>
              <div className={styles.panelValue}>
                {" "}
                {country.currencies.map(({ name }) => name).join(", ")}
              </div>
            </div>

            <div className={styles.panelRow}>
              <div className={styles.panelLabel}>Native Name</div>
              <div className={styles.panelValue}>{country.nativeName}</div>
            </div>

            <div className={styles.panelRow}>
              <div className={styles.panelLabel}>Gini</div>
              <div className={styles.panelValue}>{country.gini} %</div>
            </div>

            <div className={styles.panelBorders}>
              <div className={styles.borderLabel}>Neighboring countries</div>

              <div className={styles.panelContainer}>
                {borders.map(({ flag, name }) => (
                  <div className={styles.borderCountry}>
                    <img
                      src={flag}
                      alt={name}
                      className={styles.BorderFlag}
                    ></img>
                    <div className={styles.borderName}>{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );

  const country = await getCountry(params.id);
  return {
    props: {
      country,
    },
  };
};
