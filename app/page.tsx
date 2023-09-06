import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link
        className="border border-black bg-stone-50 px-3 py-2 text-3xl font-medium text-black hover:bg-black hover:text-white"
        href="/game"
      >
        PLAY NOW
      </Link>
    </main>
  );
}
