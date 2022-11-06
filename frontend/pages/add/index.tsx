import { Button, FormInput, FormSelect } from "../../components";

export default function Add() {
  const categories = [
    { value: "1", label: "Happy" },
    { value: "2", label: "Sad" },
    { value: "3", label: "Angry" },
  ];

  return (
    <div className="container px-5 py-5 md:py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-colorful">
        <h2 className="text-lg mb-1 font-medium title-font text-can-can">
          Share your mood
        </h2>
        <div className="my-5">
          <div className="my-3">
            <label className="leading-7 text-sm">Category</label>
            <FormSelect options={categories} />
          </div>
          <div className="my-3">
            <label className="leading-7 text-sm">Description</label>
            <FormInput placeholder="Description" />
          </div>
          <div className="my-3">
            <label className="leading-7 text-sm">Audio</label>
            <FormInput type="file" placeholder="Audio" accept="audio/*" />
          </div>
        </div>
        <Button type="submit" size="large">
          Share
        </Button>
      </div>
    </div>
  );
}
