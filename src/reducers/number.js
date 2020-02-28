import { INCREMENT, DECREMENT } from "../actions/ActionTypes";
const initialState = {
    number: 0
}

const number = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default:    
            return state;
    }

}

export default number;