import {
    GET_NEW_DECK,
    GET_TWO_CARDS,
    SET_MODAL
} from '../actions';

let initialState = {
    cards: [],
    deckId: '',
    modalStatus: false
}


export function BtnViewStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_NEW_DECK:
            return {
                ...state,
                deckId: action.payload,
                cards: []
            }
        case GET_TWO_CARDS:
            return {
                ...state,
                cards: state.cards.concat(action.payload)
            }
        case SET_MODAL:
            return {
                ...state,
                modalStatus: !state.modalStatus
            }
        default:
            return state;
    }
}