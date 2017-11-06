import { combineReducers } from 'redux'
import { RECEIVE_POSTS } from '../actions'


const initialState = {
    posts: []
}

function posts (state = initialState, action) {
    console.log('reducer posts', action)
    switch(action.type) {
        case RECEIVE_POSTS :
            return Object.assign({}, state, {posts: action.posts})
            // console.log('RECEIVE_POSTS', action.posts);
            // return {
            //     ...state,
            //     posts: [
            //         ...action.posts
            //     ]
            // };
        default :
            return state;
    }
}

const rootReducer = combineReducers({  // short hand property names
  posts
})

export default rootReducer
