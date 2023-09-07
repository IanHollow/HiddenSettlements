import CardComponent from "./CardComponent";

export default function DiscardPile({
  empty,
  suit,
  rank,
}: {
  empty: boolean;
  suit: string;
  rank: string;
}) {
  if (empty) {
    return (
      <div className="rounded-lg border border-black">
        {/* h-42 = 10.5rem & w-30 = 7.5rem */}
        <div className=" flex h-28 w-20 items-center justify-center text-xl font-bold md:h-[10.5rem] md:w-[7.5rem] md:text-2xl lg:h-56 lg:w-40 lg:text-3xl">
          <div className="h-auto w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="0.5"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    );
  } else {
    return <CardComponent suit={suit} rank={rank} />;
  }
}
