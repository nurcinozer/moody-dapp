import Tag from "../Tag";

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

interface CardList {
  title: string;
  description: string;
  tags: string[];
}

const CardList = ({ cards }: { cards: CardList[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {cards.map((card, index) => (
        <Card key={index}>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p className="text-gray-500 mt-2">{card.description}</p>
            <div className="flex flex-wrap mt-4">
              <Tag key={index} tags={card.tags} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
