import * as API from '../utils/api.js';

/* RECEIVE ALL POSTS
**************************************************************/

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts
});

// thunk middleware action creator
export const fetchPosts = () => dispatch => (
	API.fetchPosts()
		.then(posts => dispatch(receivePosts(posts)))
)

/* CREATE POST
**************************************************************/

export const CREATE_POST = 'CREATE_POST';

export function createPost () {
	return {
		type: CREATE_POST,
	}
};


