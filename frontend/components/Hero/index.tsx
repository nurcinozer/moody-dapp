import { Emoji } from "../Emoji";

export const Hero = () => {
  return (
    <div className="text-center text-3xl leading-8 mb-5">
      <h1
        className="tracking-tighter mb-4 dark:text-can-can text-blue-jeans"
        data-aos="zoom-y-out">
        Share your mood,{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-can-can dark:to-pigeon-post from-blue-jeans to-pigeon-post">
          own your mood{" "}
        </span>
        <Emoji symbol="💭" label="thought bubble" />
      </h1>
    </div>
  );
};
