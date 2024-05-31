import { useState, FC } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Details, Storys, Utils } from "../constants/Constants";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const About: FC = () => {
  const [txSig, setTxSig] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const sendSol = (event) => {
    event.preventDefault();
    if (!connection || !publicKey) {
      return;
    }
    const transaction = new web3.Transaction();
    // const recipientPubKey = new web3.PublicKey(event.target.recipient.value);
    const recipientPubKey = new web3.PublicKey(
      "JUdkx9cRzAXyNSqUbnp7Hs3ZH6m9LyNy21wXnkodjwV"
    );

    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubKey,
      //   lamports: LAMPORTS_PER_SOL * event.target.amount.value,
      lamports: LAMPORTS_PER_SOL,
    });

    transaction.add(sendSolInstruction);
    sendTransaction(transaction, connection).then((sig) => {
      setTxSig(sig);
    });
  };

  return (
    <div className={styles.wrapperContent}>
      <div className={styles.about}>
        <div className={styles.title}>THE BOOK OF FUNNY COIN</div>
        <Image src="/logo.png" alt="Solana logo" height={480} width={640} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>$BOFU</div>
        <div className={styles.column}>
          <div className={styles.contentEmp}>Buy now Before Launch! **</div>
          <div className={styles.contentEmp}>1 SOL = 10,000$COMIC</div>
        </div>
        <WalletMultiButton />
        <button className={styles.buyButton} onClick={sendSol}>
          Buy Now
        </button>
        <div className={styles.column}>
          <div className={styles.contentEmp}>Can also send SOL to</div>
          <div className={styles.contentEmp}>
            <p className={styles.address}>
              JUdkx9cRzAXyNSqUbnp7Hs3ZH6m9LyNy21wXnkodjwV
            </p>
            <p className={styles.abbaddress}>JUdkx9cR...nkodjwV</p>
          </div>
          <div className={styles.contentEmp}>from a decentralizsed wallet</div>
          <div className={styles.contentEmp}>** Then Wait for Moon Airdrop</div>
        </div>
      </div>
      <div className={styles.story}>
        <div className={styles.title}>The Story</div>
        {Storys?.map((ele, key) => {
          return <div className={styles.contentEmp}>{ele}</div>;
        })}
      </div>
      <div className={styles.comicon}>
        <div className={styles.title}>Comiconomics</div>
      </div>
      {Details.map((ele, key) => {
        return (
          <div className={styles.content}>
            <div className={styles.contentItem}>
              <div className={styles.column}>
                <div className={styles.contentEmp}>{ele.label}</div>
                <div className={styles.contentEmp}>{ele.value}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.util}>
        <div className={styles.title}>UTILITY</div>
      </div>
      <div className={styles.content}>
        {Utils.map((ele, key) => {
          return <div className={styles.contentEmp}>{ele}</div>;
        })}
      </div>
      <p style={{ height: "40px" }}></p>
    </div>
  );
};
