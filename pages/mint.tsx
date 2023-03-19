import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  const buttonStyle = {
    background: "#000",
    border: "2px solid #262627",
    padding: "20px",
    color: "white",
    borderRadius: "20px",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Buy an NFT on NFTEarth!</h1>

      <p className={styles.explain}>
        Get your NFT if you do not have one already
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <button
        style={{
          background: "#000",
          border: "2px solid #262627",
          padding: "20px",
          color: "white",
          borderRadius: "20px",
        }}
        onClick={() => router.push(`https://nftearth.exchange/explore`)}
      >
        Purchase an NFT on NFTEarth
      </button>
    </div>
  );
};

export default Mint;
