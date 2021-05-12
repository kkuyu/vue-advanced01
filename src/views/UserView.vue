<template>
	<div>
    <UserProfile></UserProfile>
		<p>name: {{ userInfo.id }}</p>
		<p>karma: {{ userInfo.karma }}</p>
		<p>created: {{ userInfo.created }}</p>
	</div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue"

export default {
  components: {
    UserProfile,
  },
	computed: {
		userInfo() {
			return this.$store.state.user;
		},
	},
	created() {
		const username = this.$route.params.id;
		this.$store.dispatch("FETCH_USER", username);
	},
};
</script>

<style></style>
