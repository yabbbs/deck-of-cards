export function divider(cards) {
    let heartCards = cards.filter(card => card.suit === 'HEARTS');
    let diamondCards = cards.filter(card => card.suit === 'DIAMONDS');
    let spadeCards = cards.filter(card => card.suit === 'SPADES');
    let clubCards = cards.filter(card => card.suit === 'CLUBS');
    
    clubCards.map(i => {
        if(i.value === 'QUEEN'){
            let queenIndex = clubCards.indexOf(i);
            clubCards.splice(queenIndex + 1);
        }
    });
    
    heartCards.map(i => {
        if(i.value === 'QUEEN'){
            let queenIndex = heartCards.indexOf(i);
            heartCards.splice(queenIndex + 1);
        }
    });

    diamondCards.map(i => {
        if(i.value === 'QUEEN'){
            let queenIndex = diamondCards.indexOf(i);
            diamondCards.splice(queenIndex + 1);
        }
    });

    spadeCards.map(i => {
        if(i.value === 'QUEEN'){
            let queenIndex = spadeCards.indexOf(i);
            spadeCards.splice(queenIndex + 1);
        }
    });

    return {heartCards, diamondCards, spadeCards, clubCards};
}
