import { Card } from "@/game/card";
import CardComponent from "./CardComponent";
import { ScoringColumn } from "@/game/scoringColumn";

export default function ScoringColumns({
  scoringColumns,
}: {
  scoringColumns: ScoringColumn[];
}) {
  return (
    <div className="flex items-center justify-center">
      {scoringColumns.map((scoringCol: ScoringColumn, scoreIndex: number) => (
        <div key={scoreIndex}>
          {scoringCol.viewDiscard().map((card: Card, cardIndex: number) => (
            <div key={cardIndex} style={{ zIndex: cardIndex }}>
              <CardComponent suit={card.suit} rank={card.rank} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
