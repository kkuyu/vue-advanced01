<template>
	<div>
    <UserProfile></UserProfile>
	</div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue"

export default {
  components: {
    UserProfile,
  },
	created() {
    const username = this.$route.params.id;
		this.$store.dispatch("FETCH_USER", username);
	},
};
</script>

<style></style>
