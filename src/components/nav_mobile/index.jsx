import close from "../../assets/icon/close.svg";
import Image from "next/image";
import styles from "./nav_mobile.module.css";
import { DiscoRouter, MerchRouter, TourRouter } from "@/router";
import { useRouter } from "next/navigation";

export const NavMobile = ({handlenav}) => {
  const router = useRouter()
  const navTour = (event) => TourRouter(event, router)
  const navDisco = (event) => DiscoRouter(event, router)
  const navStore = (event) => MerchRouter(event, router)

  return (
    <div className={styles.container}>
      <ul>
        <li onClick={navTour}>Tour</li>
        <li onClick={navDisco}>Discography</li>
        <li onClick={navStore}>Store</li>
      </ul>
    </div>
  );
};
