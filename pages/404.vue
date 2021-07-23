<template>
	<div class="nuxt-error">
		gfdgfdg
		<!--		<component :is="errorPage" :error="error"/>-->
	</div>
</template>

<script>
	// import error404 from '~/components/errors/404.vue';
	// import error500 from '~/components/error/500.vue';

	export default {
		name: '404',
		// layout: 'default', // optional
		// props: {
		// 	error: {
		// 		type: Object,
		// 		default: () => {
		// 		},
		// 	},
		// },
		// computed: {
		// 	errorPage() {
		// 		if (this.error.statusCode === 404) {
		// 			return error404;
		// 		}      // catch everything else
		// 		return error500;
		// 	},
		// }
		// mounted() {
			// alert(42);
			// this.$nuxt.$router.push('/');
		// },
		asyncData ({ redirect }) {
			// console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
			return redirect('/about')
		}
	};
</script>
