import styles from "./index.module.css";
import Image from "next/image";
import spr01 from "../../assets/spr01.png";
import pepolls from "../../assets/pepolls.png";
import alifa from "../../assets/alifa.png";
import twirex from "../../assets/twirex.png";

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
              <Image src={alifa} alt="bed" className={styles.image} />
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
              <Image src={spr01} alt="bed" className={styles.image} />
            </div>

            <div className={styles.textContainer}>
              <h3>Web application</h3>
              <p>
                Sports management platform designed to help clubs and academies
                streamline member and activity management.
              </p>
              <div className={styles.textrow}>
                <h5>Details</h5>

                <span className={styles.arrowVoir}>&#8594;</span>
              </div>
            </div>
          </div>
          <h3>SPR01</h3>
        </div>
        <div className={styles.column}>
          <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
              <Image src={twirex} alt="bed" className={styles.image} />
            </div>

            <div className={styles.textContainer}>
              <h3>Web application</h3>
              <p>The Ultimate One-Stop Shop for Traders and Experts.</p>
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
              <Image src={pepolls} alt="bed" className={styles.image} />
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
