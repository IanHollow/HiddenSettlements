export default function CardComponent({
  suit,
  rank,
}: {
  suit: string;
  rank: string;
}) {
  return (
    <div className="rounded-lg border border-black">
      <div className="relative h-28 w-20 text-xl font-bold md:h-40 md:w-28 md:text-2xl lg:h-56 lg:w-40 lg:text-3xl">
        <h1 className="absolute left-1 top-0">{rank}</h1>
        <h1 className="flex h-full items-center justify-center text-lg md:text-xl lg:text-2xl">
          {suit}
        </h1>
        <h1 className="absolute bottom-0 right-1 rotate-180">{rank}</h1>
      </div>
    </div>
  );
}
