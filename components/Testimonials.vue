<template>
	<!-- Start testimonial -->
	<section id="mu-testimonial">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-10 offset-md-1">
					<div class="mu-testimonial-area">
						<div id="mu-testimonial-slider" class="mu-testimonial-content">
							<!-- start testimonial single item -->
							<div class="mu-testimonial-item">
								<div class="mu-testimonial-quote">
									<blockquote>
										<p>Мы признательны нашей родной школе за высокий профессионализм, чуткость и постоянное мотивирование к развитию!</p>
									</blockquote>
								</div>
								<div class="mu-testimonial-img">
									<img src="/images/layouts/testimonials/ambarcumyan-armen-profile.jpg" alt="img">
								</div>
								<div class="mu-testimonial-info">
									<h4>Армен Амбарцумян</h4>
									<span><a class="text-primary read-more" data-name="ambarcumyan" href="#">Подробнее</a></span>
								</div>
							</div>
							<!-- end testimonial single item -->

							<!-- start testimonial single item -->
							<div class="mu-testimonial-item">
								<div class="mu-testimonial-quote">
									<blockquote>
										<p>Мы благодарны педагогическому составу школы за самоотверженный труд и успешное обучение школьников.</p>
									</blockquote>
								</div>
								<div class="mu-testimonial-img">
									<img src="/images/layouts/testimonials/gukasov-profile.jpg" alt="img">
								</div>
								<div class="mu-testimonial-info">
									<h4>Гукасов И.Г.</h4>
									<span><a class="text-primary read-more" data-name="gukasov" href="#">Подробнее</a></span>
								</div>
							</div>
							<!-- end testimonial single item -->

							<!-- start testimonial single item -->
							<div class="mu-testimonial-item">
								<div class="mu-testimonial-quote">
									<blockquote>
										<p>В нашей школе человек развивается не только интеллектуально, но и нравственно!</p>
									</blockquote>
								</div>
								<div class="mu-testimonial-img">
									<img src="/images/layouts/testimonials/jaklin-profile.jpg" alt="img">
								</div>
								<div class="mu-testimonial-info">
									<h4>Жаклин Сархошян</h4>
									<span><a class="text-primary read-more" data-name="jaklin" href="#">Подробнее</a></span>
								</div>
							</div>
							<!-- end testimonial single item -->

							<!-- start testimonial single item -->
							<div class="mu-testimonial-item">
								<div class="mu-testimonial-quote">
									<blockquote>
										<p>Такой душевной атмосферы, как в нашей школе, нет нигде в мире!</p>
									</blockquote>
								</div>
								<div class="mu-testimonial-img">
									<img src="/images/layouts/testimonials/janeta-profile.jpg" alt="img">
								</div>
								<div class="mu-testimonial-info">
									<h4>Акопян Жанетта</h4>
									<span><a class="text-primary read-more" data-name="janeta" href="#">Подробнее</a></span>
								</div>
							</div>
							<!-- end testimonial single item -->

							<!-- start testimonial single item -->
							<div class="mu-testimonial-item">
								<div class="mu-testimonial-quote">
									<blockquote>
										<p>Я благодарен судьбе за то, что мои дети попали именно в «Славянскую»!</p>
									</blockquote>
								</div>
								<div class="mu-testimonial-img">
									<img src="/images/layouts/testimonials/iloyan-profile.jpg" alt="img">
								</div>
								<div class="mu-testimonial-info">
									<h4>Илоян Георгий Суренович</h4>
									<span><a class="text-primary read-more" data-name="iloyan" href="#">Подробнее</a></span>
								</div>
							</div>
							<!-- end testimonial single item -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End testimonial -->

</template>

<script>
    export default {
		mounted() {
			(function () {
				$(document).ready(function () {
					$('#mu-testimonial-slider').slick({
						slidesToShow: 1,
						dots: true,
						infinite: true,
						arrows: true,
						autoplay: true,
						speed: 500,
						cssEase: 'linear',
						fade: false,
						accessibility: true,

						prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
						nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>'
					});
				});

			})(jQuery);
		}
	}
</script>

<style>
	/*.slick-prev, .slick-next {*/
	/*}*/

	/*.slick-prev::before, .slick-next::before {*/
	/*	font-family: 'Font Awesome 5 Free';*/
	/*	font-weight: 900;*/
	/*	font-style: italic;*/
	/*}*/
	/*.slick-prev::before {*/
	/*	!* fa-arrow-circle-left *!*/
	/*	content: "\f10d";*/
	/*}*/
	/*.slick-next::before {*/
	/*	!* fa-arrow-circle-right *!*/
	/*	content: "\f0a9";*/
	/*}*/

	#mu-testimonial-slider {
		position: relative;
	}

	#mu-testimonial-slider .prev_arrow, #mu-testimonial-slider .next_arrow {
		z-index: 4;
	}

	#mu-testimonial-slider .prev_arrow {
		position: absolute;
		bottom: 20%;
		left: 15%;

		color: white;
		width: 50px;
		height: 50px;
		background: grey;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		display: inline-block;
		cursor: pointer;
	}

	#mu-testimonial-slider .next_arrow {
		position: absolute;
		bottom: 20%;
		right: 15%;

		color: white;
		width: 50px;
		height: 50px;
		background: grey;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		display: inline-block;
		cursor: pointer;
	}

	.slider .slider_items{

	}
</style>
