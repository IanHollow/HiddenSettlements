import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-2">
      <main className="background-gradient mt-20 flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:mt-20">
        <div className="text-center">
          <Link
            className="mt-8 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-500 sm:mt-10"
            href="/game"
          >
            Play Now
          </Link>
        </div>
      </main>
    </div>
  );
}
