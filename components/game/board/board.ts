import { Card } from "../card/card";
import { Deck } from "../deck/deck";
import { Discard } from "../discard/discard";
import { Player } from "../player/player";

class Board {
    private deck: Deck;
    private discardPiles: Discard[] = [];
    private playerHands: Player[] = [];

    constructor(private suits: string[], private ranks: string[]) {

        this.deck = new Deck(this.suits, this.ranks);
        this.deck.shuffle();

        // Create discard piles
        for (let i = 0; i < this.suits.length; i++) {
            this.discardPiles.push(new Discard(this.suits[i], false));
        }

        // Create two player hands
        for (let i = 0; i < 2; i++) {
            this.playerHands.push(new Player(this.suits));
        }
    }

    // Draw a card from the deck and add it to a player's hand
    drawCardToPlayer(playerIndex: number): void {
        const card = this.deck.drawCard();
        if (card !== undefined) {
            this.playerHands[playerIndex].addToHand(card);
        }
    }

    // View the top card of a specific discard pile
    viewTopDiscardCard(pileIndex: number): Card {
        if (pileIndex < 0 || pileIndex > 4) {
            throw new Error(`Discard pile of index: ${pileIndex} does not exist`);
        }
        return this.discardPiles[pileIndex].viewTopCard();
    }

    // Take the top card from a specific discard pile
    takeTopDiscardCard(pileIndex: number): Card | undefined {
        if (pileIndex < 0 || pileIndex > 4) {
            throw new Error(`Discard pile of index: ${pileIndex} does not exist`);
        }
        return this.discardPiles[pileIndex].takeTopCard();
    }

    // Check if a specific discard pile is empty
    isDiscardPileEmpty(pileIndex: number): boolean {
        if (pileIndex < 0 || pileIndex > 4) {
            throw new Error(`Discard pile of index: ${pileIndex} does not exist`);
        }
        return this.discardPiles[pileIndex].isEmpty();
    }

    // Get the number of cards in a specific discard pile
    discardPileSize(pileIndex: number): number {
        if (pileIndex < 0 || pileIndex > 4) {
            throw new Error(`Discard pile of index: ${pileIndex} does not exist`);
        }
        return this.discardPiles[pileIndex].size();
    }

    // View a player's hand
    viewPlayerHand(playerIndex: number): Card[] {
        return this.playerHands[playerIndex].viewHand();
    }

    // Remove a specific card from a player's hand
    removeCardFromHand(playerIndex: number, cardIndex: number): void {
        this.playerHands[playerIndex].removeCard(cardIndex);
    }

    // Swap the positions of two cards in a player's hand
    swapCardOrderInPlayerHand(playerIndex: number, index1: number, index2: number): void {
        this.playerHands[playerIndex].swapCardOrder(index1, index2);
    }

    // Get the number of cards left in the deck
    deckSize(): number {
        return this.deck.size();
    }
}

// Example usage:
const suits = ["Red", "Green", "Blue", "White", "Yellow"];
const ranks = [];
for (let i = 0; i < 3; i++) {
    ranks.push("Handshake");
}
for (let i = 2; i < 11; i++) {
    ranks.push(i.toString());
}

const gameBoard = new Board(suits, ranks);