var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    Card.prototype.toString = function () {
        return "".concat(this.rank, " of ").concat(this.suit);
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        var suits = ["Red", "Green", "Blue", "White", "Yellow"];
        var ranks = [
            "handShake",
            "handShake",
            "handShake",
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
        for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
            var suit = suits_1[_i];
            for (var _a = 0, ranks_1 = ranks; _a < ranks_1.length; _a++) {
                var rank = ranks_1[_a];
                this.cards.push(new Card(suit, rank));
            }
        }
    }
    Deck.prototype.draw = function () {
        if (this.cards.length === 0) {
            throw new Error('The deck is empty');
        }
        return this.cards.pop();
    };
    Deck.prototype.dealHand = function (numCards) {
        var hand = [];
        for (var i = 0; i < numCards; i++) {
            hand.push(this.draw());
        }
        return hand;
    };
    Deck.prototype.shuffle = function () {
        var _a;
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.cards[j], this.cards[i]], this.cards[i] = _a[0], this.cards[j] = _a[1];
        }
    };
    Deck.prototype.size = function () {
        return this.cards.length;
    };
    return Deck;
}());
// Usage example:
var deck = new Deck();
deck.shuffle();
console.log("Deck size: ".concat(deck.size()));
var hand = deck.dealHand(5);
console.log('Hand:');
for (var _i = 0, hand_1 = hand; _i < hand_1.length; _i++) {
    var card = hand_1[_i];
    console.log(card.toString());
}
