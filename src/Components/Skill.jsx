import styles from "./skill.module.css";

export default function Skill({ skill, level }) {
  return (
    <li
      className={`${styles.skill}
        ${
          level === "Beginner"
            ? styles.beginner
            : level === "Medium"
            ? styles.medium
            : level === "Advanced"
            ? styles.advanced
            : ""
        }`}
    >
      {skill}
    </li>
  );
}
