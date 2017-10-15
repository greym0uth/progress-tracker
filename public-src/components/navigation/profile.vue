<template>
	<v-menu bottom right :nudge-bottom="50" :nudge-width="150">
		<v-btn class="white--text" color="primary" icon slot="activator">
			<v-icon>person</v-icon>
		</v-btn>
		<v-list v-if="loggedIn">
			<v-list-tile @click="myAccount()">
				<v-list-tile-title>
					<v-layout row justify-space-between>
						<v-flex xs1><v-icon>account_circle</v-icon></v-flex>
						<v-flex xs8><span>My Account</span></v-flex>
					</v-layout>
				</v-list-tile-title>
			</v-list-tile>
			<v-list-tile @click="logout()">
				<v-list-tile-title>
					<v-layout row justify-space-between>
						<v-flex xs1><v-icon>exit_to_app</v-icon></v-flex>
						<v-flex xs5><span>Logout</span></v-flex>
					</v-layout>
				</v-list-tile-title>
			</v-list-tile>
		</v-list>
		<v-list v-else>
			<login-tile @update="update()"></login-tile>
		</v-list>
	</v-menu>
</template>

<script>
import LoginTileComponent from './tiles/login.vue';
import feathers from '../../states/feathers';
import auth from '../../utils/auth';

export default {
	data: function() {
		return {
			loggedIn: false
		};
	},
	methods: {
		update: function() {
			var _this = this;

			auth.validate().then(res => {
				_this.loggedIn = res;
			});
		},
		myAccount: function() {
			this.$router.push('profile');
		},
		logout: function() {
			auth.logout();
			this.update();
		}
	},
	components: {
		'login-tile': LoginTileComponent
	}
};
</script>
