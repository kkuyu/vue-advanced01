<template>
	<div>
		<ul class="news-list">
			<li v-for="(item, index) in list" :key="index" class="post">
				<div class="points">{{ item.points || "-" }}</div>
				<div class="contents">
					<p class="news-title">
						<template v-if="item.domain">
							<a v-bind:href="item.url">{{ item.title }}</a>
						</template>
						<template v-else>
							<router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
						</template>
					</p>
					<small class="link-text">
						<span>{{ item.time_ago }} by </span>
						<router-link v-if="item.user" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
						<a v-else :href="item.url">{{ item.domain }}</a>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		list() {
			return this.$store.state.list;
		},
	},
}
</script>

<style scoped>
.news-list {
	margin: 0;
	padding: 0;
}
.post {
	display: flex;
	align-items: center;
	padding: 12px 0px;
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
.contents {
	padding: 0 10px 0 0;
}
.news-title {
	margin: 0;
}
.link-text, .link-text a {
	color: #828282;
}
</style>
