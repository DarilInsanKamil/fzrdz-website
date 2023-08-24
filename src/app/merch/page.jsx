"use client";
import React from "react";
import { CardMerch } from "@/components";
import styles from './merch.module.css'
export default function Merch() {
  return (
    <main className={styles.container}>
      <CardMerch />
    </main>
  );
}
