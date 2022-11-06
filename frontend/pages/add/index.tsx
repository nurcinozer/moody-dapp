import { useRef, useState } from "react";
import {
  Button,
  Footer,
  FormInput,
  FormSelect,
  Navbar,
} from "../../components";
import getContract from "../../utils/contract";
import { categories } from "../../consts";
import { useRouter } from "next/router";
import saveToIPFS from "../../utils/saveToIPFS";
import { TiUpload } from "react-icons/ti";

type Data = {
  mood: string;
  message: string;
  category: string;
  date: string;
};

export default function Add() {
  const [category, setCategory] = useState(categories[0].value);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File>();
  const [uploadData] = useState<Data>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const imageRef = useRef<HTMLInputElement>(null);

  const uploadImage = async () => {
    setLoading(true);
    const cid = await saveToIPFS(image);
    setLoading(false);
    return cid;
  };

  const handleSubmit = async () => {
    const imageCID = await uploadImage();
    await saveMood({
      mood: imageCID,
      message,
      category,
      date: new Date().toISOString(),
    });
    router.push("/");
  };

  const saveMood = async (data = uploadData) => {
    const contract = await getContract();
    if (!contract || !data) return;
    await contract.uploadMood(
      data.mood,
      data.message,
      data.category,
      data.date
    );
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
              <label className="leading-7 text-sm">Image</label>
              <div
                onClick={() => {
                  imageRef.current?.click();
                }}
                className="cursor-pointer border-2 w-full border-dashed rounded-md h-full p-5 items-center justify-center flex">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    className="w-full h-full"
                    onClick={() => {
                      imageRef.current?.click();
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <TiUpload />
                    <span className="block text-gray-400">Upload image</span>
                  </div>
                )}
              </div>
              <FormInput
                type="file"
                accept="image/*"
                className="hidden"
                innerRef={imageRef}
                onChange={(e) => {
                  if (e.target.files) setImage(e.target.files[0]);
                }}
              />
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
