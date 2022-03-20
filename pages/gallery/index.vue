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
<!--									<li class="filterBlock__filter filter m-2" data-filter="all">All</li>-->
<!--									<li class="filterBlock__filter filter" data-filter="sadas">sadas</li>-->
									<li
										v-for="(gallery, index) in galleries" :key="gallery + '-filter-'+index"
										:class="['filterBlock__filter', 'filter', {'filterBlock__filter--active': gallery.category === 'Кошкин дом'}]"
										:data-filter="gallery.category">
										{{ gallery.category }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!--  -->
<!--				<ul class="row filter-container galleryBlock">-->
<!--					<li-->
<!--						v-for="(gallery_item, index) in allImages[0]" :key="gallery_item+index"-->
<!--						:data-category="gallery_item.category"-->
<!--						data-sort="value"-->
<!--						class="col-12 col-md-4 galleryBlock__item filtr-item">-->
<!--						<a :href="gallery_item.link"-->
<!--						   :class="[{'fancybox.iframe': gallery_item.type === 'youtube'}, 'fancybox', 'galleryBlock__link']"-->
<!--						   data-fancybox-group="gallery">-->
<!--							<div class="galleryBlock__container">-->
<!--								&lt;!&ndash;							<div  >&ndash;&gt;-->
<!--								<div class="galleryBlock__inner">-->
<!--									<img :src="gallery_item.thumb" class="galleryBlock__image" alt="">-->

<!--									<div class="galleryBlock__info">-->
<!--&lt;!&ndash;										<h4>{{ gallery_item.text }}</h4>&ndash;&gt;-->
<!--										&lt;!&ndash;															<p>Math</p>&ndash;&gt;-->
<!--										<a v-if="gallery_item.type === 'image'" href="#" class="aa-link"><span class="fa fa-eye fa-3x"></span></a>-->
<!--										<a v-else-if="gallery_item.type === 'youtube'" href="#" class="aa-link"><span class="fab fa-youtube fa-3x"></span></a>-->
<!--										<a v-else href="#" class="aa-link"><span class="fa fa-link fa-3x"></span></a>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--							&lt;!&ndash;							</div>&ndash;&gt;-->
<!--						</a>-->
<!--					</li>-->
<!--				</ul>-->


				<ul id="filter-container mixit-container" class="row filter-container galleryBlock">
					<li
						v-for="(gallery_item, index) in allImages[0]" :key="gallery_item+index"
						:data-category="gallery_item.category"
						data-sort="value"
						class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 galleryBlock__item mix filtr-item">
						<a :href="gallery_item.link"
						   :class="[{'fancybox.iframe': gallery_item.type === 'youtube'}, 'fancybox', 'galleryBlock__link']"
						   data-fancybox-group="gallery">
							<div class="galleryBlock__container">
								<!--							<div  >-->
								<div class="galleryBlock__inner">
									<img :src="gallery_item.thumb" class="galleryBlock__image" alt="">

									<div class="galleryBlock__info">
										<!--										<h4>{{ gallery_item.text }}</h4>-->
										<!--															<p>Math</p>-->
										<a v-if="gallery_item.type === 'image'" href="#" class="aa-link"><span class="fa fa-eye fa-3x"></span></a>
										<a v-else-if="gallery_item.type === 'youtube'" href="#" class="aa-link"><span class="fab fa-youtube fa-3x"></span></a>
										<a v-else href="#" class="aa-link"><span class="fa fa-link fa-3x"></span></a>
									</div>
								</div>
							</div>
							<!--							</div>-->
						</a>
					</li>
				</ul>

			</div>
		</section>
	</div>
</template>

<script>
import Filterizr from 'filterizr';
import GalleryItem from "~/components/GalleryItem";
import Pagination from "~/components/Pagination-nuxt-content";
// import fs from "fs";
// import path from "path";
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

		let allImages = galleries.map(gallery => {
			return gallery.imgArray.map(arr => {
				// console.log('another array', arr);
				return arr
			});
		});

		console.log(allImages);

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
	methods: {
		// initiateFancyBox() {
		// 	(function () {
		// 		$(".fancybox").fancybox({
		// 			keyboard: true,
		// 			arrows: true,
		// 			infobar: true,
		// 			// smallBtn: "auto",
		// 			toolbar: true,
		// 			buttons: [
		// 				"zoom",
		// 				//"share",
		// 				"slideShow",
		// 				//"fullScreen",
		// 				//"download",
		// 				"thumbs",
		// 				"close"
		// 			],
		// 			animationEffect: "zoom",
		// 		});
		//
		// 		$(".zoom").hover(function(){
		// 			$(this).addClass('transition');
		// 		}, function(){
		// 			$(this).removeClass('transition');
		// 		});
		// 	})();
		// }
	},

	mounted() {
			jQuery(function(){
				jQuery('#mixit-container').mixItUp();
			});
		// (function () {
		// 	$(document).ready(function () {
		// 		// const filterizr = $('.filter-container').filterizr({
		// 		const filterizr = new Filterizr('#filter-container', {
		//
		// 			// controlsSelector: '.fltr-controls',
		// 			// gridItemsSelector: '.filtr-item',
		// 			// layout: 'sameWidth',
		// 			// layout: 'sameHeight',
		// 			spinner: {
		// 				enabled: true,
		// 			},
		// 			// gutterPixels: 10,
		// 		});
		//
		// 		// const options = { /* check next step for available options */ };
		// 		// const filterizr = new Filterizr('#filter-container', {
		// 		// 	gutterPixels: 3,
		// 		// 	// filter: 'Кошкин дом',
		// 		// });
		// 		//
		// 		$('.filter[data-filter]').on('click', function () {
		// 			$('.filter[data-filter]').removeClass('filterBlock__filter--active');
		// 			$(this).addClass('filterBlock__filter--active');
		// 		});

				$(".fancybox").fancybox({
					// keyboard: true,
					arrows: true,

					// afterLoad: function(current) {
					// 	if (current.index === current.group.length - 1) {
					// 		current.arrows = false;
					// 	}
					// },
					// infobar: true,
					// smallBtn: "auto",
					// toolbar: true,
					// buttons: [
					// 	"zoom",
					// 	"share",
					// 	"slideShow",
					// 	"fullScreen",
					// 	"download",
					// 	"thumbs",
					// 	"close"
					// ],
					animationEffect: "zoom",
				});

				// $(".fancybox").fancybox();

				$(".zoom").hover(function () {
					$(this).addClass('transition');
				}, function () {
					$(this).removeClass('transition');
				});
			// });
		// })(jQuery);
	},

	components: {
		Pagination,
		GalleryItem
	}
}
</script>

<style scoped lang="scss">
p {
	text-align: center;
}

@media(max-width: 767px) {
	.cardon {
		///*min-width: 300px;*/
		max-height: 250px;
		/*border: 0px;*/
		/*padding: 15px;*/
	}
}

img {
	//height:250px;
	/*width: 350px;*/
	//overflow: hidden;
	//border:5px solid #fff;
	//border-radius: 5px;
	//box-shadow: 0 3px 5px rgba(0,0,0,.3);
	/*margin: 20px;*/
}

//img{
//	height: 100%;
//	width:100%;
//	object-fit: cover;
//}

.img-responsive {
	//height: 100%;
	//width:100%;
	//width: 200px; /* You can set the dimensions to whatever you want */
	//height: 200px;
	width: 100%;
	height: 200px;
	overflow: hidden;
	//border: 5px solid #fff;
	border-radius: 5px;
	box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
	object-fit: cover;
}

.filter-container {
	//padding: 0;
	//margin-left: 60px;
}

img:hover img {
	//transform: scale(1.4);
}


</style>
