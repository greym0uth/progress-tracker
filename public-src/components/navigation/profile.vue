<template>
	<v-menu bottom right :nudge-bottom="50" :nudge-width="150">
		<v-btn class="white--text" color="primary" icon slot="activator">
			<v-icon>person</v-icon>
		</v-btn>
		<v-list v-if="userId">
			<v-list-tile @click="">
				<v-list-tile-title>
					<v-layout row justify-space-between>
						<v-flex xs1><v-icon>account_circle</v-icon></v-flex>
						<v-flex xs8><span>My Account</span></v-flex>
					</v-layout>
				</v-list-tile-title>
			</v-list-tile>
			<v-list-tile @click="">
				<v-list-tile-title>
					<v-layout row justify-space-between>
						<v-flex xs1><v-icon>exit_to_app</v-icon></v-flex>
						<v-flex xs5><span>Logout</span></v-flex>
					</v-layout>
				</v-list-tile-title>
			</v-list-tile>
		</v-list>
		<v-list v-else>
			<login-tile></login-tile>
		</v-list>
	</v-menu>
</template>

<script>
import LoginComponent from './tiles/login.vue';

export default {
	props: ['userId'],
	data: function() {
		return {};
	},
	components: {
		'login-tile': LoginComponent
	}
};
</script>
