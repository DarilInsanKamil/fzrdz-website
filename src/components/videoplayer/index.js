import React, { useEffect, useRef } from "react";
import styles from './video.module.css'
import Image from "next/image";
import zoom from '../../assets/icon/zoom.svg'
import menu from '../../assets/icon/hamburger.svg'


export const VideoPlayer = () => {
  const videoRef = useRef();

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
        <Image className={styles.ham} src={menu} alt='test-icon' width={"auto"} height={"auto"} />
      </div>
      <h2 className={styles.ham}>RESPONSIVE WORK IN PROGRESS</h2>
      <section className={styles.player}>
        <section>
          <p className={styles.title_album}>Break!</p>
          <p className={styles.title_track}>Winter</p>
        </section>
        <Image src={zoom} width={'auto'} height={'auto'} alt="zoom-icon" />
      </section>
      </div>
      <video loop autoPlay muted ref={videoRef} className={styles.videos}>
        <source src="./loop_video.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  )
};
