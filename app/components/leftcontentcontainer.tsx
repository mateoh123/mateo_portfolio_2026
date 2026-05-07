type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function LeftContentContainer({
  children,
  className = "",
}: Props) {
  return (
    <div className={`p-2 md:overflow-y-auto md:h-full ${className}`}>
      {children}
    </div>
  );
}
