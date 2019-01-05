import {
    BTN_CLICKED_AMOUNT
} from '../actions';

export function BtnViewStateReducer(state = {}, action = {}) {
    switch (action.type) {
        case BTN_CLICKED_AMOUNT:
            console.log('hit the reducer');

            return {
                state
            };
        default:
            return state;
    }
}