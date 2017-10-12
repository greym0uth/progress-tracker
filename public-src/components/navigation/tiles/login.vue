<template>
	<v-list-tile @click.native.stop="dialog = true" @click="">
		<v-list-tile-content>
			<v-list-tile-title>
				<v-layout row justify-space-between>
					<v-flex xs1><v-icon>fingerprint</v-icon></v-flex>
					<v-flex xs5><span>Login</span></v-flex>
				</v-layout>
			</v-list-tile-title>

			<v-dialog v-model="dialog" max-width="500px">
				<login-panel @complete="closeDialog"></login-panel>
			</v-dialog>
		</v-list-tile-content>
	</v-list-tile>
</template>

<script>
import LoginPanelComponent from '../../panels/login-panel.vue';

export default {
	data: function() {
		return {
			dialog: false
		};
	},
	methods: {
		closeDialog: function() {
			this.dialog = false;
		}
	},
	components: {
		'login-panel': LoginPanelComponent
	}
}
</script>
