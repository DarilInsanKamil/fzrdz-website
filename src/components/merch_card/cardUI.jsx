import styles from "./card.module.css";
import { currency } from "@/utils/convert";
import Image from "next/image";
import { Button } from "..";
export const CardUI = ({ title, alt, img, price }) => {
  return (
    <div className={styles.product_card}>
      <section className={styles.img_box}>
        <Image
          src={img}
          width={240}
          height={240}
          alt={alt}
          className={styles.image}
        />
      </section>
      <p className={styles.title}>{title}</p>
      <section className={styles.shop}>
        <p className={styles.price}>IDR. {currency(price)}</p>
        <Button title={"Add cart"} />
      </section>
    </div>
  );
};
