<template>
	<div>
		<!-- Page breadcrumb -->
		<section id="mu-page-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-page-breadcrumb-area">
							<h2 style="color: white">Новости</h2>

							<ol class="breadcrumb">
								<li class="breadcrumb-item"><nuxt-link to="/">Главная</nuxt-link></li>
								<li class=" breadcrumb-item active">Новости</li>
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
								<div class="col-md-9">
									<!-- start course content container -->
									<div class="mu-course-container mu-blog-archive">
										<div class="row">
<!--											@forelse($all_news as $news)-->
											<div v-for="(article, index) in articles" :key="article.slug" class="col-md-12 col-sm-12 my-lg-3">
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

										<div class="row">
											<PaginationNuxtContent ref="paginator" :meta="meta" :range="5"/>
										</div>
									</div>
								</div>

								<div class="col-md-3">
									<aside class="mu-sidebar sticky-top">
										<ArchiveWidget :articles="allArticles" />
									</aside>
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
	import PaginationNuxtContent from "~/components/Pagination-nuxt-content";
	import ArchiveWidget from '~/components/ArchiveWidget.vue';

    export default {
        name: "index",

		head() {
        	return {
        		title: 'Новости, страница ' + this.$route.params.page
			};
		},

		async asyncData({ $content, params, route, router }) {
			const perPage = 7;

			let pagesCount = Math.ceil
			(
				(
					await $content('articles')
						.only(['manualCreatedAt'])
						.fetch()
				).length / perPage
			);

			let current_page = parseInt(params.page);
			if (current_page > pagesCount) {
				current_page = pagesCount;
				// route.push({ params: {page: current} })
			}
			if (current_page < 1) {
				current_page = 1;
				// route.push({ params: {page: current} })
			}
			// params.page = current_page;

			console.log('current', current_page);
			let skip = (current_page * perPage) - perPage;

			let articles = await $content('articles')
				.without(['body'])
				.sortBy('manualCreatedAt', 'desc')
				.skip(skip)
				.limit(perPage)
				.fetch();

			let allArticles = await $content('articles')
				.without(['body'])
				.fetch();
			// console.log(articles);
			// Use skip then limit. if you se limit then skip, it has a bug



			let meta = {current_page, last_page: pagesCount}
			console.log('allArticles', allArticles)
			return {articles, current_page, pagesCount, skip, meta, allArticles};
		},

		// created() {
		// 	if (parseInt(this.$route.params.page) !== this.current_page) {
		// 		console.log('changed');
		// 		this.$router.push({params: {page: this.current_page}})
		// 	}
		// 	// this.$router.push({params: {page: this.current_page}})
		// },

		methods: {
			formatDate(date) {
				const options = {year: 'numeric', month: 'long', day: 'numeric'};
				return new Date(date).toLocaleDateString('ru', options)
			},

			changePageBefore() {
				// alert(this.pagesCount);
				// alert(parseInt(this.$route.params.current_page) - 1)
				this.$router.push({
					name: 'articles-page',
					params: {
						page: parseInt(this.$route.params.page) - 1
					}
				})
			},

			changePageAfter() {

				this.$router.push({
					name: 'articles-page',
					params: {
						page: parseInt(this.$route.params.page) + 1
					}
				})
			}
		},

		components: {
			PaginationNuxtContent,
			ArchiveWidget
		}
    }
</script>

<style scoped>

</style>
