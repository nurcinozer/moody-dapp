import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { Footer, Hero, Navbar } from "../../components";
import TagList from "../../components/Tag";
import Card from "../../components/Card";
import { useEffect } from "react";

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
  const router = useRouter();

  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <TagList tags={moods} className="mx-auto" />
        <Card cards={cards} />
      </div>
      <Footer />
    </div>
  );
}
