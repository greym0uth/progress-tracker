<template>
	<v-card>
		<v-card-title>
			<span class="headline">Login</span>
		</v-card-title>
		<v-card-text>
			<v-container grid-list-md>
				<v-layout wrap>
					<v-flex m8>
						<v-text-field label="Username" v-model="username"></v-text-field>
					</v-flex>
					<v-flex m8>
						<v-text-field label="Password" v-model="password"></v-text-field>
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
			password: ''
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
				console.log(res);
				_this.$emit('complete', true);
			});
		},
		signup: function() {

		}
	}
};
</script>
