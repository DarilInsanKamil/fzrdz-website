"use client";
import React from "react";
import styles from "./disco.module.css";
import Image from "next/image";
import flood_into from "../../assets/image/flood_into.svg";
import break_cover from "../../assets/image/break.png";
import play from "../../assets/icon/play.svg";
import { Button, ButtonIcon } from "@/components";
import Link from "next/link";

export default function Disocgraphy() {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Image
          src={flood_into}
          className={styles.image}
          width={"auto"}
          height={"auto"}
          alt="flood_into_cover"
          draggable="false"
        />
        <div className={styles.player}>
          <p className={styles.type}>Single</p>
          <h3 className={styles.title_cover}>Flood Into</h3>
          <Link href="https://open.spotify.com/intl-id/album/5wBZdQtJp4ad73MspHd7DG">
            <ButtonIcon icon={play} alt={"play-icon"} title={"Play"} />
          </Link>
        </div>
      </div>
      <div className={styles.cover}>
        <Image
          src={break_cover}
          className={styles.image}
          width={"auto"}
          height={"auto"}
          alt="break_cover"
          draggable="false"
        />
        <div className={styles.player}>
          <p className={styles.type}>EP</p>
          <h3 className={styles.title_cover}>BREAK!</h3>
          <Link href="https://open.spotify.com/intl-id/album/3E6nSXNMIVy4wofjSstjka">
            <ButtonIcon icon={play} alt={"play-icon"} title={"Play"} />
          </Link>
        </div>
      </div>
      <div className={styles.cover}>
        <Image
          src={break_cover}
          className={styles.image}
          width={"auto"}
          height={"auto"}
          alt="break_cover"
          draggable="false"
        />
        <div className={styles.player}>
          <p className={styles.type}>Single</p>
          <h3 className={styles.title_cover}>Come Apart</h3>
          <Link href="https://open.spotify.com/intl-id/track/3yJqlmzdenTmQeb3bdRJfO">
            <ButtonIcon icon={play} alt={"play-icon"} title={"Play"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
