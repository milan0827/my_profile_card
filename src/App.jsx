import Image from "./Assets/myself.png";
import "./App.css";

const skills = [
  {
    id: 1234,
    skill: "Javascript",
    level: "Medium",
  },
  {
    id: 1235,
    skill: "ReactJS",
    level: "Beginner",
  },
  {
    id: 1236,
    skill: "NodeJS",
    level: "Medium",
  },
  {
    id: 1237,
    skill: "HTML and CSS",
    level: "Advanced",
  },
];

export default function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img src={Image} alt="my photo" />
      <CardContainer />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="cardContainer">
      <AboutMe />
      <Skills />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="aboutMe">
      <h1>Milan Rokaya</h1>
      <p>
        Hi, I am Milan Rokaya, I am a Web developer and currently pursuing
        BSc.CSIT from Trivuwan University. I love coding and solving challenges.
        Besides that I like to travel and play guitar.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <ul className="skills">
      {skills.map((skill) => (
        <Skill skill={skill.skill} key={skill.id} level={skill.level} />
      ))}
    </ul>
  );
}

function Skill({ skill, level }) {
  return (
    <li
      className={`skill
        ${
          level === "Beginner"
            ? "beginner"
            : level === "Medium"
            ? "medium"
            : level === "Advanced"
            ? "advanced"
            : ""
        }`}
    >
      {skill}
    </li>
  );
}
