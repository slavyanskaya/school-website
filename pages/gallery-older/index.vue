<template>
	<div>
		<!-- Page breadcrumb -->
		<section id="mu-page-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-page-breadcrumb-area">
							<h2 style="color: white">Галерея</h2>

							<ol class="breadcrumb" >
								<li class="breadcrumb-item"><nuxt-link to="/">Главная</nuxt-link></li>
								<li class=" breadcrumb-item active">Галерея</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End breadcrumb -->

		<section >
<!--			<ul class="controls">-->
<!--				<li class="btn filter" data-filter="all">All</li>-->
<!--				<li class="btn filter" data-filter="kittens">М дом</li>-->
<!--				<li-->
<!--					v-for="(gallery, index) in galleries" :key="gallery + '-filter-' +index"-->
<!--					:class="['buttons', 'btn', 'filter', {'active': gallery.category === 'Кошкин дом'}]"-->
<!--					:data-filter="gallery.category">-->
<!--					{{ gallery.category }}-->
<!--				</li>-->
<!--			</ul>-->
<!--			<div class="container">-->
<!--				<div class="row">-->
<!--					<div class="col-md-12">-->
			<div class="gallery">
				<ul class="controls">
					<li class="buttons btn filter" data-filter="all">All</li>
					<li class="buttons btn filter" data-filter="kittens">М дом</li>
					<li
						v-for="(gallery, index) in galleries" :key="gallery + '-filter-' +index"
						:class="['buttons', 'btn', 'filter', {'active': gallery.category === 'Кошкин дом'}]"
						:data-filter="gallery.category">
						{{ gallery.category }}
					</li>
	<!--				<li class="buttons active" data-filter="all">all</li>-->
	<!--				<li class="buttons" data-filter="ice-cream">ice-cream</li>-->
	<!--				<li class="buttons" data-filter="chocolate">chocolate</li>-->
	<!--				<li class="buttons" data-filter="cake">cake</li>-->
	<!--				<li class="buttons" data-filter="juice">juice</li>-->
	<!--				<li class="buttons" data-filter="sandwich">sandwich</li>-->
				</ul>
<!--				<div class="mu-gallery-body">-->
				<div class="container">
					<div id="filter-container" class="filter-container row">
	<!--					<template v-for="(gallery, index) in galleries">-->
						<div v-for="(gallery_item, index) in allImages[0]" :key="gallery_item+index" :data-category="gallery_item.category" class=" image filtr-item col-md-4">
								<a
									:href="gallery_item.link"
									class=" ice-cream"
									>
										<img :src="gallery_item.thumb" alt="">
								</a>
						</div>

	<!--					</template>-->

		<!--				<a href="images/ice-cream1.jpg" class="image ice-cream">-->
		<!--					<img src="images/ice-cream1.jpg" alt="">-->
		<!--				</a>-->

					</div>
				</div>
			</div>
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--			</div>-->
		</section>
		<!-- Start gallery  -->
<!--		<section id="mu-gallery">-->
<!--			<div class="container">-->
<!--				<div class="row">-->
<!--					<div class="col-md-12">-->
<!--						<div class="mu-gallery-area">-->
<!--							&lt;!&ndash; start title &ndash;&gt;-->
<!--							<div class="mu-title">-->
<!--								<h2>Галлерея изображений и видео из жизни "Славянской"</h2>-->
<!--&lt;!&ndash;								<p>Галлерея изображений и видео из жизни "Славянской"</p>&ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; end title &ndash;&gt;-->
<!--							&lt;!&ndash; start gallery content &ndash;&gt;-->
<!--							<div class="mu-gallery-content">-->
<!--								&lt;!&ndash; Start gallery menu &ndash;&gt;-->
<!--								<div class="mu-gallery-top">-->
<!--									<ul>-->
<!--&lt;!&ndash;										<li class="btn filter  " data-filter="all">All</li>&ndash;&gt;-->
<!--&lt;!&ndash;										<li class="btn filter" data-filter="kittens">Кошкин дом</li>&ndash;&gt;-->
<!--										<li-->
<!--											v-for="(gallery, index) in galleries" :key="gallery + '-filter-' +index"-->
<!--											:class="['btn', 'filter', {'active': gallery.category === 'Кошкин дом'}]"-->
<!--											:data-filter="gallery.category">-->
<!--											{{ gallery.category }}-->
<!--										</li>-->
<!--									</ul>-->
<!--								</div>-->

