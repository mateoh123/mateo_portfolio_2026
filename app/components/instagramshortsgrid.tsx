type InstagramShortsGridProps = {
  urls: string[];
};

export default function InstagramShortsGrid({
  urls,
}: InstagramShortsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 mt-6">
      {urls.map((url) => (
        <div key={url} className="relative w-full aspect-[9/16]">
          <iframe
            src={url}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}
