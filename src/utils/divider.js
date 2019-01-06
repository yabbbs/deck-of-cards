export function divider(cards) {
    let heartCards = cards.filter(card => card.suit === 'HEARTS');
    let diamondCards = cards.filter(card => card.suit === 'DIAMONDS');
    let spadeCards = cards.filter(card => card.suit === 'SPADES');
    let clubCards = cards.filter(card => {
        console.log('card', card)
        return card.suit === 'CLUBS'
    });

    // if filter includes a queen stop the filter

    return {heartCards, diamondCards, spadeCards, clubCards};
}
