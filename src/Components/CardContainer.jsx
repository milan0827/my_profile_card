import styles from "./CardContainer.module.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default function CardContainer({ skills }) {
  return (
    <div className={styles.cardContainer}>
      <AboutMe />
      <Skills skills={skills} />
    </div>
  );
}
