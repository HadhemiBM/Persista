import styles from "./index.module.css";
import Navbar from "@/app/components/Navbar";
import CircleAnimation from "@/app/components/Cursor"
import Image from "next/image";
import robot from '../../assets/ROBOT.png';
export default function Home() {
  return (
    
      <div className={styles.container}>
    
      <CircleAnimation/>
      <Navbar/>
     
      
     
    
    </div>  );
}
