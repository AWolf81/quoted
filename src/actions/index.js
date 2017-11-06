/* API
**************************************************************/

// Defined API functions to be used in frontend

const API = "http://localhost:3001"

let token = localStorage.token
if (!token) {
	token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
	'Accept': 'application/json',
	'Authorization': token
}

// gets all posts
const getAllPosts = token => (
	fetch(`${API}/posts`, { method: 'GET', headers })
);

/* RECEIVE ALL POSTS
**************************************************************/

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts (posts) {
	return {
		type: REQUEST_POSTS,
		posts
	}
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts (posts) {
	return {
		type: RECEIVE_POSTS,
		posts,
		receivedAt: Date.now()
	}
}

// thunk middleware action creator, intervenes in the above function
export function fetchPosts (/*posts*/) {
	return function (dispatch) {
		const posts =  [
			{id:0, title: 'Hey there1', author: 'Tester1', category: 'blog', body: 'Hey this is some content!'},
			{id:1, title: 'Another Hey there2', author: 'Tester2', category: 'blog',  body: 'Hey this is some other content!'},
			{id:2, title: 'Hello there3', author: 'Tester1', category: 'life style',  body: 'Hey this is some more content!'}
		]
	    //	dispatch(requestPosts(posts)) // skipped
		dispatch(receivePosts(posts));
		/*return getAllPosts()
			   .then(
			   		res => res.json(),
			   		error => console.log('An error occured.', error)
			   	)
			   .then(posts => {
			   		dispatch(receivePosts(posts))
			   	})*/
	}
}
