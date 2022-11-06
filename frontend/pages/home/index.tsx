import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { Category, Footer, Hero, Navbar, Spinner } from "../../components";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { ApolloClient } from "../../clients";
import { GET_ALL_MOODS } from "../../queries";
import { Mood } from "../../types";
import { categoryValues } from "../../consts";

export default function Home() {
  const router = useRouter();

  const { isConnected } = useAccount();

  const [moods, setMoods] = useState<Mood[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [query] = useState<String>("");
  const [category] = useState<String>("all moods");
  const [categories, setCategories] = useState<String[]>(categoryValues);

  const fetchMoods = async () => {
    setLoading(true);
    ApolloClient.query({
      query: GET_ALL_MOODS,
      variables: {
        first: 1000,
        skip: 0,
        orderBy: "createdAt",
        orderDirection: "desc",
        where: {
          ...(query && {
            message_contains_nocase: query,
          }),
          ...(category && {
            category_contains_nocase: category,
          }),
        },
      },
      fetchPolicy: "network-only",
    }).then(({ data }) => {
      setMoods(data.moods);
      setCategories(data.moods.map((mood: Mood) => mood.category));
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMoods();
  }, [query, category]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <div className="flex flex-wrap justify-center pb-16 gap-3 max-w-2xl mx-auto">
          {categories.map((category: String, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-5">
          {moods.map((mood: Mood) => (
            <Card key={mood.id} mood={mood} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
