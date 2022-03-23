<template>
	<div class="fb-reset">
		<!-- Page breadcrumb -->
		<section id="mu-page-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-page-breadcrumb-area">
							<h2 style="color: white">Галерея</h2>

							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<nuxt-link to="/">Главная</nuxt-link>
								</li>
								<li class=" breadcrumb-item active">Галерея</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End breadcrumb -->

		<section id="gallery" style="min-height: 100vh; background: #eee">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="filterBlock">
							<div class="filterBlock__title">
								<h2>Галерея изображений и видео из жизни "Славянской"</h2>
								<!--								<p>Галлерея изображений и видео из жизни "Славянской"</p>-->
							</div>

							<div class="filterBlock__content">
								<ul class="filterBlock__filters-list">
									<!-- These two after a while create a bug with animation queue -->
<!--									<li class="filterBlock__filter filter my-2" data-filter="all">All</li>-->
<!--									<li class="filterBlock__filter filter my-2" data-filter="none">None</li>-->

									<li
										v-for="(gallery, index) in galleries" :key="gallery + '-filter-'+index"
										:class="['filterBlock__filter', 'fltr-controls','my-2', {'filterBlock__filter--active': gallery.category == 'skupoy-ricar'} ]"
										:data-filter="gallery.category">
										{{ gallery.title }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div id="filtr-container" class="galleryBlock" style="text-align: center; margin-left: auto; margin-right: auto">
						<gallery-item-lazy
							v-for="(gallery_item, index) in allImages" :key="gallery_item.title + gallery_item.text + index"
							:title="gallery_item.text"
							:category="gallery_item.category"
							:type="gallery_item.type"
							:finalLink="gallery_item.link"
							:thumbLink="gallery_item.thumb">
						</gallery-item-lazy>

<!--					<template v-for="(gallery, index) in galleries">-->
<!--						<gallery-item-lazy-->
<!--							v-for="(gallery_item, index) in gallery.imgArray" :key="gallery_item.title + gallery_item.text + index"-->
<!--							:title="gallery_item.text"-->
<!--							:category="gallery_item.category"-->
<!--							:type="gallery_item.type"-->
<!--							:finalLink="gallery_item.link"-->
<!--							:thumbLink="gallery_item.thumb">-->
<!--						</gallery-item-lazy>-->
<!--					</template>-->
				</div>

			</div>
		</section>
	</div>
</template>

<script>
import Filterizr from 'filterizr';
import GalleryItemLazy from "~/components/GalleryItemLazy";
import Pagination from "~/components/Pagination-nuxt-content";
import mixitup from 'mixitup';

export default {
	name: "gallery",
	data() {
		return {
			// galleries: null
		}
	},
	async asyncData({$content, params, route, router}) {
		// let galleries = await $content('galleries')

		let galleries = await $content('galleries')
			.fetch();

		let allImages = [];
		galleries.map(gallery => {
			gallery.imgArray.map(arr => {
				// console.log('another array', arr);
				allImages.push(arr);
			});
		});

		console.log(allImages, galleries);

		return {galleries, allImages};
	},
	head() {
		return {
			title: 'Галерея',

			// link: [
			// 	{rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css', media: "screen" }
			// ],
			// script: [
			// 	{
			// 		src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js',
			// 		type: 'text/javascript',
			// 		defer: true,
			// 		body: true,
			// 		callback: this.initiateFancyBox
			// 	},
			// ]
		};
	},

	mounted() {
		(function () {
			$(document).ready(function () {
				$('.filter[data-filter]').on('click', function () {
					console.log(666);
					$('.filter[data-filter]').removeClass('mixitup-control-active filterBlock__filter--active');
					$(this).addClass('mixitup-control-active filterBlock__filter--active');
				});

					// $('#mixit-container').mixItUp({
					// 	selectors: {
					// 		target: '.mix-target',
					// 	}
					// });


				// const filterizr = $('.filter-container').filterizr({
				const filterizr = new Filterizr('#filtr-container', {

					// controlsSelector: '.fltr-controls',
					// gridItemsSelector: '.filtr-item',
					// layout: 'sameWidth',
					// layout: 'sameHeight',
					filter: 'skupoy-ricar',
					spinner: {
						enabled: true,
					},
					gutterPixels: 15,
				});

				$('.fltr-controls[data-filter]').on('click', function () {
					$('.fltr-controls[data-filter]').removeClass('filterBlock__filter--active active');
					$(this).addClass('filterBlock__filter--active active');
				});

				$(".fancybox").fancybox({
					keyboard: true,
					arrows: true,

					// afterLoad: function(current) {
					// 	if (current.index === current.group.length - 1) {
					// 		current.arrows = false;
					// 	}
					// },

					infobar: true,
					smallBtn: "auto",
					toolbar: true,

					// For disabling window shift on click and closing
					helpers: {
						overlay: {
							locked: false
						}
					},

					buttons: [
						"zoom",
						"share",
						"slideShow",
						"fullScreen",
						"download",
						"thumbs",
						"close"
					],
					animationEffect: "zoom",
				});
			});
		})(jQuery);
	},

	methods: {
		// isotope() {
		// 	this.iso = new Isotope("#mixit-container", {
		// 		itemSelector: ".grid-item",
		// 		percentPosition: true,
		// 		masonry: {
		// 			columnWidth: ".grid-sizer"
		// 		}
		// 	});
		// }
	},

	components: {
		Pagination,
		GalleryItemLazy
	}
}
</script>

<style scoped lang="scss">

</style>
