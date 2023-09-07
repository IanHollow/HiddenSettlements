export default function CardDeck() {
  return (
    <div className="rounded-lg border border-black">
      {/* h-42 = 10.5rem & w-30 = 7.5rem */}
      <div className="flex h-28 w-20 items-center justify-center md:h-[10.5rem] md:w-[7.5rem] lg:h-56 lg:w-40">
        <div className="h-[90%] w-[85%] rounded-[0.25rem] bg-stone-300"></div>
      </div>
    </div>
  );
}