<!--								&lt;!&ndash; End gallery menu &ndash;&gt;-->
<!--&lt;!&ndash;								<div class="mu-gallery-body">&ndash;&gt;-->
<!--&lt;!&ndash;									<ul id="filter-container2" class="row filter-container">&ndash;&gt;-->
<!--&lt;!&ndash;										<template v-for="(gallery, index) in galleries">&ndash;&gt;-->
<!--&lt;!&ndash;											<gallery-item&ndash;&gt;-->
<!--&lt;!&ndash;												v-for="(gallery_item, index) in gallery.imgArray" :key="gallery_item.title + gallery_item.text + index"&ndash;&gt;-->
<!--&lt;!&ndash;												:title="gallery_item.text"&ndash;&gt;-->
<!--&lt;!&ndash;												:category="gallery_item.category"&ndash;&gt;-->
<!--&lt;!&ndash;												:type="gallery_item.type"&ndash;&gt;-->
<!--&lt;!&ndash;												:link="gallery_item.link"&ndash;&gt;-->
<!--&lt;!&ndash;												:thumb="gallery_item.thumb">&ndash;&gt;-->
<!--&lt;!&ndash;											</gallery-item>&ndash;&gt;-->
<!--&lt;!&ndash;										</template>&ndash;&gt;-->
<!--&lt;!&ndash;									</ul>&ndash;&gt;-->
<!--&lt;!&ndash;								</div>&ndash;&gt;-->
<!--							</div>-->
<!--							&lt;!&ndash; end gallery content &ndash;&gt;-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</section>-->
		<!-- End gallery  -->

	</div>
</template>

<script>
	import Filterizr from 'filterizr';
	import GalleryItem from "~/components/GalleryItem";
	// import fs from "fs";
	// import path from "path";
    export default {
        name: "gallery",
		data() {
			return {
				// galleries: null
			}
		},
		async asyncData({ $content, params, route, router }) {
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
		head () {
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
			(function() {
				$(document).ready(function () {
					const options = { /* check next step for available options */ };
					const filterizr = new Filterizr('#filter-container', {
						gutterPixels: 3,
						// filter: 'Кошкин дом',
					});

					$('.btn[data-filter]').on('click', function() {
						$('.btn[data-filter]').removeClass('active');
						$(this).addClass('active');
					});

					$(".fancybox" ).fancybox({
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

					$(".zoom").hover(function(){
						$(this).addClass('transition');
					}, function(){
						$(this).removeClass('transition');
					});
				});
			})(jQuery);
		},

		components: {
			GalleryItem
		}
	}
</script>

<style scoped>
	p {
		text-align: center;
	}

	#demo {
		height:100%;
		position:relative;
		overflow:hidden;
	}

	.green{
		background-color:#6fb936;
	}
	.thumb{
		margin-bottom: 30px;
		min-height: 200px;
	}

	.page-top{
		/*margin-top:85px;*/
	}


	img.zoom {
		width: 100%;
		height: 200px;
		border-radius:5px;
		object-fit:cover;
		-webkit-transition: all .3s ease-in-out;
		-moz-transition: all .3s ease-in-out;
		-o-transition: all .3s ease-in-out;
		-ms-transition: all .3s ease-in-out;
	}

	.transition {
		-webkit-transform: scale(1.2);
		-moz-transform: scale(1.2);
		-o-transform: scale(1.2);
		transform: scale(1.2);
	}
	.modal-header {

		border-bottom: none;
	}
	.modal-title {
		color:#000;
	}
	.modal-footer{
		display:none;
	}

/* Gallery	*/
	.gallery {
		min-height: 100vh;
		/*background:#eee;*/
		padding-bottom: 100px;
	}
	.controls{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding:20px 0;
		list-style: none;
	}

	.buttons{
		height:40px;
		width: 140px;
		background:#fff;
		color:#666;
		font-size: 20px;
		line-height: 40px;
		cursor: pointer;
		margin:20px;
		box-shadow: 0 3px 5px rgba(0,0,0,.3);
		text-align: center;
	}

	.buttons.active{
		background:coral;
		color:#fff;
	}

	.gallery .image-container{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.gallery .image-container .image{
		height:250px;
		width: 350px;
		overflow: hidden;
		border:10px solid #fff;
		box-shadow: 0 3px 5px rgba(0,0,0,.3);
		margin: 10px;
	}

	.gallery .image-container .image img{
		height: 100%;
		width:100%;
		object-fit: cover;
	}

	.gallery .image-container .image:hover img{
		transform: scale(1.4);
	}
</style>
