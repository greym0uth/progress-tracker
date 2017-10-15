<template>
	<!-- Signup form -->
	<v-card v-if="signup_view">
		<v-card-title>
			<span class="headline">Signup</span>
		</v-card-title>
		<v-card-text>
			<v-container grid-list-md>
				<v-layout wrap>
					<v-flex xs6>
						<v-text-field label="First Name" v-model="firstName"></v-text-field>
					</v-flex>
					<v-flex xs6>
						<v-text-field label="Last Name" v-model="lastName"></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field label="Email" v-model="email"></v-text-field>
					</v-flex>
					<v-flex xs6>
						<v-text-field label="Username" v-model="username" type="text"></v-text-field>
					</v-flex>
					<v-flex xs6>
						<v-text-field label="Password" v-model="password"
						:append-icon="pwd_vis ? 'visibility_off' : 'visibility'"
						:append-icon-cb="() => (pwd_vis = !pwd_vis)"
						:type="pwd_vis ? 'text' : 'password'"></v-text-field>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="blue darken-1" flat @click="login">Back to Login</v-btn>
			<v-btn color="blue darken-1" flat @click="signupSubmit">Sign Up</v-btn>
		</v-card-actions>
	</v-card>
	</v-card>

	<!-- Login form -->
	<v-card v-else>
		<v-card-title>
			<span class="headline">Login</span>
		</v-card-title>
		<v-card-text>
			<v-container grid-list-md>
				<v-layout wrap>
					<v-flex m8>
						<v-text-field label="Username" v-model="username" type="text" name="username"></v-text-field>
					</v-flex>
					<v-flex m8>
						<v-text-field label="Password" v-model="password"
							:append-icon="pwd_vis ? 'visibility_off' : 'visibility'"
							:append-icon-cb="() => (pwd_vis = !pwd_vis)"
							:type="pwd_vis ? 'text' : 'password'"></v-text-field>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="blue darken-1" flat @click="signup">Sign Up</v-btn>
			<v-btn color="blue darken-1" flat @click="submit">Login</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import auth from '../../utils/auth.js';

export default {
	model: {
		event: 'complete'
	},
	data: function() {
		return {
			username: '',
			password: '',
			passwordAgain: '',
			firstName: '',
			lastName: '',
			email: '',

			signup_view: false,

			pwd_vis: false
		};
	},
	methods: {
		submit: function() {
			const _this = this;

			const user = {
				username: this.username,
				password: this.password
			};

			auth.login(user).then(function(res) {
				_this.$emit('complete');
			});
		},
		signup: function() {
			this.signup_view = true;
		},
		login: function() {
			this.signup_view = false;
		},
		signupSubmit: function() {
			let _this = this;

			let firstName = this.firstName || '';
			let lastName = this.lastName || '';
			let email = this.email || '';
			let username = this.username || '';
			let password = this.password || '';
			let passwordAgain = this.passwordAgain || '';

			if (firstName !== '' && lastName !== '' && email !== '' && username !== '' && password !== '' && passwordAgain !== '') {
				if (password !== passwordAgain)
					return console.log('Passwords don\'t match.')
				auth.createAccount(firstName, lastName, email, username, password).then(res => {
					auth.login({username, password}).then(res => {
						_this.$emit('complete');
					});
				}).catch(err => {
					console.log(err);
				});
			} else {
				console.log('No fields can be empty');
			}
		}
	}
};
</script>
