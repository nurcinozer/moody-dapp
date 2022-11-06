import Link from "next/link";

type TagProps = {
  children: React.ReactNode;
};

const Tag = ({ children }: TagProps) => {
  return (
    <div className="bg-pigeon-post rounded-full px-5 py-1 text-sm font-semibold text-blue-jeans mr-2">
      {children}
    </div>
  );
};

const Category = ({ category }: { category: String }) => {
  return (
    <Link href={`/category/${category}`}>
      <Tag>{category}</Tag>
    </Link>
  );
};

export { Tag, Category };
