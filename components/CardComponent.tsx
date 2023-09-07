export default function CardComponent({
  children = null,
  suit = "",
  rank = "",
}: {
  children?: React.ReactNode;
  suit?: string;
  rank?: string;
}) {
  return (
    <div className="rounded-lg border border-black">
      {/* h-42 = 10.5rem & w-30 = 7.5rem */}
      <div className="relative flex h-28 w-20 items-center justify-center text-xl font-bold md:h-[10.5rem] md:w-[7.5rem] md:text-2xl lg:h-56 lg:w-40 lg:text-3xl">
        <h1 className="absolute left-2 top-1">{rank}</h1>
        <h1 className="text-lg md:text-xl lg:text-2xl">{suit}</h1>
        <h1 className="absolute bottom-1 right-2 rotate-180">{rank}</h1>
        {children}
      </div>
    </div>
  );
}
