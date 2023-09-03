class Card {
    constructor(public suit: string, public rank: string) { }

    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}

class Deck {
    private cards: Card[] = [];

    constructor() {
        const suits = ["Red", "Green", "Blue", "White", "Yellow"];
        const ranks = [
            "Handshake",
            "Handshake",
            "Handshake",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
        ];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }

    draw() {
        if (this.cards.length === 0) {
            throw new Error('The deck is empty');
        }
        return this.cards.pop() as Card;
    }

    dealHand(numCards: number): Card[] {
        const hand: Card[] = [];
        for (let i = 0; i < numCards; i++) {
            hand.push(this.draw());
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

// Usage example:
const deck = new Deck();
deck.shuffle();

console.log(`Deck size: ${deck.size()}`);

const hand = deck.dealHand(5);
console.log('Hand:');
for (const card of hand) {
    console.log(card.toString());
}

console.log(`Deck size after dealing: ${deck.size()}`);