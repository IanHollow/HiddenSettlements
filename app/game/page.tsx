export const runtime = "edge";

import CardComponent from "@/components/CardComponent";
import CardDeck from "@/components/CardDeck";
import DiscardPile from "@/components/DiscardPile";
import ScoringColumns from "@/components/ScoringColumns";
import { Board } from "@/game/board";

export default function Home() {
  // define suits and ranks
  const suits = ["Red", "Green", "Blue", "White", "Yellow"];
  const ranks = [];
  for (let i = 0; i < 3; i++) {
    ranks.push("Handshake");
  }
  for (let i = 2; i < 11; i++) {
    ranks.push(i.toString());
  }

  // create game board
  const board = new Board(suits, ranks);

  // player 1 draws 5 cards
  for (let i = 0; i < 5; i++) {
    board.drawCard(0);
  }

  // add card to scoring column
  board.scoreCard(0, 0, 0);
  //board.scoreCard(0, 0, 0);

  // get scoring columns
  const scoringColumnsP1 = board.viewScoringColumns(0);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <ScoringColumns scoringColumns={scoringColumnsP1} />
    </main>
  );
}
