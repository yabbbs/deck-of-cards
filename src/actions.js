export const GET_NEW_DECK = 'GET_NEW_DECK';
export const GET_TWO_CARDS = 'GET_TWO_CARDS';
export const SET_MODAL = 'SET_MODAL'

// actions
export function getNewDeck(deckId) {
    return {
        type: GET_NEW_DECK,
        payload: deckId
    }
}

export function getNewCards(newCards) {
    return {
        type: GET_TWO_CARDS,
        payload: newCards
    }
}

export function setModal(status) {
    return {
        type: SET_MODAL,
        payload: status
    }
}
