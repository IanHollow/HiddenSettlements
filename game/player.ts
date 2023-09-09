import { Card } from "./card";
import { Discard } from "./discard";
import { ScoringColumn } from "./scoringColumn";

export class Player {
    private hand: Card[] = [];
    private scoringColumns: ScoringColumn[] = [];

    constructor(suits: string[]) {
        this.hand = [];

        // Create scoring columns
        for (let i = 0; i < suits.length; i++) {
            this.scoringColumns.push(new ScoringColumn(suits[i]));
        }
    }

    // Add a card to the player's hand
    addToHand(card: Card): void {
        this.hand.push(card);
    }

    // View all cards in the player's hand
    viewHand(): Card[] {
        return this.hand;
    }

    // Remove a specific card from the player's hand
    removeCard(cardIndex: number): Card {
        // Check if the card being refered to exisits
        if (cardIndex < 0 || cardIndex > this.hand.length - 1) {
            throw new Error("Card not found in the player's hand.");
        }

        // Remove the card and return it
        return this.hand.splice(cardIndex, 1)[0];
    }

    // View all scoring columns
    viewScoringColumns(): ScoringColumn[] {
        return this.scoringColumns;
    }

    // Place a card in a discard pile
    discardCard(cardIndex: number, discardPile: Discard): void {
        // Remove the card from the player's hand
        // removeCard will check if the cardIndex is acceptable
        let card = this.removeCard(cardIndex);
        // Add the card to the specified card pile
        discardPile.addCard(card);
    }

    // Place a card in a scoring column
    scoreCard(cardIndex: number, scoringColumnIndex: number): void {
        // Remove the card from the player's hand
        // removeCard will check if the cardIndex is acceptable
        let card = this.removeCard(cardIndex);
        // Add the card to the specified scoring column
        this.scoringColumns[scoringColumnIndex].addCard(card);
    }
}