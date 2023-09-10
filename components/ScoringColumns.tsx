"use client";
import { Card } from "@/game/card";
import CardComponent from "./CardComponent";
import { ScoringColumn } from "@/game/scoringColumn";
import { useEffect, useState } from "react";

export default function ScoringColumns({
  scoringColumns,
}: {
  scoringColumns: ScoringColumn[];
}) {
  // function to return the translate amount based on the screen width
  const getTranslateAmount = () => {
    // return rem amount current values are based on 14px font size
    if (window.innerWidth > 1024 - 1) {
      return 162 / 14; // card size is 196px
    } else if (window.innerWidth > 768 - 1) {
      return 119 / 14; // card size is 147px
    } else {
      return 76 / 14; // card size is 98px
    }
  };

  // set translate amount
  const [translateAmount, setTranslateAmount] = useState(getTranslateAmount());

  // function to update translate amount on screen resize
  const handleResize = () => {
    setTranslateAmount(getTranslateAmount());
  };

  // update the translate amount on screen resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="felx-row flex space-x-6">
      {scoringColumns.map((scoringCol: ScoringColumn, scoreIndex: number) => (
        <div
          key={scoreIndex}
          className="border-gray h-28 w-20 rounded-lg border md:h-[10.5rem] md:w-[7.5rem] md:text-2xl lg:h-56 lg:w-40"
        >
          {scoringCol.viewAllCards().map((card: Card, cardIndex: number) => (
            // create a cascade of cards
            <div
              key={cardIndex}
              style={{
                transform: `translateY(${cardIndex * -translateAmount}rem)`,
              }}
            >
              <CardComponent suit={card.suit} rank={card.rank} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
