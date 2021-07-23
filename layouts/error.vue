<template>
	<div style="min-height: 100vh" class="nuxt-error">

<!--		<component :is="errorPage" :error="error"/>-->
	</div>
</template>

<script>
	// import error404 from '~/components/errors/404.vue';
	// import error500 from '~/components/error/500.vue';

	export default {
		// name: 'nuxt-error',
		layout: 'default', // optional
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
		mounted() {
			// alert(42);
			this.$nuxt.$router.push('/');
		},
		// asyncData ({ redirect }) {
		// 	console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
		// 	return redirect('/')
		// }
	};
</script>
