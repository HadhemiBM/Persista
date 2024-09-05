"use client"; // Indique que ce composant est client-side

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
const Footer: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);

  const links = [
    { id: 1, link: "/", name: "Accueil" },
    { id: 2, link: "/about", name: "About" },
    { id: 3, link: "/services", name: "Services" },
    { id: 4, link: "/contact", name: "Contact" },
  ];

  return (
    <nav className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <Image src={logo} alt="Logo" className={styles.IconLogo} />
        </div>

        <div className={styles.footerLinksContainer}>
          <h3 className={styles.quick}>Quick Links</h3>
          {links.map(({ id, link, name }) => (
            <h3 key={id}>
              <Link href={link}>{name}</Link>
            </h3>
          ))}
        </div>
        <div className={styles.FooterSocialMediaContainer}>
          <h3 className={styles.quick}>Contact Info</h3>
          <div className={styles.FooterSocialMedia}>
            <FaPhoneAlt className={styles.iconMedia} />

            <h2> **********</h2>
          </div>
          <div className={styles.FooterSocialMedia}>
            <MdEmail className={styles.iconMedia} />

            <h2> **********</h2>
          </div>
          <div className={styles.FooterSocialMedia}>
            <IoLogoFacebook className={styles.iconMedia} />

            <h2> **********</h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
