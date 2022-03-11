<template>
	<div>
		<MainSlider/>
		<AboutUs/>
		<Announcement/>
		<Founders/>
		<LatestNews :latestArticles="latestArticles" />
<!--		<LatestCourses/>-->
<!--		<hr>-->

		<Teachers/>
		<Testimonials/>
		<Modal/>
	</div>
</template>

<script>
	import AboutUs from '@/components/AboutUs';
	import MainSlider from '@/components/MainSlider';
	import Founders from '@/components/Founders';
	import Teachers from '@/components/Teachers';
	import Testimonials from '@/components/Testimonials';
	import Modal from '@/components/Modal';
	import Announcement from "../components/Announcement";
	import LatestNews from "../components/LatestNews";

	export default {
		name: 'home',
		layout: 'default',

		head() {
			return {
				titleTemplate: '',
				title: 'Славянская | Главная',
				link: [
					// {rel: 'stylesheet',  href: 'css/slick.css'}
				],
				//
				script: [
					// { src: 'js/slick.js', type: 'text/javascript', defer: true, body: true },
				]
			}
		},

		async asyncData({$content, params, route}) {
			let latestArticles = await $content('articles')
				.without(['body'])
				.sortBy('manualCreatedAt', 'desc')
				.limit(3)
				.fetch();

			return {latestArticles};
		},

		mounted() {

		},

		beforeRouteLeave(to, from, next) {
			// console.log("before route called");
			// We need to pause sliders so we dont get error on other pages that dont have those elements
			$('#teacher .slider-nav').slick('slickPause');
			$('#slider-for').slick('slickPause');

			next(vm => {
				console.log("prev rout is: "+vm.prevRoute);
			})
		},

		components: {
			Announcement,
			Teachers,
			Founders,
			MainSlider,
			AboutUs,
			Modal,
			Testimonials,
			LatestNews
		}
	}
</script>

<style scoped>

</style>
