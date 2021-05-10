<template>
	<div>
		ask
		<p v-for="item in ask">
			<router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
			<small> {{ item.time_ago }} by {{ item.user }} </small>
		</p>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	computed: {
		// ...mapGetters(["fetchedAsk"]),
		// ...mapGetters({
		// 	askItems: "fetchedAsk",
		// }),
		// ...mapState({
		// 	fetchedAsk: (state) => state.ask,
		// }),
		ask() {
			return this.$store.state.ask;
		},
	},
	created() {
		this.$store.dispatch("FETCH_ASK");
	},
};
</script>

<style></style>
