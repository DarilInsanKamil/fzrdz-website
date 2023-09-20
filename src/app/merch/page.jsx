"use client";
import React from "react";
import { CardMerch } from "@/components";
import styles from './merch.module.css'
export default function Merch() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title_mobile}>Tour</h2>
      <CardMerch />
    </main>
  );
}
