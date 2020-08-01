<template>
	<fragment>
		<MainSlider/>
		<AboutUs/>
		<Announcement/>
		<Founders/>
<!--		<LatestCourses/>-->
		<hr>
		<Teachers/>
		<Testimonials/>
		<Modal/>

	</fragment>
</template>

<script>
	import AboutUs from '@/components/AboutUs';
	import MainSlider from '@/components/MainSlider';
	import Founders from '@/components/Founders';
	import Teachers from '@/components/Teachers';
	import LatestCourses from '@/components/LatestCourses';
	import Testimonials from '@/components/Testimonials';
	import Modal from '@/components/Modal';
	import Announcement from "../components/Announcement";

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

		mounted() {

		},

		components: {
			Announcement,
			Teachers,
			LatestCourses,
			Founders,
			MainSlider,
			AboutUs,
			Modal,
			Testimonials
		}
	}
</script>

<style scoped>

</style>
