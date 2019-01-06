import {
    BTN_CLICKED_AMOUNT,
    GET_NEW_DECK,
    GET_TWO_CARDS
} from '../actions';

let initialState = {
    cards: []
}


export function BtnViewStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case BTN_CLICKED_AMOUNT:
            console.log('hit the reducer');

            return {
                state
            };
        case GET_NEW_DECK:
            console.log('hit get new deck reducer', action.payload)
            return {
                cards: []
            }
        case GET_TWO_CARDS:
            return {
                cards: state.cards.concat(action.payload)
            }    
        default:
            return state;
    }
}