import Link from "next/Link";
import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Country Info" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <header className={styles.header}>Country Info</header>
      </Link>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Jacob Walton <br />
        Created with Next JS, and deployed via Vercel.
      </footer>
    </div>
  );
};

export default Layout;
