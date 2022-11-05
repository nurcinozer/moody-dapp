import { Emoji } from "../Emoji";

export const Hero = () => {
  return (
    <div className="pb-12 text-center text-3xl leading-6">
      <h1
        className="tracking-tighter mb-4 dark:text-can-can text-blue-jeans"
        data-aos="zoom-y-out">
        Share your mood,{" "}
      </h1>
      <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-can-can dark:to-pigeon-post from-blue-jeans to-pigeon-post">
        own your mood{" "}
      </span>
      <Emoji symbol="💭" label="thought bubble" />
    </div>
  );
};
