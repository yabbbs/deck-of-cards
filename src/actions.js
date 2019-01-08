export const BTN_CLICKED_AMOUNT = 'BTN_CLICKED_AMOUNT';
export const GET_NEW_DECK = 'GET_NEW_DECK';
export const GET_TWO_CARDS = 'GET_TWO_CARDS';

// actions
export function getNewDeck() {
    return {
        type: GET_NEW_DECK,
        payload: null
    }
}

export function getNewCards(newCards) {
    return {
        type: GET_TWO_CARDS,
        payload: newCards
    }
}



// grab two  new cards
// let twoCards = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// .then(res => {
//     // console.log('fetch', res)
//     return res;
// })
// .catch(error => {
//     console.log('error');
// })



// // get a new deck
// async function getData() {
//     const result = await axios('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then( res => {
//             return res.data
//         });
//     return result;
// }