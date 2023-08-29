"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from './video.module.css'
import Image from "next/image";
import zoom from '../../assets/icon/zoom.svg'
import menu from '../../assets/icon/hamburger.svg'
import { Modal, NavMobile } from "..";

export const VideoPlayer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const videoRef = useRef();

  const handleModal = () => {
    setShowModal(!showModal)
  }
  const handleNav = () => {
    setShowNav(!showNav)
    console.log(showModal);
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


        {showModal ? <Modal toggleModal={handleModal}>
          <iframe
            width={'100%'}
            height={'100%'}
            src="https://www.youtube.com/embed/Hjx68WhintI?si=5W0Gdb6RAjyoFthe"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; muted;
        web-share" allowFullScreen>
          </iframe></Modal> : null}
        <section className={styles.player}>
          <section>
            <p className={styles.title_album}>Break!</p>
            <p className={styles.title_track}>Winter</p>
          </section>
          <Image onClick={handleModal} src={zoom} width={'auto'} height={'auto'} alt="zoom-icon" />
        </section>
      </div>
      <video loop autoPlay muted ref={videoRef} className={styles.videos}>
        <source src="./loop_video.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  )
};
