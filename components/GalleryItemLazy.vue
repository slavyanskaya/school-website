<template>
	<!-- start single gallery image -->
	<li
		class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 galleryBlock__item mix filtr-item"
		:data-category="category"
		data-sort="value"
	>
		<a :href="finalLink" :class="[{'fancybox.iframe': type === 'youtube'}, 'fancybox', 'galleryBlock__link']" data-fancybox-group="gallery">
			<div class="galleryBlock__container">
				<!--							<div  >-->
				<div class="galleryBlock__inner">
					<img :src="imageThumb" class="galleryBlock__image" alt="">

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
<!--						<a href="#"><img alt="img" :src="imageThumb"></a>-->
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
	</li>
	<!-- start single gallery image END -->
</template>

<script>
export default {
	// props: ['title', 'type', 'link', 'thumb', 'category'],
	props: {
		placeholder: {
			type: String,
			default: 'loading.gif'
		},
		thumbLink: {
			type: String,
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
			type: String,
			required: true
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

	data() {
		return {
			imagePlaceholder : this.placeholder,
			imageThumb : this.placeholder,
			loaded : false,
			completed : false,
			// styleObject: {
			// 	filter: `blur(${this.blurAmount}px)`,
			// 	transition: "all 1s"
			// }
		}
	},

	methods: {
		setWindowLoaded() {
			setTimeout(() => {
				this.loaded = true;
			},100)
		},
		lazyLoad() {
			if (this.loaded && !this.completed) {
				this.completed = true;
				this.imageThumb = this.thumbLink;
				// this.styleObject = {
				// 	transition: "all 1s"
				// };
			}
		},
	},

	mounted() {
		window.addEventListener('load', this.setWindowLoaded);

		window.addEventListener('scroll', this.lazyLoad);

	},
	name: "GalleryItem",
}
</script>

<style scoped>

</style>
