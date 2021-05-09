<template>
	<header class="header">
		<router-link to="/news">News</router-link>
		<router-link to="/jobs">Jobs</router-link>
		<router-link to="/ask">Ask</router-link>
	</header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	display: flex;
	padding: 8px;
	background: #42b883;
}
.header a {
	color: #fff;
}
.header a + a {
	margin-left: 8px;
	padding-left: 8px;
	border-left: 1px solid #fff;
}
.header a.router-link-exact-active {
	color: #35495e;
}
</style>
