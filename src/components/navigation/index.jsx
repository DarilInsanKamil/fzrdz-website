import React from "react";
import styles from './nav.module.css'

export const Navigation = ({tour, disco, store}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.sub_container}>
        <li className={styles.list} onClick={tour}>Tour</li>
        <li className={styles.list} onClick={disco}>Discography</li>
        <li className={styles.list} onClick={store}>Store</li>
      </ul>
    </div>
  );
}
