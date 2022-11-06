import Link from "next/link";
import { Player, Tag } from "..";
import { Mood } from "../../types";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div
      className={`bg-transparent border-2 dark:border-gray-500 border-gray-300 rounded-2xl shadow-colorful p-8 ${className}`}
      {...props}>
      {children}
    </div>
  );
};

const Mood = ({ mood }: { mood: Mood }) => {
  return (
    <Link href={`/mood/${mood.id}`} className="cursor-pointer">
      <Card>
        <div className="flex flex-col">
          <Player id={mood.hash} />
          <p className="dark:text-gray-400 mt-2">
            {mood.message.length > 100
              ? mood.message.slice(0, 100) + "..."
              : mood.message}
          </p>
          <div className="flex flex-wrap mt-4">
            <Tag>{mood.category}</Tag>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Mood;
