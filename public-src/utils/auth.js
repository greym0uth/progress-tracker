import axios from 'axios';

function login(user) {
	if (user.username && user.password) {
		console.log(user);
	} else {
		console.log('Cannot be empty.');
	}

	return Promise.resolve(user);
}

export default {
	login
};
