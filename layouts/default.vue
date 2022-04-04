<template>
	<div>
		<div id="fb-root"></div>
		<ScrollToTop/>
		<Header/>
		<Menu/>
		<keep-alive>
			<Nuxt/>
		</keep-alive>
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

</style>
