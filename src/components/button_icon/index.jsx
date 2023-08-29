import styles from "./button.module.css";
import Image from "next/image";

export const ButtonIcon = ({ title, icon, alt, click }) => {
  return (
    <button className={styles.button_container} onClick={click}>
      <Image
        className={styles.icon}
        src={icon}
        alt={alt}
        width={"auto"}
        height={"auto"}
      />
      {title}
    </button>
  );
};
