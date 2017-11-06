import { combineReducers } from 'redux'
import { RECEIVE_POSTS } from '../actions'

/*
// Define inital state shape
const initialState = {
    posts: [
        {
            id: '',
            parentId: '',
            timestamp: 0,
            body: '',
            author: '',
            voteScore: 0,
            deleted: null,
            parentDeleted: null
        },
    ]
}
*/

const initialState = {
    posts: []
}

function posts (state = initialState, action) {
    console.log('Reduced posts: ', posts)
    switch(action.type) {
        case RECEIVE_POSTS :
            return Object.assign({}, state, {posts: action.posts})
        default : 
            return state;
    }
}

/*
function createPost (state = initialPostState, action) {
	switch (action.type) {
		case CREATE_POST : 
			return {
				...state,
			}
		default : 
			return state
	}
}
*/

const rootReducer = combineReducers({  
  // short hand property names
  posts
})

export default rootReducer