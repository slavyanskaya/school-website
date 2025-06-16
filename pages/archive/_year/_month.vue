<template>
	<div>
		<!-- Page breadcrumb -->
		<section id="mu-page-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-page-breadcrumb-area">
							<h2 style="color: white">Архив</h2>

							<ol class="breadcrumb">
								<li class="breadcrumb-item"><nuxt-link to="/">Главная</nuxt-link></li>
								<li class=" breadcrumb-item active">Новости за {{ monthName }} {{ $route.params.year }} года</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End breadcrumb -->

		<!-- Start Course Archive Content -->
		<section id="mu-course-content" style="min-height: 100vh">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-course-content-area">
							<div class="row">
								<div class="col-md-9 my-lg-3">
									<!-- start course content container -->
									<div class="mu-course-container mu-blog-archive">
										<div class="row">
											<!--											@forelse($all_news as $news)-->
											<div v-for="(article, index) in filteredArticles" :key="article.slug" class="col-md-12 col-sm-12 ">
												<article class="mu-blog-single-item">
													<figure class="mu-blog-single-img">
														<figcaption class="mu-blog-caption">
															<h3>
																<strong>
																	<nuxt-link :to="{name: 'article-slug', params: {slug: article.slug} }">{{ article.description }}</nuxt-link>
																</strong>
															</h3>
														</figcaption>

														<a href="#"><img :src="`/images/articles/${article.slug}/article-header-image.jpg`" :alt="article.description"></a>

														<!--														<a href="#"><img :src="`images/news/${article.img}`" alt="img"></a>-->
													</figure>
													<div class="mu-blog-meta">
														Автор: <i>{{ article.author.name }}</i>
														<br>
														{{ formatDate(article.manualCreatedAt * 1000) }}
														<!--														<span><i class="fa fa-comments-o"></i>87</span>-->
													</div>

													<div class="mu-blog-description">
														<!--														<p>{!! limitString(strip_tags($news->content), 100) !!}</p>-->
														<nuxt-link class="mu-read-more-btn" :to="{name: 'article-slug', params: {slug: article.slug} }">Подробнее</nuxt-link>
														<hr class="w-100">
													</div>
												</article>
											</div>
										</div>

									</div>

								</div>

								<div class="col-md-3 my-lg-3">
									<!-- start sidebar -->
									<aside class="mu-sidebar sticky-top">
										<ArchiveWidget :articles="allArticles" />
									</aside>
									<!-- / end sidebar -->

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Course Archive Content -->
	</div>
</template>

<script>

import ArchiveWidget from '~/components/ArchiveWidget.vue';

export default {
	name: "archive",

	head() {
		return {
			title: 'Архив ' + this.$route.params.year + '/' + this.$route.params.month
		};
	},

	async asyncData({ params, $content }) {
		const { year, month } = params;

		// Fetch all articles — Nuxt Content doesn’t support month filters yet
		const allArticles = await $content('articles')
			.sortBy('manualCreatedAt', 'desc')
			.fetch();

		// Convert year and month to compare with manualCreatedAt (UNIX timestamp)
		const filteredArticles = allArticles.filter(article => {
			if (!article.manualCreatedAt) return false;

			const date = new Date(article.manualCreatedAt * 1000);
			const y = date.getFullYear();
			const m = date.getMonth() + 1;

			return y == year && m == parseInt(month);
		});

		return {
			year,
			month,
			filteredArticles,
			allArticles
		};
	},

	methods: {
		formatDate(date) {
			const options = {year: 'numeric', month: 'long', day: 'numeric'};
			return new Date(date).toLocaleDateString('ru', options)
		},
	},



	computed: {
		// Convert month number to full name
		monthName() {
			const date = new Date(2000, this.month - 1, 1);
			return date
				.toLocaleString('ru-RU', { month: 'long' })
		},
		monthNameCapitalized() {
			return this.monthName
				.replace(/^./, s => s.toUpperCase()); // Optional To capitalize months first letter
		},
	},

	components: {
		ArchiveWidget
	}
}
</script>

<style scoped>

</style>
