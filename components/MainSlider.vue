<template>
	<div class="container">

		<div id="imageCarousel" ref="carousel" data-interval="2500" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#imageCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#imageCarousel" data-slide-to="1"></li>
				<!--			<li data-target="#imageCarousel" data-slide-to="2"></li>-->
				<li data-target="#imageCarousel" data-slide-to="2"></li>
				<li data-target="#imageCarousel" data-slide-to="3"></li>
			</ol>

			<div class="carousel-inner" role="listbox">
				<div class="carousel-item active">
					<img src="/images/slider/1 (1).jpg" class="" alt="img">
				</div>
				<div id="target" class="carousel-item">
					<img src="/images/slider/1 (2).jpg" class="" alt="img">
				</div>
				<!--			<div class="carousel-item">-->
				<!--				<img src="/images/slider/1 (3).jpg" class="" alt="img">-->
				<!--			</div>-->
				<div class="carousel-item">
					<img src="/images/slider/1 (4).jpg" class="" alt="img">
				</div>
				<div class="carousel-item">
					<img src="/images/slider/1 (5).jpg" class="" alt="img">
				</div>
			</div>

			<a class="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>

</template>

<script>
	export default {
		mounted() {
			// this.$refs.carousels;
			$('#imageCarousel').carousel();
		}
	}
</script>

<style scoped>
	/* Code By Webdevtrick ( https://webdevtrick.com ) */
	.carousel .carousel-item {
		width: 100%;
		/*height: 100vh;*/
		background-size: cover;
		background-position: center;
	}

	.carousel-inner img {
		width: 100%;
		height: auto;
	}

	.carousel .carousel-item:first-of-type {
		/*background-image: url("https://webdevtrick.com/wp-content/uploads/gadget.jpg");*/
	}

	.carousel .carousel-item:nth-of-type(2) {
		/*background-image: url("https://webdevtrick.com/wp-content/uploads/auto.jpg");*/
	}

	.carousel .carousel-item:last-of-type {
		/*background-image: url("https://webdevtrick.com/wp-content/uploads/design.jpg");*/
	}

	.carousel-control-prev-icon, .carousel-control-next-icon {
		color: black;
		width: 100px;
		height: 100px;
	}
</style>
