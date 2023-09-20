"use client";
import React from "react";
import styles from "./disco.module.css";
import Image from "next/image";
import flood_into from "../../assets/image/flood_into.png";
import break_cover from "../../assets/image/break.png";
import play from "../../assets/icon/play.svg";
import { ButtonIcon, MusicList } from "@/components";
import Link from "next/link";

export default function Disocgraphy() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title_mobile}>Discography</h2>
        <MusicList />
    </main>
  )
}
