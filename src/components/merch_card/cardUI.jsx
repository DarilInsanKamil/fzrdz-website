import styles from "./card.module.css";
import { currency } from "@/utils/convert";
import Image from "next/image";
export const CardUI = ({ title, alt, img, price }) => {
  return (
    <div className={styles.product_card}>
      <Image src={img} width={240} height={240} alt={alt} className={styles.image} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>IDR. {currency(price)}</p>
    </div>
  );
};
