import CardComponent from "./CardComponent";

export default function DiscardPile({
  empty = false,
  suit = "",
  rank = "",
}: {
  empty?: boolean;
  suit?: string;
  rank?: string;
}) {
  return empty ? (
    // Discard Pile is empty
    <CardComponent>
      <div className="h-auto w-3/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="1"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </CardComponent>
  ) : (
    // Discard Pile is not empty
    <CardComponent suit={suit} rank={rank} />
  );
}
