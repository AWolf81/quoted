import { combineReducers } from 'redux'
import { RECEIVE_POSTS } from '../actions'

/* Define inital data shape
const initialPostState = {
  postId: {
    id: '',
    parentId: '',
    timestamp: 0,
    body: '',
    author: '',
    voteScore: 0,
    deleted: null,
    parentDeleted: null
  },
}
*/

function fetchPosts (state = [], action) {
    const { posts } = action

    switch(action.type) {
        case RECEIVE_POSTS :
            return {
                ...state,
                posts
            }
        default : 
            return state
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
  fetchPosts
})

export default rootReducer