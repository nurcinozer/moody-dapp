import { useRef, useState } from "react";
import { TiUpload } from "react-icons/ti";
import { FormInput } from "../Input";

export const AudioUpload = ({ setAudio }: any) => {
  const [audio, setAudioState] = useState<string>("");

  const audioRef = useRef<HTMLInputElement>(null);

  const handleAudio = (e: any) => {
    setAudioState(URL.createObjectURL(e.target.files[0]));
    setAudio(e.target.files[0]);
    console.log(audio);
  };

  return (
    <div
      onClick={() => audioRef.current?.click()}
      className="border-2 w-full border-dashed rounded-md h-14 items-center justify-center flex">
      {audio ? (
        <audio src={audio} controls className="w-full h-full" />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <TiUpload />
          <span className="block text-gray-400">Upload audio</span>
        </div>
      )}
      <FormInput
        type="file"
        accept="audio/*"
        className="hidden"
        innerRef={audioRef}
        onChange={handleAudio}
      />
    </div>
  );
};
