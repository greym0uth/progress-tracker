<template>
	<v-container grid-list-xs class="profile-view">
		<v-layout row wrap>
			<!-- Avatar, name, bio and other short information about profile -->
			<v-flex xs4>
				<profile-overview></profile-overview>
			</v-flex>
			<!-- Main content (Public calendar, team information, and ratings/connections) -->
			<v-flex xs8>
				<profile-content></profile-content>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import ProfileOverviewComponent from '../components/views/profile/profile-overview.vue';
import ProfileContentComponent from '../components/views/profile/profile-content.vue';

export default {
	components: {
		'profile-overview': ProfileOverviewComponent
	},
	data: function() {
		return {};
	}
}
</script>

<style>
.profile-view {
	padding-top: 10px;
}
</style>
