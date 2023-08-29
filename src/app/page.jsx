"use client";
import Image from "next/image";
import tour_banner from "../assets/image/tour_banner.png";
import { TicketCard, VideoPlayer } from "@/components";
import styles from "./page.module.css";

export default function Tour() {

  return (
    <main className={styles.container}>
      <section className={styles.banner_box}>
        <Image
          src={tour_banner}
          alt="tour_banner"
          width={"auto"}
          height={"auto"}
          className={styles.banner_img}
          draggable="false"
        />
      </section>
      <h4 className={styles.title}>SOLO NZ TOUR</h4>
      <TicketCard />
    </main>
  );
}
