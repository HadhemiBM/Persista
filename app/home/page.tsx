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

import ProjectCard from "../components/ProjectCard";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.HeaderSection}>
        <div className={styles.RobotLogo}>
          <Image src={robot} alt="Logo" className={styles.IconRobot} />
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
      <div className={styles.ServiceSection} id="services">
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
      <div className={styles.AboutSection} id="about">
        <h1 className={styles.AboutTitle}>ABOUT US</h1>
        <div className={styles.lineAbout}></div>
        <p className={styles.AboutDescription}>
          Persista is a pioneering IT solutions provider, positioned at the
          forefront of digital innovation. Our global team is dedicated to
          delivering intelligent, customer-centric solutions that drive success.
        </p>

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
      </div>
      <div className={styles.ProjectsSection} id="about">
        <h1 className={styles.ProjectTitle}>PORTFOLIO</h1>
        <div className={styles.lineProjects}></div>
        <p className={styles.ProjectDescription}>
          Explore a selection of projects we have completed for our clients.
          Each solution is tailor-made to meet their specific needs, using the
          latest and most innovative technologies.
        </p>
        <div className={styles.projectsCard}>
          <ProjectCard />
        </div>
      </div>
      <div className={styles.PartnersSection} id="partners">
        <h1 className={styles.PartnersTitle}>OUR PARTNERS</h1>
        <div className={styles.linePartners}></div>
        <p className={styles.PartnersDescription}>
          We are proud to collaborate with industry-leading partners who share
          our commitment to innovation and excellence.
        </p>
      </div>
      <PartnersCard />
      <div className={styles.WhyUSSection} id="whyUs">
        <h1 className={styles.ServiceTitle}>WHY CHOOSE US</h1>
        <div className={styles.lineWhy}></div>
        <div className={styles.whys}>
          <div className={styles.rowWhy}>
            <Image
              src={EllipseBlue}
              alt="Logo"
              className={styles.IconVectorWHY}
            />
            <h5 className={styles.titleWhy}>
              Empowering Businesses with Robust Solutions
            </h5>
          </div>
          <p className={styles.Descwhy}>
            With over a decade of experience in IT services, Persista delivers
            tailored, result-driven applications and systems for clients
            worldwide.
          </p>
        </div>
        <div className={styles.whys}>
          <div className={styles.rowWhy}>
            <Image
              src={EllipseOrange}
              alt="Logo"
              className={styles.IconVectorWHY}
            />
            <h5 className={styles.titleWhy}>Agile Development</h5>
          </div>
          <p className={styles.Descwhy}>
            We utilize proven agile methodologies to enhance project outcomes.
          </p>
        </div>

        <div className={styles.whys}>
          <div className={styles.rowWhy}>
            <Image
              src={EllipsePink}
              alt="Logo"
              className={styles.IconVectorWHY}
            />
            <h5 className={styles.titleWhy}>Analytics Expertise</h5>
          </div>
          <p className={styles.Descwhy}>
            Harness the power of data with simplified, actionable insights.
          </p>
        </div>

        <div className={styles.whys}>
          <div className={styles.rowWhy}>
            <Image
              src={EllipseBlue}
              alt="Logo"
              className={styles.IconVectorWHY}
            />
            <h5 className={styles.titleWhy}>Well-Documented Solutions</h5>
          </div>
          <p className={styles.Descwhy}>
            Our clean, organized documentation ensures seamless knowledge
            transfer.
          </p>
        </div>
      </div>

      <div id="contact"></div>
    </div>
  );
}
