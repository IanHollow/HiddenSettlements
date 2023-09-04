import { Card } from "./card";

// A face up discard pile which you can only view the top card
export class FaceUpDiscard {
    private cards: Card[] = [];

    constructor(private suit: string, private scoring: boolean) {
        this.cards = [];
    }

    // Add a card to the top of the pile
    addToTop(card: Card): void {
        this.cards.push(card);
    }

    // View alls cards in discard
    viewDiscard(): Card[] {
        // Check if this is a scoring discard
        if (this.scoring === false) {
            throw new Error('Only allowed to view top card in non-scoring discard');
        }

        return this.cards
    }

    // View the top card without removing it
    viewTopCard(): Card {
        if (this.isEmpty()) {
            throw new Error('The discard is empty');
        }
        return this.cards[this.size() - 1];
    }

    // Take the top card from the pile
    takeTopCard(): Card {
        if (this.isEmpty()) {
            throw new Error('The discard is empty');
        }
        return this.cards.pop() as Card;
    }

    // Check if the pile is empty
    isEmpty(): boolean {
        return this.size() === 0;
    }

    // Get the number of cards in the pile
    size(): number {
        return this.cards.length;
    }

    // Get the suit of the Discard Pile
    getSuit(): string {
        return this.suit;
    }
}