// Defined API functions to be used in frontend

const API = "http://localhost:3001"

let token = localStorage.token
if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
	'Accept': 'application/json',
	'Authorization': token
}

export function getAllPosts (token) {
	return fetch(`${API}/posts`, { method: 'GET', headers })
		.then(res => res.json())
		.then(data => data)
}