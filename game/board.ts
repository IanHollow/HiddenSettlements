import { Card } from "./card";
import { Deck } from "./deck";
import { Discard } from "./discard";
import { Player } from "./player";
import { ScoringColumn } from "./scoringColumn";

export class Board {
    private deck: Deck;
    private discardPiles: Discard[] = [];
    private players: Player[] = [];

    // Game can technically be played with more than 2 players but it's not recommended
    constructor(private suits: string[], private ranks: string[], private numberOfPlayers: number = 2) {
        // Create deck
        this.deck = new Deck(this.suits, this.ranks);
        this.deck.shuffle();

        // Create discard piles
        for (let i = 0; i < this.suits.length; i++) {
            this.discardPiles.push(new Discard(this.suits[i]));
        }

        // Create players
        for (let i = 0; i < this.numberOfPlayers; i++) {
            this.players.push(new Player(this.suits));
        }
    }

    // view all discard piles
    viewDiscardPiles(): Discard[] {
        return this.discardPiles;
    }

    // view scoring columns
    viewScoringColumns(playerIndex: number): ScoringColumn[] {
        return this.players[playerIndex].viewScoringColumns();
    }

    // place card in discard pile
    placeCardInDiscardPile(card: Card, discardPile: Discard): void {
        discardPile.addCard(card);
    }

    // place card in scoring column
    scoreCard(playerIndex: number, cardIndex: number, scoringColumnIndex: number): void {
        // check playerIndex
        if (playerIndex < 0 || playerIndex > this.players.length - 1) {
            throw new Error("Player not found.");
        }
        // scoreCard will check if the cardIndex is acceptable
        this.players[playerIndex].scoreCard(cardIndex, scoringColumnIndex);
    }

    // player draws a card
    drawCard(playerIndex: number): void {
        // check playerIndex
        if (playerIndex < 0 || playerIndex > this.players.length - 1) {
            throw new Error("Player not found.");
        }
        // drawCard will check if the deck is empty
        this.players[playerIndex].addToHand(this.deck.drawCard());
    }

    // deal hand of cards to a player
    dealHand(playerIndex: number, numCards: number = 8): void {
        // check playerIndex
        if (playerIndex < 0 || playerIndex > this.players.length - 1) {
            throw new Error("Player not found.");
        }
        // drawHand will check if the deck is empty
        const hand: Card[] = this.deck.dealHand(numCards);

        // add each card to the player's hand
        for (const card of hand) {
            this.players[playerIndex].addToHand(card);
        }
    }
}