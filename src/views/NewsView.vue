<template>
	<div>
		news
		<p v-for="item in news">
			<a v-bind:href="item.url">{{ item.title }}</a>
			<small> {{ item.time_ago }} by {{ item.user }} </small>
		</p>
	</div>
</template>

<script>
export default {
	computed: {
		news() {
			return this.$store.state.news;
		},
	},
	created() {
		this.$store.dispatch("FETCH_NEWS");
	},
};
</script>

<style></style>
