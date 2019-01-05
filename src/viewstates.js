import { combineReducers } from 'redux';
import { BtnViewStateReducer } from './reducers/btnClickedReducer';

export default combineReducers({
    BtnViewStateReducer
});


// const initialState = {};

// export default function reducer(state = initialState, action){
//     console.log('reducer action', action)
//     switch (action.type){
//         case 'ADD_TO_CART':
//             if(state.cart.indexOf(action.payload)=== -1){
//                 return {
//                     cart: [...state.cart, action.payload]
//                 }
//             }
//     }
// }
