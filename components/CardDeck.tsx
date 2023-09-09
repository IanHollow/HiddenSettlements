import CardComponent from "./CardComponent";

export default function CardDeck({ empty = false }: { empty?: boolean }) {
  return (
    <CardComponent>
      <div className="h-[90%] w-[85%] rounded-[0.25rem] bg-stone-300"></div>
    </CardComponent>
  );
}
