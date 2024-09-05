"use client";
import styles from "./index.module.css";

import Image from "next/image";
import robot from "../assets/ROBOT.png";

import vectorPink from "../assets/VectorPink.png";
import vectorOrange from "../assets/VectorOrange.png";
import vectorBlue from "../assets/VectorBlue.png";

import EllipseBlue from "../assets/EllipseBlue.png";
import EllipsePink from "../assets/EllipsePink.png";
import EllipseOrange from "../assets/EllipseOrange.png";

import ServiceCard from "../components/ServiceCard";
import { services, Service } from "../data/servicesData";
import PartnersCard from "../components/PartnersCard";

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.HeaderTitle}>WELCOME TO services</h1>
    </div>
  );
}
