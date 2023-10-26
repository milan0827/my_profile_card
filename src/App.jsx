import Card from "./Components/Card";
import "./App.css";
import CardContainer from "./Components/CardContainer";
import Image from "./Assets/myself.png";

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
      <Card>
        <img src={Image} alt="my photo" />
        <CardContainer skills={skills} />
      </Card>
    </div>
  );
}
