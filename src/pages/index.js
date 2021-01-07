import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import Table from "../components/Table/Table";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.counts}>
        Found {countries.length}{" "}
        {countries.length > 1 ? "countries" : "country"}
      </div>
      <SearchInput placeholder="Search by Name, Region, or Subregion" />

      <Table countries={countries} />
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
