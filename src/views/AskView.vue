<template>
	<div>
		<ul class="news-list">
			<li v-for="item in ask" class="post">
				<div class="points">{{ item.points }}</div>
				<div class="contents">
					<p class="news-title">
      			<router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
					</p>
					<small class="link-text">
						<span>{{ item.time_ago }} by </span> 
						<router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
					</small>
				</div>
			</li>
		</ul>
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

<style scoped>
.news-list {
	margin: 0;
	padding: 0;
}
.post {
	display: flex;
	align-items: center;
	padding: 8px 0px;
	list-style: none;
	border-bottom: 1px solid #eee;
}
.points {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	color: #42b883;
}
.points + .contents {
  padding-left: 0;
}
.contents {
  padding: 0 10px;
}
.news-title {
	margin: 0;
}
.link-text, .link-text a {
	color: #828282;
}
</style>
