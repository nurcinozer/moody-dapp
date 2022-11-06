import { Player } from "@livepeer/react";
import { id } from "ethers/lib/utils";
import { useState, useEffect } from "react";
import { ApolloClient } from "../../clients";
import { Spinner, Navbar, Footer } from "../../components";
import { CURRENT_AUTHORS_MOODS } from "../../queries";
import { useAccount } from "wagmi";
import { Mood } from "../../types";
import Card from "../../components/Card";

export default function MyMoods() {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [loading, setLoading] = useState(true);

  const { address } = useAccount();

  const fetchMoods = async () => {
    setLoading(true);
    await ApolloClient.query({
      query: CURRENT_AUTHORS_MOODS,
      variables: {
        first: 1000,
        skip: 0,
        orderBy: "createdAt",
        orderDirection: "desc",
        author: address,
      },
      fetchPolicy: "network-only",
    })
      .then(({ data }) => {
        setMoods(data.moods);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMoods();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-5">
        {moods.map((mood: Mood) => (
          <Card key={mood.id} mood={mood} />
        ))}
      </div>
      <Footer />
    </>
  );
}
