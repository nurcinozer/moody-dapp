import Link from "next/link";

type TagProps = {
  children: React.ReactNode;
};

const Tag = ({ children }: TagProps) => {
  return (
    <Link
      className="bg-pigeon-post rounded-full px-5 py-1 text-sm font-semibold text-blue-jeans mr-2"
      href="">
      {children}
    </Link>
  );
};

type TagListProps = {
  tags: string[];
  className?: string;
};

const TagList = ({ tags, className }: TagListProps) => {
  return (
    <div
      className={`flex flex-wrap justify-center pb-16 gap-3 max-w-2xl ${className}`}>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </div>
  );
};

export { Tag, TagList };
