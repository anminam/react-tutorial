import { handleActions } from "redux-actions";

import axios from "axios";

function getPostAPI(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = id => dispatch => {

    dispatch({type:GET_POST_PENDING});

    return getPostAPI(id)
        .then((res) => {
            dispatch({
                type: GET_POST_SUCCESS,
                payload: res
            })
        })
        .catch(err=> {
            dispatch({
                type: GET_POST_FAILURE,
                payload: err
            });

            throw(err)
        })
}

const initState = {
    pending: false,
    error: false,
    data : {
        title: '',
        data: ''
    }
}


export default handleActions({
    GET_POST_PENDING: (state, action) => {
        return {
            ...state,
            pending: true,
            data: {},
            error: false
        }
    },
    GET_POST_SUCCESS: (state,action) => {
        const { title, data} = action.payload.data;
        return {
            ...state,
            pending: false,
            data: {
                title,
                data
            }
        }
    },
    GET_POST_FAILURE: (state, action) => {
        return {
            ...state,
            pending:false,
            error: true,
            data: {}
        }
    }
}, initState);
