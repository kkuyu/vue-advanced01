<template>
	<div>
		news
		<div v-for="news in newsList">{{ news }}</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			newsList: [],
		};
	},
	created() {
		var vm = this;
		axios
			.get("https://api.hnpwa.com/v0/news/1.json")
			.then(function(response) {
				console.log(response);
				vm.newsList = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
	},
};
</script>

<style></style>
