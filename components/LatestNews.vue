<template>
	<section id="mu-latest-courses">
		<div class="container">
<!--			<div class="row">-->
				<!-- Start Title -->
				<div class="mu-title--white">
					<h2>Последние Новости</h2>
<!--					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime-->
<!--						mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat-->
<!--						sunt animi!</p>-->
				</div>
				<!-- End Title -->
<!--				<h2 class="display-4 text-center mt-5 mb-3">Our Services</h2>-->

<!--				<div class="preloader">-->
<!--					<div class="rect1"></div>-->
<!--					<div class="rect2"></div>-->
<!--					<div class="rect3"></div>-->
<!--					<div class="rect4"></div>-->
<!--					<div class="rect5"></div>-->
<!--				</div>-->

				<div id="latest-courses-slider " class="row">
					<div class="col-lg-4  col-12 mb-5">
						<div class="card h-100">
<!--							<img class="card-img-top" src="design.jpg" alt="Design">-->
							<div class="card-body">
								<h4 class="card-title">Design</h4>
								<p class="card-text">Deliver the best user experience
									with our carefully designed responsive websites and applications!</p>
							</div>
							<div class="card-footer py-4">
								<a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-12 mb-5">
						<div class="card h-100">
<!--							<img class="card-img-top" src="development.jpg" alt="Development">-->
							<div class="card-body">
								<h4 class="card-title">Development</h4>
								<p class="card-text">You need software that works on every device.
									Leverage the latest technologies and the most powerful tools!</p>
							</div>
							<div class="card-footer py-4">
								<a href="#" class="btn btn-secondary">See projects &raquo;</a>
							</div>
						</div>
					</div>

					<div class="col-lg-4  col-12 mb-5">
						<div class="card h-100">
<!--							<img class="card-img-top" src="analytics.jpg" alt="Analytics">-->
							<div class="card-body">
								<h4 class="card-title">Analytics</h4>
								<p class="card-text">Consult our experts to set up proper goals and
									find the best stack for your next application!</p>
							</div>
							<div class="card-footer py-4">
								<a href="#" class="btn btn-secondary">See testimonials &raquo;</a>
							</div>
						</div>
					</div>
				</div>

			</div>
<!--		</div>-->
	</section>
</template>

<script>
	export default {
		// mounted() {
		// 	(function () {
		// 		// $(document).ready(function () {
		// 			$('#latest-courses-slider')
		// 				.on('init', function(slick) {
		// 					$('.preloader').css({display: 'none'});
		// 				})
		// 				.slick({
		// 					slidesToShow: 3,
		// 					dots: true,
		// 					infinite: true,
		// 					arrows: true,
		// 					autoplay: true,
		// 					speed: 500,
		// 					cssEase: 'linear',
		// 					fade: false,
		// 					accessibility: true,
		//
		// 					prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
		// 					nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
		//
		// 					mobileFirst: true,
		// 					// responsive: [
		// 					// 	{
		// 					// 		breakpoint: 1024,
		// 					// 		settings: {
		// 					// 			variableWidth: false,
		// 					// 			centerMode: true,
		// 					//
		// 					// 			slidesToShow: 2,
		// 					// 			slidesToScroll: 1,
		// 					// 			// infinite: true,
		// 					// 			// dots: false
		// 					// 		}
		// 					// 	},
		// 					// 	{
		// 					// 		breakpoint: 600,
		// 					// 		settings: {
		// 					// 			centerMode: true,
		// 					// 			variableWidth: false,
		// 					//
		// 					// 			slidesToShow: 1,
		// 					// 			slidesToScroll: 1,
		// 					// 			accessibility: false,
		// 					// 		}
		// 					// 	},
		// 					// 	{
		// 					// 		breakpoint: 480,
		// 					// 		settings: {
		// 					// 			variableWidth: false,
		// 					// 			centerMode: true,
		// 					//
		// 					// 			slidesToShow: 1,
		// 					// 			slidesToScroll: 1,
		// 					// 			accessibility: false,
		// 					// 		}
		// 					// 	}
		// 					// 	// You can unslick at a given breakpoint now by adding:
		// 					// 	// settings: "unslick"
		// 					// 	// instead of a settings object
		// 					// ]
		// 				});
		//
		// 		// });
		//
		// 	})(jQuery);
		// }
	}
</script>

<style scoped>
	/* Card */
	.btn-secondary {
		background-color: transparent;
		border-color: #c60063;
		color: #c60063;
	}

	/* Preloader */
	/*#latest-courses-slider {*/
	/*	opacity: 0;*/
	/*	visibility: hidden;*/
	/*	transition: opacity 1s ease;*/
	/*	-webkit-transition: opacity 1s ease;*/
	/*}*/

	/*#latest-courses-slider.slick-initialized {*/
	/*	visibility: visible;*/
	/*	opacity: 1;*/
	/*}*/

	/*!* Slider *!*/
	/*#latest-courses-slider {*/
	/*	position: relative;*/
	/*}*/

	/*#latest-courses-slider .prev_arrow, #latest-courses-slider .next_arrow {*/
	/*	z-index: 4;*/
	/*}*/

	/*#latest-courses-slider .prev_arrow {*/
	/*	position: absolute;*/
	/*	bottom: 20%;*/
	/*	left: 15%;*/

	/*	color: white;*/
	/*	width: 50px;*/
	/*	height: 50px;*/
	/*	background: grey;*/
	/*	border-radius: 50%;*/
	/*	text-align: center;*/
	/*	line-height: 50px;*/
	/*	display: inline-block;*/
	/*	cursor: pointer;*/
	/*}*/

	/*#latest-courses-slider .next_arrow {*/
	/*	position: absolute;*/
	/*	bottom: 20%;*/
	/*	right: 15%;*/

	/*	color: white;*/
	/*	width: 50px;*/
	/*	height: 50px;*/
	/*	background: grey;*/
	/*	border-radius: 50%;*/
	/*	text-align: center;*/
	/*	line-height: 50px;*/
	/*	display: inline-block;*/
	/*	cursor: pointer;*/
	/*}*/

	/*.slider .slider_items{*/

	/*}*/

</style>


