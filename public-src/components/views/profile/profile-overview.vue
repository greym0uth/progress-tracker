<template>
<v-layout row wrap>
	<v-flex xs12>
		<v-layout row align-center wrap light>
			<v-flex xs12 text-xs-center>
				<v-avatar :tile="false" size="128px">
					<img :src="avatarUrl" alt="avatar" />
				</v-avatar>
			</v-flex>
			<v-flex xs12 text-xs-center>
				<h4>{{fullName}}</h4>
			</v-flex>
			<v-flex xs12 text-xs-center>
				<p>
					{{bio}}
				</p>
			</v-flex>
			<!-- Extra information -->
			<v-flex xs12 v-for="info in extraInfo">
				<p>
					<b>{{info.title}}:</b> {{info.text}}
				</p>
			</v-flex>
		</v-layout>
	</v-flex>
</v-layout>
</template>

<script>
export default {
	data: function() {
		return {
			avatarUrl: 'https://placekitten.com/g/400/400',
			firstName: 'Cat',
			lastName: 'Dogino',
			bio: 'I\'m a simple cat with a simple life, but I like dogs.',
			extraInfo: [
				{ title: 'Location', text: 'Seattle'},
				{ title: 'Team', text: 'Bagel Demons'}
			]
		};
	},
	computed: {
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		}
	}
}
</script>
