import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import WalletContextProvider from "../components/WalletContextProvider";
import { AppBar } from "../components/AppBar";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { SendSolForm } from "../components/SendSolForm";
import Head from "next/head";
import { About } from "../components/About";

const Home: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <Head>
        <title>BOFU</title>
        <link rel="icon" href="/sol.ico" />
        <meta name="description" content="Send your sols" />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <div className={styles.wrapper}>
            <About />
            {/* <BalanceDisplay /> */}
            {/* <SendSolForm /> */}
          </div>
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
