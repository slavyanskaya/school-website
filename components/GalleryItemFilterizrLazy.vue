<template>
	<!-- start single gallery image -->
	<div
		:data-category="category"
		data-sort=""
	>
		<a :href="finalLink" :class="[{'fancybox.iframe': type === 'youtube'}, 'fancybox', 'galleryBlock__link']" data-fancybox-group="gallery">
			<div class="galleryBlock__container">
				<!--							<div  >-->
				<div class="galleryBlock__inner">
					<img v-lazyload :data-src="thumbLink ? thumbLink : finalLink" src="https://via.placeholder.com/330x200/" class="galleryBlock__image" alt="">

					<div class="galleryBlock__info">
						<!--										<h4>{{ title }}</h4>-->
						<!--															<p>Math</p>-->
						<a v-if="type === 'image'" href="#" class="aa-link"><span class="fa fa-eye fa-3x"></span></a>
						<a v-else-if="type === 'youtube'" href="#" class="aa-link"><span class="fab fa-youtube fa-3x"></span></a>
						<a v-else href="#" class="aa-link"><span class="fa fa-link fa-3x"></span></a>
					</div>
				</div>
			</div>
<!--			-->
<!--			<div class="mu-single-gallery">-->
<!--				<div class="mu-single-gallery-item">-->
<!--					<div class="mu-single-gallery-img">-->
<!--						<a href="#"><img alt="img" :src="thumbLink"></a>-->
<!--&lt;!&ndash;						<a href="#"><img alt="img" :src="images/layouts/founders/2.jpg"></a>&ndash;&gt;-->
<!--					</div>-->
<!--					<div class="mu-single-gallery-info">-->
<!--						<div class="mu-single-gallery-info-inner">-->
<!--							<h4>{{ title }}</h4>-->
<!--							&lt;!&ndash;															<p>Math</p>&ndash;&gt;-->
<!--							<a v-if="type === 'image'" href="#" class="aa-link"><span class="fa fa-eye"></span></a>-->
<!--							<a v-else-if="type === 'youtube'" href="#" class="aa-link"><span class="fab fa-youtube"></span></a>-->
<!--							<a v-else href="#" class="aa-link"><span class="fa fa-link"></span></a>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
		</a>
	</div>
	<!-- start single gallery image END -->
</template>

<script>
import lazyload from "~/directives/lazyload";

export default {
	// props: ['title', 'type', 'link', 'thumb', 'category'],
	props: {
		placeholder: {
			type: String,
			default: 'loading.gif'
		},
		thumbLink: {
			required: true
		},
		type: {
			type: String,
			required: true
		},
		finalLink: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		category: {
			type: Boolean|String,
			default: 'default'
		},
		alt: {
			type: String,
			default: ""
		},
		blurAmount: {
			type: Number,
			default: 5
		},
	},

	directives: {
		lazyload
	},
	name: "GalleryItem",
}
</script>

<style scoped>
	.aa-link {
		color: white !important;
	}
</style>
