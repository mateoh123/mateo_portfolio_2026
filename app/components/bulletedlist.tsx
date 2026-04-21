type BulletListProps = {
  items: string[];
};

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="list-disc text-black mt-5 mb-5 ml-5 text-sm xs:text-base ipad:text-lg 2xl:text-[1.5vw]">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
