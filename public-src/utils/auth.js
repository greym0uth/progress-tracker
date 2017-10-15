import feathers from '../states/feathers';
import decode from 'jwt-decode';

function login(form) {
	return new Promise(function(resolve, reject) {
		let username = form.username || '';
		let password = form.password || '';

		if (username !== '' && password !== '') {
			return feathers.authenticate({
				strategy: 'local',
				username,
				password
			}).then(res => resolve(res)).catch(err => reject(err));
		}

		return reject('Fields cannot be empty.');
	});
}

function logout() {
	feathers.logout();
}

function validate() {
	return new Promise(function(resolve, reject) {
		let token = window.localStorage['feathers-jwt'];
		if (token === undefined || token === null)
			return resolve(false);

		return feathers.passport.getJWT().then((res) => {
			return resolve(feathers.passport.payloadIsValid(res));
		}).catch(err => {
			return reject(err);
		});
	});
}

function createAccount(firstname, lastname, email, username, password) {
	return feathers.service('users').create({
		firstName: firstname,
		lastName: lastname,
		email,
		username,
		password
	});
}

function getProfileData() {
	return new Promise(function(resolve, reject) {
		feathers.passport.getJWT().then(res => {

		});
	});
}

export default {
	login,
	logout,
	validate,
	createAccount
};
