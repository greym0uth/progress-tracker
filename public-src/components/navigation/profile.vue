<template>
	<v-menu bottom right :nudge-bottom="50" :nudge-width="100">
		<v-btn color="primary" icon slot="activator">
			<v-icon>person</v-icon>
		</v-btn>
		<v-list>
			<v-list-tile @click="">
				<v-list-tile-title>
					<v-layout row justify-space-between>
						<v-flex xs1><v-icon>fingerprint</v-icon></v-flex>
						<v-flex xs5><span>Login</span></v-flex>
					</v-layout>
				</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script>
export default {
	data: function() {
		return {};
	}
};
</script>
