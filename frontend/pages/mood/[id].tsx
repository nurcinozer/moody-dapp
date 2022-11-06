import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ApolloClient } from "../../clients";
import { Navbar, Footer, Spinner, Player } from "../../components";
import { GET_MOOD_BY_ID } from "../../queries";
import { Mood as MoodType } from "../../types";

export default function Mood() {
  const router = useRouter();
  const { id } = router.query;
  const [mood, setMood] = useState<MoodType | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMood = async () => {
    setLoading(true);
    await ApolloClient.query({
      query: GET_MOOD_BY_ID,
      variables: {
        id: id,
      },
      fetchPolicy: "network-only",
    })
      .then(({ data }) => {
        setMood(data.moods[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMood();
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
      {mood && (
        <div className="container px-5 py-5 md:py-10 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-colorful">
            <Player id={mood.hash} />
            <h2 className="text-2xl mb-1 font-medium title-font text-can-can mt-5">
              {mood.category}
            </h2>
            <p className="leading-relaxed mb-5">{mood.message}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
