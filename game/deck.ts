import { Card } from "./card";

export class Deck {
    private cards: Card[] = [];

    constructor(private suits: string[], private ranks: string[]) {
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }

    drawCard() {
        if (this.cards.length === 0) {
            throw new Error('The deck is empty');
        }
        return this.cards.pop() as Card;
    }

    dealHand(numCards: number): Card[] {
        const hand: Card[] = [];
        for (let i = 0; i < numCards; i++) {
            hand.push(this.drawCard());
        }
        return hand;
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    size() {
        return this.cards.length;
    }
}