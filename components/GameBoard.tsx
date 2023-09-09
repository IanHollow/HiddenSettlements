"use client";
import CardDeck from "./CardDeck";
import { Board } from "@/game/board";
import DiscardPile from "./DiscardPile";
import { useState } from "react";

export default function GameBoard() {
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
  const gameBoard = new Board(suits, ranks);

  // create discard piles
  const [discardPiles, setDiscardPiles] = useState(
    gameBoard.viewDiscardPiles(),
  );

  return (
    <div>
      {/* Opponent Scoring Columns */}

      {/* Card Deck & Discard Piles*/}
      <div>
        {/* Card Deck */}
        <CardDeck />
        {/* Discard Piles */}
        {discardPiles.map((discardPile) => {
          const topCard = discardPile.viewTopCard();
          return (
            <DiscardPile
              empty={discardPile.isEmpty()}
              suit={topCard.suit}
              rank={topCard.rank}
            />
          );
        })}
      </div>
      {/* Player Scoring Columns */}
    </div>
  );
}
