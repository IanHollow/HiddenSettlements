import CardComponent from "@/components/CardComponent";
import CardDeck from "@/components/CardDeck";
import DiscardPile from "@/components/DiscardPile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <CardComponent suit="Red" rank="5" />
      <CardDeck />
      <DiscardPile empty={true} suit="Red" rank="5" />
    </main>
  );
}
