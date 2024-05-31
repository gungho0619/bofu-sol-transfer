import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

export const AppBar: FC = () => {
  return (
    <div className={styles.AppHeader}>
      <div className={styles.wrapper}>
        <div className={styles.logoTitle}>Home.Story.Comiconomics.utility</div>
        <div className={styles.socialGroup}>
          <Image src="/logo-discord.svg" height={30} width={30} />
          <Image src="/telegram-black-icon.svg" height={30} width={30} />
        </div>
      </div>
      {/* <WalletMultiButton /> */}
    </div>
  );
};
