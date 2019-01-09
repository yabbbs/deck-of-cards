export function queenChecker(cards) {
    let queensDrawn = 0;
    for(var queens in cards){
        if(cards[queens].suit === 'HEARTS' && cards[queens].value === 'QUEEN'){
            queensDrawn++;
        }
        if(cards[queens].suit === 'CLUBS' && cards[queens].value === 'QUEEN'){
            queensDrawn++;
        }
        if(cards[queens].suit === 'SPADES' && cards[queens].value === 'QUEEN'){
            queensDrawn++;
        }
        if(cards[queens].suit === 'DIAMONDS' && cards[queens].value === 'QUEEN'){
            queensDrawn++;
        }
    }
    return queensDrawn;
}
