<template>
	<div>
		news
		<div v-for="item in this.$store.state.news">{{ item.title }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			news: [],
		};
	},
	created() {
		this.$store.dispatch("FETCH_NEWS");
	},
};
</script>

<style></style>
