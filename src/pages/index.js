import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import Table from "../components/Table/Table";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ countries }) {
  const [query, setQuery] = useState("");
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(query) ||
      country.region.toLowerCase().includes(query) ||
      country.subregion.toLowerCase().includes(query)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>
          Found {countries.length}{" "}
          {countries.length > 1 ? "countries" : "country"}
        </div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Search by Name, Region, or Subregion"
            onChange={onInputChange}
          />
        </div>
      </div>

      <Table countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  //get countries
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries: countries,
    },
  };
};
