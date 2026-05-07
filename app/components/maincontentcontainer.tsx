type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainContentContainer({
  children,
  className = "",
}: Props) {
  return (
    <main
      className={`
        border-15
        relative
        md:h-screen
        grid
        grid-cols-1
        md:grid-cols-[2fr_1fr]
        bg-white
        md:overflow-hidden
        items-start
        ${className}
      `}
    >
      {children}
    </main>
  );
}
