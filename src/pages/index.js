import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <Layout>Main</Layout>;
}

export const getStaticProps = async () => {
  //get countries
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
