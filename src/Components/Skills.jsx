import styles from "./Skills.module.css";
import Skill from "./Skill";

export default function Skills({ skills }) {
  return (
    <ul className={styles.skillsList}>
      {skills.map((skill) => (
        <Skill skill={skill.skill} key={skill.id} level={skill.level} />
      ))}
    </ul>
  );
}
