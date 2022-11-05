import { Hero } from "../components";
import Card from "../components/Card";
import TagList from "../components/Tag";

export const moods = [
  "all moods",
  "happy 🥳",
  "sad 😢",
  "angry 😡",
  "confused 🤔",
];

export const cards = [
  {
    title: "Happy",
    description: "I'm happy because I'm learning Next.js",
    tags: ["happy"],
  },
  {
    title: "Sad",
    description: "I'm sad because I'm learning Next.js",
    tags: ["sad"],
  },
  {
    title: "Angry",
    description: "I'm angry because I'm learning Next.js",
    tags: ["angry"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TagList tags={moods} className="mx-auto" />
      <Card cards={cards} />
    </>
  );
}
