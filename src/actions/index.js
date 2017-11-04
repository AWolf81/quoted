import * as API from '../utils/api.js';

/* RECEIVE ALL POSTS
**************************************************************/

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePostsSuccess = posts => ({
	type: RECEIVE_POSTS,
	posts
})

// thunk middleware action creator, intervenes in the above function
export const receivePosts = () => dispatch => (
		API
		.fetchPosts()
		.then(posts => dispatch(receivePostsSuccess(posts)))
);
	

/* CREATE POST
**************************************************************/
/*
export const CREATE_POST = 'CREATE_POST';

export function createPost () {
	return {
		type: CREATE_POST,
	}
};
*/

