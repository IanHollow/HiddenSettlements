"use client";

import CardComponent from "@/components/CardComponent";
import CardDeck from "@/components/CardDeck";
import DiscardPile from "@/components/DiscardPile";
import ScoringColumns from "@/components/ScoringColumns";
import { Board } from "@/game/board";
import GameBoard from "@/components/GameBoard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <GameBoard />
    </main>
  );
}
