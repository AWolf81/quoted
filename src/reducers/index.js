import { RECEIVE_POSTS, CREATE_POST } from '../actions';

// Define inital data shape

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

function fetchPosts (state = initialPostState, action) {
    const { posts } = action

    switch(action.type) {
        case RECEIVE_POSTS :
            return {
                posts: posts
            }
        default : 
            return state
    }
}

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





export default fetchPosts