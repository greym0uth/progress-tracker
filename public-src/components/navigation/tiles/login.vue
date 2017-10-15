<template>
	<v-list-tile @click.native.stop="openLogin()" @click="">
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
import auth from '../../../utils/auth';

import LoginPanelComponent from '../../panels/login-panel.vue';

export default {
	model: {
		event: 'update'
	},
	data: function() {
		return {
			dialog: false
		};
	},
	methods: {
		openLogin: function() {
			auth.validate().then(res => {
				if (res)
					this.$emit('update');
				else
					this.dialog = true;
			});
		},
		closeDialog: function() {
			this.dialog = false;
			this.$emit('update');
		}
	},
	components: {
		'login-panel': LoginPanelComponent
	}
}
</script>
