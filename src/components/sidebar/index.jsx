import menu from "../../assets/icon/menu-black.svg";
import ticket from "../../assets/icon/ticket.svg";
import music from "../../assets/icon/music.svg";
import store from "../../assets/icon/store.svg";
import instagram from "../../assets/icon/instagram.svg";
import twitter from "../../assets/icon/twitter.svg";
import ytb from "../../assets/icon/ytb.svg";
import styles from "./sidebar.module.css";
import Image from "next/image";

export const Sidebar = ({ navTour, navDisc, navStore, handleBtn }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <button onClick={handleBtn} className={styles.btn}>
          <Image src={menu} alt="menu-icon" width={20} height={20} />
        </button>
        <Image
          onClick={navTour}
          src={ticket}
          alt="ticket-icon"
          width={20}
          height={20}
        />
        <Image
          onClick={navDisc}
          src={music}
          alt="music-icon"
          width={20}
          height={20}
        />
        <Image
          onClick={navStore}
          src={store}
          alt="store-icon"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.medsos}>
        <Image src={instagram} alt="instagram-icon" width={20} height={20} />
        <Image src={twitter} alt="twitter-icon" width={20} height={20} />
        <Image src={ytb} alt="ytb-icon" width={"auto"} height={"auto"} />
      </div>
    </div>
  );
};
