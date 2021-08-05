const BASE_URL = '/api/users';

export function getById(id) {
	const options = getOptionsGet();
	return fetch(`${BASE_URL}/${id}`, options).then((res) => res.json());
}

function getOptionsGet() {
	return {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	};
}

function getToken() {
	// getItem returns null if there's no string
	const token = localStorage.getItem('token');
	if (!token) return null;
	// Check if expired, remove if it is
	const payload = JSON.parse(atob(token.split('.')[1]));
	// A JWT's exp is expressed in seconds, not milliseconds, so convert
	if (payload.exp < Date.now() / 1000) {
		localStorage.removeItem('token');
		return null;
	}
	return token;
}
