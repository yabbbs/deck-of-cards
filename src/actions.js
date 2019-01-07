import axios from 'axios';

export const BTN_CLICKED_AMOUNT = 'BTN_CLICKED_AMOUNT';
export const GET_NEW_DECK = 'GET_NEW_DECK';
export const GET_TWO_CARDS = 'GET_TWO_CARDS';

// grab two  new cards
let twoCards = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => {
    // console.log('fetch', res)
    return res;
})
.catch(error => {
    console.log('error');
})



// get a new deck
async function getData() {
    const result = await axios('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then( res => {
            return res.data
        });
    return result;
}

// actions
export function addToCounter() {
    console.log('hit addToCounter action');
    return {
        type: BTN_CLICKED_AMOUNT,
        status: true
    };
}

export function getNewDeck() {
    return {
        type: GET_NEW_DECK,
        payload: null
    }
}

export async function getNewCards(newCards) {
    console.log('hit new cards action', typeof newCards);
    return {
        type: GET_TWO_CARDS,
        payload: await twoCards()
    }
}
