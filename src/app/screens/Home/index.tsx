"use client";
import styles from "./index.module.css";

import Image from "next/image";
import robot from "../../assets/ROBOT.png";
import vector from "../../assets/vectors.png";

import ServiceCard from "../../components/ServiceCard";
import { services, Service } from "../../data/servicesData";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.HeaderSection}>
        <div className={styles.RobotLogo}>
          <Image src={robot} alt="Logo" className={styles.IconRobot} />
          {/* <Link href="/">Logo</Link> */}
        </div>
        <div className={styles.HeaderContent}>
          <div className={styles.ContainerTitle}>
            <h1 className={styles.HeaderTitle}>WELCOME TO PERSISTA</h1>
          </div>
          <div className={styles.Containerdesc}>
            <p className={styles.HeaderDescription}>
              We transform ideas into reality with innovative digital solutions.
            </p>
          </div>
          <div className={styles.ContainerButton}>
            <button
              className={styles.ContactButton}
              onClick={() => (window.location.href = "contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className={styles.ServiceSection}>
        <h1 className={styles.ServiceTitle}>OUR SERVICES</h1>
        <div className={styles.line}></div>
        <p className={styles.ServicesDescription}>
          At Persista, we specialize in holistic digital transformations, from
          strategic planning to execution, ensuring that every project leverages
          modern, reliable technologies that meet your unique needs.
        </p>
        <div className={styles.ServiceCards}>
          {services.map((service: Service, index: number) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
