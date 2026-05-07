type Props = {
  children: React.ReactNode;
  className?: string;
  sectionClassName?: string;
};

export default function RightContentContainer({
  children,
  className = "",
  sectionClassName = "",
}: Props) {
  return (
    <div
      className={`flex flex-col md:sticky md:top-0 md:h-screen ${className}`}
    >
      <section
        className={`p-5 md:overflow-y-auto md:flex-1 md:min-h-0 ${sectionClassName}`}
      >
        {children}
      </section>
    </div>
  );
}
