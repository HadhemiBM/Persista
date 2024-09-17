import styles from "./index.module.css";
import Image from "next/image";

import medi from "../../assets/Frame2.png";

const ProjectCard = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.textall}>
        <h3>See all</h3>

        <span className={styles.arrowSee}>&#8594;</span>
      </div>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
              <Image src={medi} alt="bed" className={styles.image} />
            </div>

      
            <div className={styles.textContainer}>
              <h3>Mobile application</h3>
              <p>A Tunisian application dedicated to animal services.</p>
              <div className={styles.textrow}>
                <h5>Details</h5>

                <span className={styles.arrowVoir}>&#8594;</span>
              </div>
            </div>
          </div>
          <h3>ALIFA</h3>
        </div>

        <div className={styles.column}>
          <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
              <Image src={medi} alt="bed" className={styles.image} />
            </div>

           

            <div className={styles.textContainer}>
              <h3>Web application</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium illum ex eos voluptates.
              </p>
              <div className={styles.textrow}>
                <h5>Details</h5>

                <span className={styles.arrowVoir}>&#8594;</span>
              </div>
            </div>
          </div>
          <h3>SPRO1</h3>
        </div>
        <div className={styles.column}>
          <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
              <Image src={medi} alt="bed" className={styles.image} />
            </div>

        

            <div className={styles.textContainer}>
              <h3>Web application</h3>
              <p>An innovative online platform for traders and experts.</p>
              <div className={styles.textrow}>
                <h5>Details</h5>

                <span className={styles.arrowVoir}>&#8594;</span>
              </div>
            </div>
          </div>
          <h3>TWIREX</h3>
        </div>
        <div className={styles.column}>
          <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
              <Image src={medi} alt="bed" className={styles.image} />
            </div>

         

            <div className={styles.textContainer}>
              <h3>Mobile application</h3>
              <p>Free social network application based on polls.</p>
              <div className={styles.textrow}>
                <h5>Details</h5>

                <span className={styles.arrowVoir}>&#8594;</span>
              </div>
            </div>
          </div>
          <h3>PEPOLLS</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
