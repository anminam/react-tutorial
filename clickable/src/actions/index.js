import { INCREMENT, DECREMENT, SET_COLOR, CREATE, REMOVE } from "./ActionTypes";

export const increment = (index) => {
    return {
        type: INCREMENT,
        index
    }
}
export const decrement = (index) => {
    return {
        type: DECREMENT,
        index
    }
}
export const setColor = ({index,color}) => {
    return {
        type: SET_COLOR,
        color,
        index
    }
}

export const create = (color) => {
    return {
        type: CREATE,
        color
    }
}
export const remove = (index) => {
    return {
        type: REMOVE
    }
}