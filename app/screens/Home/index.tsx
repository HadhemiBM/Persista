"use client";
import styles from "./index.module.css";

import Image from "next/image";
import robot from "../../assets/ROBOT.png";
import vector from "../../assets/vectors.png";
import vectorPink from "../../assets/VectorPink.png";
import vectorOrange from "../../assets/VectorOrange.png";
import vectorBlue from "../../assets/VectorBlue.png";
import rightHand from "../../assets/RightHand.png";
import leftHand from "../../assets/LeftHand.png";

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
        <div className={styles.lineService}></div>
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
      <div className={styles.AboutSection}>
        <h1 className={styles.AboutTitle}>ABOUT US</h1>
        <div className={styles.lineAbout}></div>
        <p className={styles.AboutDescription}>
          Persista is a pioneering IT solutions provider, positioned at the
          forefront of digital innovation. Our global team is dedicated to
          delivering intelligent, customer-centric solutions that drive success.
        </p>

        {/* <Image src={leftHand} alt="Logo" className={styles.leftHand} /> */}
        <div className={styles.AboutUs}>
          <div className={styles.About1}>
            <Image src={vectorPink} alt="Logo" className={styles.IconVector} />
            <p className={styles.Description}>Client-First Approach</p>
          </div>
          <div className={styles.About2}>
            <Image
              src={vectorOrange}
              alt="Logo"
              className={styles.IconVector}
            />
            <p className={styles.Description}>Cost Effectivness</p>
          </div>
          <div className={styles.About3}>
            <Image src={vectorBlue} alt="Logo" className={styles.IconVector} />
            <p className={styles.Description}>Hands-on Workshops</p>
          </div>

          <div className={styles.About11}>
            <Image src={vectorPink} alt="Logo" className={styles.IconVector} />
            <p className={styles.Description}>The Agile Way</p>
          </div>
          <div className={styles.About2}>
            <Image
              src={vectorOrange}
              alt="Logo"
              className={styles.IconVector}
            />
            <p className={styles.Description}>Dedicated Team</p>
          </div>
          <div className={styles.About3}>
            <Image src={vectorBlue} alt="Logo" className={styles.IconVector} />
            <p className={styles.Description}>Autonomy</p>
          </div>
        </div>
        {/* <Image src={rightHand} alt="Logo" className={styles.rightHand} /> */}
      </div>
      <div className={styles.PartnersSection}>
        <h1 className={styles.ServiceTitle}>OUR PARTNERS</h1>
        <div className={styles.linePartners}></div>
        <p className={styles.ServicesDescription}>
          We are proud to collaborate with industry-leading partners who share
          our commitment to innovation and excellence.
        </p>
      </div>
    </div>
  );
}
