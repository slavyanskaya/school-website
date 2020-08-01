<template>
	<!--START SCROLL TOP BUTTON -->
	<a class="scrollToTop" href="#">
		<i class="fa fa-angle-up"></i>
	</a>
	<!-- END SCROLL TOP BUTTON -->
</template>

<script>
	export default {
		mounted() {
			$(window).scroll(function(){
				if ($(this).scrollTop() > 300) {
					$('.scrollToTop').fadeIn();
				} else {
					$('.scrollToTop').fadeOut();
				}
			});

			$('.scrollToTop').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});
		}
	}
</script>

<style scoped>

</style>
