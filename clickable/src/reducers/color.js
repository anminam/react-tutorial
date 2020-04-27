import { SET_COLOR } from "../actions/ActionTypes";
const initialState = {
    color: 'black'
}

const color = (state = initialState, action) => {
    switch(action.type) {
        case SET_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }

}

export default color;