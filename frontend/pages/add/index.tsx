import { useState } from "react";
import {
  AudioUpload,
  Button,
  Footer,
  FormInput,
  FormSelect,
  Navbar,
} from "../../components";
import { useCreateAsset } from "@livepeer/react";
import getContract from "../../utils/contract";
import { categories } from "../../consts";

type Data = {
  mood: string;
  message: string;
  category: string;
  date: string;
};

export default function Add() {
  const { mutate: createAsset, data: asset } = useCreateAsset();

  const [category, setCategory] = useState(categories[0].value);
  const [message, setMessage] = useState("");
  const [audio, setAudio] = useState<File>();
  const [uploadData] = useState<Data>();

  const uploadAudio = async () => {
    createAsset({
      name: message,
      file: audio,
      url: "https://livepeer.studio",
    });
  };

  const saveAudio = async (data = uploadData) => {
    let contract = await getContract();

    if (!contract || !data) return;

    console.log(data);

    await contract.uploadMood(
      data.mood,
      data.message,
      data.category,
      data.date
    );
  };

  const handleSubmit = async () => {
    await uploadAudio();
    if (asset) {
      await saveAudio({
        mood: asset.id,
        message,
        category,
        date: new Date().toISOString(),
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container px-5 py-5 md:py-10 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-colorful">
          <h2 className="text-2xl mb-1 font-medium title-font text-can-can">
            Share your mood
          </h2>
          <div className="my-5">
            <div className="my-3">
              <label className="leading-7 text-sm">Category</label>
              <FormSelect
                options={categories}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="leading-7 text-sm">Message</label>
              <FormInput
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="leading-7 text-sm">Audio</label>
              <AudioUpload setAudio={setAudio} />
            </div>
          </div>
          <Button type="submit" size="large" onClick={handleSubmit}>
            Share
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
