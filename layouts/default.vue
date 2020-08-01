<template>
	<div>
		<ScrollToTop/>
		<Header/>
		<Menu/>
		<Nuxt/>
		<Footer/>
	</div>
</template>

<script>
	import ScrollToTop from '@/components/ScrollToTop';
	import Header from '@/components/Header';
	import Menu from '@/components/Menu';
	import Footer from '@/components/Footer';

	export default {
		components: {
			ScrollToTop,
			Header,
			Menu,
			Footer
		}
	}
</script>

<style lang="scss">
	@import "assets/sass/app";
</style>
