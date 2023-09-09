import { Card } from "./card";

// Discard Pile that can only view top card
export class Discard {
    protected cards: Card[] = [];

    constructor(private suit: string) { }

    // Add a card to the top of the pile
    addCard(card: Card): void {
        this.cards.push(card);
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