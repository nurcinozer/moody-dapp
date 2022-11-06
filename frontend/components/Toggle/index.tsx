import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Spinner } from "..";
import { TiAdjustBrightness, TiWeatherNight } from "react-icons/ti";

export const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  // set theme dark on load
  useEffect(() => {
    setTheme("dark");
    setLoading(false);
  }, [setTheme]);

  if (loading) return <Spinner />;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-4 order-2 md:order-3 mt-4 md:mt-0 md:ml-4 bg-can-can dark:bg-gray-800 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <TiAdjustBrightness className="fill-white" />
      ) : (
        <TiWeatherNight className="fill-gray-800" />
      )}
    </button>
  );
};
