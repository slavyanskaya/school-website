<template>
  <!-- start single gallery image -->
  <div class="card col-md-4 col-sm-6 col-xs-12 filtr-item" :data-category="category">
    <a :href="link" :class="[{'fancybox.iframe': type === 'youtube'}, 'fancybox']" data-fancybox-group="gallery">
      <div class="mu-single-gallery">

        <div class="mu-single-gallery-img">
          <a href="#"><img alt="img" :src="thumb"></a>
        </div>

        <div class="mu-single-gallery-info">
            <h4>{{ title }}</h4>
            <!--															<p>Math</p>-->
            <a v-if="type === 'image'" href="#" class="aa-link"><span class="fa fa-eye"></span></a>
            <a v-else-if="type === 'youtube'" href="#" class="aa-link"><span class="fab fa-youtube"></span></a>
            <a v-else href="#" class="aa-link"><span class="fa fa-link"></span></a>
        </div>
      </div>
    </a>
  </div>
  <!-- start single gallery image END -->
</template>

<script>
export default {
  props: ['title', 'type', 'link', 'thumb', 'category'],

  name: "GalleryItem",
}
</script>

<style scoped>
/*.media-type-icon {*/
/*	position: absolute;*/
/*	background-color: red;*/
/*	top: 50%;*/
/*	left: 50%;*/
/*	transform: translate(-50%, -50%);*/
/*}*/
</style>
