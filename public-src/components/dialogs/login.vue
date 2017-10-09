<template>
	<v-layout row justify>
		<v-dialog v-model="dialog" persistant max-width="500px">
			<v-card>
				<v-card-title>
					<span class="headline">Login</span>
				</v-card-title>
				<v-card-text>
					<v-container grid-list-md>
						<v-layout wrap>
							<v-flex m8>
								<v-text-field label="Username"></v-text-field>
							</v-flex>
							<v-flex m8>
								<v-text-field label="Password"></v-text-field>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click.native="dialog = false">Sign Up</v-btn>
					<v-btn color="blue darken-1" flat @click.native="dialog = false">Login</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
module.exports =  {
	data: function() {
		return {
			dialog: true
		};
	}
}
</script>
