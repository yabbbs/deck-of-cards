export function divider(cards) {
    if(cards){
        let heartCards = cards.filter(card => card.suit === 'HEARTS');
        let diamondCards = cards.filter(card => card.suit === 'DIAMONDS');
        let spadeCards = cards.filter(card => card.suit === 'SPADES');
        let clubCards = cards.filter(card => card.suit === 'CLUBS');
    
        return {heartCards, diamondCards, spadeCards, clubCards};
    }
}

