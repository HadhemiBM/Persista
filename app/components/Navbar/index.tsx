"use client"; // Indique que ce composant est client-side

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const pathname = usePathname();

  const links = [
    { id: 1, link: "/", name: "Accueil" },
    { id: 2, link: "#about", name: "About" },
    { id: 3, link: "#services", name: "Services" },
    { id: 4, link: "#contact", name: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Image src={logo} alt="Logo" className={styles.IconLogo} />
        </div>

        <div className={styles.navbarLinksContainer}>
          {links.map(({ id, link, name }) => (
            <h3
              key={id}
              className={`${styles.navbarLink} ${
                pathname === link ? styles.activeLink : ""
              }`}
            >
              <Link href={link}>{name}</Link>
            </h3>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
