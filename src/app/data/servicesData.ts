// servicesData.ts
import global from "../assets/globalIcon.png";
import consulting from "../assets/ConsultingIcon.png";
import software from "../assets/Software.png";
import network from "../assets/NetworkIcon.png";
import webmobile from "../assets/webmobileIcon.png";
import integration from "../assets/Integration.png";
import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  description: string;
  image: StaticImageData;
}

export const services: Service[] = [
  {
    title: "NearShore Outsourcing",
    description: "Flexible outsourcing for your business needs.",
    image: global,
  },
  {
    title: "IT Consulting",
    description: "Expert advice for digital growth.",
    image: consulting,
  },
  {
    title: "Software Engineering",
    description: "Building reliable software solutions.",
    image: software,
  },
  {
    title: "Network",
    description: "High-quality network services.",
    image: network,
  },
  {
    title: "Integration",
    description:
      "Seamless integration of systems and services for maximum efficiency.",
    image: integration,
  },
  {
    title: "Web & Mobile applications",
    description: "Creating high-performance web and mobile experiences.",
    image: webmobile,
  },
];
