"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from './video.module.css'
import Image from "next/image";
import play from '../../assets/icon/play.svg'
import menu from '../../assets/icon/hamburger.svg'
import { ButtonIcon, Modal, NavMobile } from "..";
import { useRouter } from "next/navigation";

export const VideoPlayer = () => {
  const router = useRouter()
  const [showNav, setShowNav] = useState(false);
  const videoRef = useRef();

  const handleModal = () => {
    router.push('https://www.youtube.com/watch?v=Hjx68WhintI')
  }

  const handleNav = () => {
    setShowNav(!showNav)
    setShowModal(false)
  }

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <h2 className={styles.title_web}>FAZERDAZE</h2>
          <Image onClick={handleNav} className={styles.ham} src={menu} alt='test-icon' width={"auto"} height={"auto"} />
        </div>
        {
          showNav && <NavMobile handlenav={handleNav} />
        }
        <p className={styles.ham}>Work In Progress mobile version</p>
        <section className={styles.player}>
          <section>
            <p className={styles.title_album}>Break!</p>
            <p className={styles.title_track}>Winter</p>
          </section>
          <a target="_blank" href="https://www.youtube.com/watch?v=Hjx68WhintI">
            <ButtonIcon icon={play} alt={"play-icon"} title={"Play"} />
          </a>
        </section>
      </div>
      <video loop autoPlay muted ref={videoRef} className={styles.videos}>
        <source src="./loop_video.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  )
};
