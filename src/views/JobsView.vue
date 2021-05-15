<template>
	<div>
		<ListItem></ListItem>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin';

export default {
  components: {
    ListItem,
  },
  mixins: [
    ListMixin,
  ],
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch("FETCH_JOBS")
  //     .then(() => {
  //       bus.$emit('end:spinner');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
};
</script>
