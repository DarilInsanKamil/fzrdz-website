import styles from "./medsos.module.css";
import Image from "next/image";
import instagram from "../../assets/icon/instagram.svg";
import twitter from "../../assets/icon/twitter.svg";
import ytb from "../../assets/icon/ytb.svg";
import Link from "next/link";

export const Medsos = () => {
  return (
    <div className={styles.container}>
      <Link href="https://www.instagram.com/fazerdaze">
        <Image src={instagram} alt="instagram-icon" draggable="false" />
      </Link>
      <Link href="https://twitter.com/fazerdaze">
        <Image src={twitter} alt="twitter-icon" draggable="false" />
      </Link>
      <Link href="https://www.youtube.com/@fazerdazeofficial">
        <Image src={ytb} alt="ytb-icon" draggable="false" />
      </Link>
    </div>
  );
};
