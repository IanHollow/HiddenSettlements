import { Discard } from "./discard";
import { Card } from "./card";


export class ScoringColumn extends Discard {
    constructor(suit: string) {
        super(suit);

    }

    // View alls cards in scoring column
    viewAllCards(): Card[] {
        return this.cards;
    }
}