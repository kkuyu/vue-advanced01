<template>
	<div>
		<ul class="news-list">
			<li v-for="item in jobs" class="post">
				<div class="contents">
					<p class="news-title">
						<a v-bind:href="item.url">{{ item.title }}</a>
					</p>
					<small class="link-text">
						<span>{{ item.time_ago }} by </span>
						<a :href="item.url">{{ item.domain }}</a>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		jobs() {
			return this.$store.state.jobs;
		},
	},
	created() {
		this.$store.dispatch("FETCH_JOBS");
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
