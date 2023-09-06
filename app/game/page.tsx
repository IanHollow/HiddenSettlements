import CardComponent from "@/components/CardComponent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <CardComponent suit="Red" rank="5" />
    </main>
  );
}
