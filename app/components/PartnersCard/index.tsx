"use client";
import React, { useRef } from "react";
import styles from "./index.module.css";
import Image, { StaticImageData } from "next/image";
import arrowLeft from "../../assets/ArrowLeft.png";
import arrowRight from "../../assets/ArrowRight.png";
import tekupLogo from "../../assets/tekupLogo.png";
const PartnersCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const items = [
    { img: tekupLogo, alt: "Tekup Logo" },
    { img: tekupLogo, alt: "Other Logo" },
    { img: tekupLogo, alt: "Another Logo" },
    { img: tekupLogo, alt: "Tekup Logo" },
    { img: tekupLogo, alt: "Other Logo" },
    { img: tekupLogo, alt: "Another Logo" },
    { img: tekupLogo, alt: "Another Logo" },
    { img: tekupLogo, alt: "Tekup Logo" },
    { img: tekupLogo, alt: "Other Logo" },
    { img: tekupLogo, alt: "Another Logo" },
  ];

  return (
    <div className={styles.wrapper}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        <Image src={arrowLeft} alt="left" width={11} height={20} />
        {/* &#9664;  */}
      </button>
      <div className={styles.scrollContainer} ref={scrollRef}>
        {items.map((item, index) => (
          <div key={index} className={styles.scrollItem}>
            <Image src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
        <Image src={arrowRight} alt="left" width={11} height={20} />

        {/* &#9654; */}
      </button>
    </div>
  );
};

export default PartnersCard;
