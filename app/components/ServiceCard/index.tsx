"use client"; // Indique que ce composant est client-side

import React from "react";

import styles from "./index.module.css";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.CardLogo}>
        <Image src={image} alt="Logo" className={styles.IconLogo} />
      </div>
      <div className={styles.titleCard}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.ServicesDescription}>{description}</p>
      <div className={styles.btnContainer}>

      <button
        className={styles.ContactButton}
        onClick={() => (window.location.href = "contact")}
        >
        Read more
      </button>
        </div>
    </div>
  );
};

export default ServiceCard;
