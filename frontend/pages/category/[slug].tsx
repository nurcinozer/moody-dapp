import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ApolloClient } from "../../clients";
import { Navbar, Footer, Spinner, Player } from "../../components";
import Card from "../../components/Card";
import { GET_MOODS_BY_CATEGORY, GET_MOOD_BY_ID } from "../../queries";
import { Mood } from "../../types";

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;
  const [moods, setMoods] = useState<Mood[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMoods = async () => {
    setLoading(true);
    await ApolloClient.query({
      query: GET_MOODS_BY_CATEGORY,
      variables: {
        first: 1000,
        skip: 0,
        orderBy: "createdAt",
        orderDirection: "desc",
        category: slug,
      },
      fetchPolicy: "network-only",
    })
      .then(({ data }) => {
        setMoods(data.moods);
        console.log(data.moods);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMoods();
  }, [slug]);

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
