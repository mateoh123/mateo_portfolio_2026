type VideoGridProps = {
  ids: string[];
};

export default function InstaVideoGrid({ ids }: VideoGridProps) {
  return (
    <div className="flex flex-row flex-wrap ipadSM:gap-1 md:gap-4 mt-4">
      {ids.map((id) => (
        <div
          key={id}
          className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(49%-8px)] aspect-[9.6/16]"
        >
          <iframe
            src={`https://www.instagram.com/reel/${id}/embed`}
            className="w-full h-full"
            allowTransparency={true}
            allow="encrypted-media"
          />
        </div>
      ))}
    </div>
  );
}
