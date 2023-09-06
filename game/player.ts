import { Card } from "./card";
import { Discard } from "./discard";

export class Player {
    private hand: Card[] = [];
    private scoringColumns: Discard[] = [];

    constructor(private suits: string[]) {
        this.hand = [];

        // Create scoring columns
        for (let i = 0; i < this.suits.length; i++) {
            this.scoringColumns.push(new Discard(this.suits[i], true));
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

    // Swap the positions of two cards in the player's hand
    swapCardOrder(index1: number, index2: number): void {
        if (index1 < 0 || index1 >= this.hand.length || index2 < 0 || index2 >= this.hand.length) {
            throw new Error("Invalid indices for swapping cards.");
        }

        // swap the cards
        [this.hand[index1], this.hand[index2]] = [this.hand[index2], this.hand[index1]]
    }

    // Place a card in a discard pile or scoring column
    placeCardInDiscardPile(cardIndex: number, discardPile: Discard): void {
        // Remove the card from the player's hand
        // removeCard will check if the cardIndex is acceptable
        let card = this.removeCard(cardIndex);
        // Add the card to the specified discard pile
        discardPile.addToTop(card);
    }
}