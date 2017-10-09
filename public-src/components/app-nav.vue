<template>
	<v-toolbar light class="primary">
		<v-toolbar-title class="white--text">Progress Tracker</v-toolbar-title>
		<v-spacer></v-spacer>
		<profile></profile>
	</v-toolbar>
</template>

<script>
import ProfileComponent from './navigation/profile.vue';

export default {
	data: () => ({}),
	components: {
		'profile': ProfileComponent
	}
}
</script>
