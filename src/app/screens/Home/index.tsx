"use client";
import styles from "./index.module.css";
import Navbar from "@/app/components/Navbar";
import CircleAnimation from "@/app/components/Cursor"
import Image from "next/image";
import robot from '../../assets/ROBOT.png';
import vectors from '../../assets/vectors.png';
export default function Home() {
  return (
    
      <div className={styles.container}>
   
      <div  className={styles.Header}>


      <div className={styles.RobotLogo}>
            <Image src={robot} alt="Logo" className={styles.IconRobot}  />
          {/* <Link href="/">Logo</Link> */}
      </div>
      <div className={styles.HeaderContent}>
        <div className={styles.ContainerTitle} >

        <h1 className={styles.HeaderTitle}>WELCOME TO PERSISTA</h1>
        </div>
        <div className={styles.Containerdesc} >

        <p className={styles.HeaderDescription}>We transform ideas into reality with innovative digital solutions.</p>
      </div>
      <div className={styles.ContainerButton}>
  <button 
    className={styles.ContactButton} 
    onClick={() => window.location.href = 'contact'}
  >
    Contact Us
  </button>
</div>
      </div>
      
        </div>
    </div>  );
}
