type BulletListProps = {
  items: string[];
};

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="list-disc text-black mt-5 mb-5 ml-5 text-xs xs:text-sm 2xl:text-[1vw] 2xl:leading-8">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
