export class Card {
    constructor(public suit: string, public rank: string) { }

    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}