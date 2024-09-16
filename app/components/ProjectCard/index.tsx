import styles from "./index.module.css";
import Image from "next/image";
import landing from "../../assets/landing.png";
import persista from "../../assets/PERSISTA.png";
import mobile from "../../assets/mobile.png";
import medi from "../../assets/Frame2.png";

const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={landing} alt="bed" className={styles.image} />
        </div>

        <div className={styles.circleButton}>
          <span className={styles.arrow}>&#8594;</span>
        </div>

        <div className={styles.textContainer}>
          <h3>Web application</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            illum ex eos voluptates.
          </p>
          <div className={styles.textrow}>
            <h6> Details</h6>

            <span className={styles.arrowVoir}>&#8594;</span>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={medi} alt="bed" className={styles.image} />
        </div>
        <div className={styles.circleButton}>
          <span className={styles.arrow}>&#8594;</span>
        </div>

        <div className={styles.textContainer}>
          <h3>Mobile application</h3>
          {/* <div className={styles.textrow}> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            illum ex eos voluptates.
          </p>
          <div className={styles.textrow}>
            <h6> Details</h6>

            <span className={styles.arrowVoir}>&#8594;</span>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={mobile} alt="bed" className={styles.image} />
        </div>
        <div className={styles.circleButton}>
          <span className={styles.arrow}>&#8594;</span>
        </div>

        <div className={styles.textContainer}>
          <h3>Mobile application</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            illum ex eos voluptates.
          </p>
          <div className={styles.textrow}>
            <h6> Details</h6>

            <span className={styles.arrowVoir}>&#8594;</span>
          </div>
      </div>
      </div>
      </div>

  );
};

export default ProjectCard;
