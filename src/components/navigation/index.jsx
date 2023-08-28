import React from "react";
import styles from './nav.module.css'
import Image from "next/image";
import close from '../../assets/icon/close.svg'
export const Navigation = ({tour, disco, store, handleBtn}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.sub_container}>
        <li className={styles.list} onClick={tour}>Tour</li>
        <li className={styles.list} onClick={disco}>Discography</li>
        <li className={styles.list} onClick={store}>Store</li>
      </ul>
      <Image onClick={handleBtn} src={close} alt="close-icon" width={16} height={16}/>
    </div>
  );
}
