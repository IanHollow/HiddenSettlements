"use client";
import CardDeck from "./CardDeck";
import { Board } from "@/game/board";
import DiscardPile from "./DiscardPile";
import ScoringColumns from "./ScoringColumns";
import { useState } from "react";

export default function GameBoard() {
  // define suits and ranks
  const suits = ["Red", "Green", "Blue", "White", "Yellow"];
  const ranks = [];
  for (let i = 0; i < 3; i++) {
    ranks.push("HS");
  }
  for (let i = 2; i < 11; i++) {
    ranks.push(i.toString());
  }

  // create game board
  const gameBoard = new Board(suits, ranks);

  // create discard piles
  const [discardPiles, setDiscardPiles] = useState(
    gameBoard.viewDiscardPiles(),
  );

  // deal a hand to each player
  gameBoard.dealHand(0);
  gameBoard.dealHand(0);
  gameBoard.dealHand(1);

  // place cards in the scoring columns
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);
  gameBoard.scoreCard(0, 0, 0);

  return (
    <div className="flex flex-row items-center justify-center space-x-6">
      {/* Card Deck */}
      <CardDeck />
      <div className="flex flex-col items-center justify-center">
        {/* Opponent Scoring Columns */}
        <div className="rotate-180">
          <ScoringColumns scoringColumns={gameBoard.viewScoringColumns(1)} />
        </div>

        {/* Discard Piles */}
        <div className="flex flex-row items-center justify-center space-x-6">
          {discardPiles.map((discardPile) => {
            // check if discard pile is empty
            if (discardPile.isEmpty()) {
              return <DiscardPile />;
            }

            // get top card from discard pile
            const topCard = discardPile.viewTopCard();

            // display top card
            return (
              <DiscardPile
                empty={true}
                suit={topCard.suit}
                rank={topCard.rank}
              />
            );
          })}
        </div>

        {/* Player Scoring Columns */}
        <ScoringColumns scoringColumns={gameBoard.viewScoringColumns(0)} />
      </div>
    </div>
  );
}
