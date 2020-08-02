<template>
	<fragment>
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
		<section id="mu-course-content">
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
											<div v-for="(article, index) in articles" :key="article.slug" class="col-md-12 col-sm-12">
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
														{{ formatDate(article.createdAt) }}
<!--														<span><i class="fa fa-comments-o"></i>87</span>-->
													</div>
													<div class="mu-blog-description">
<!--														<p>{!! limitString(strip_tags($news->content), 100) !!}</p>-->
														<nuxt-link class="mu-read-more-btn" :to="{name: 'article-slug', params: {slug: article.slug} }">Подробнее</nuxt-link>
													</div>
												</article>
											</div>
<!--											@empty-->
<!--											<p>No News</p>-->
<!--											@endforelse-->
										</div>
									</div>
									<!-- end course content container -->

									<!-- start course pagination -->
<!--									<div class="mu-pagination">-->
<!--										<nav>-->
<!--											<ul class="pagination">-->
<!--												<li>-->
<!--													<a href="#" aria-label="Previous">-->
<!--														<span class="fa fa-angle-left"></span> Prev-->
<!--													</a>-->
<!--												</li>-->
<!--												<li class="active"><a href="#">1</a></li>-->
<!--												<li><a href="#">2</a></li>-->
<!--												<li><a href="#">3</a></li>-->
<!--												<li><a href="#">4</a></li>-->
<!--												<li><a href="#">5</a></li>-->
<!--												<li>-->
<!--													<a href="#" aria-label="Next">-->
<!--														Next <span class="fa fa-angle-right"></span>-->
<!--													</a>-->
<!--												</li>-->
<!--											</ul>-->
<!--										</nav>-->
<!--									</div>-->
									<!-- end course pagination -->

									<!-- Pagination -->
<!--									{{ $all_news->appends(Request::Input())->links() }}-->

									<!-- Pagination END -->

<!--									<div class="pagination">-->
<!--										<a @click.prevent="changePageBefore" href="#"  class="pagination-previous button is-black">Previous &#x3c;</a>-->
<!--										<a @click.prevent="changePageAfter"  href="#" class="pagination-next button is-black">Next &#x3e;</a>-->
<!--									</div>-->

								</div>

<!--								<div class="col-md-3">-->
<!--									&lt;!&ndash; start sidebar &ndash;&gt;-->
<!--									<aside class="mu-sidebar">-->
<!--										&lt;!&ndash; start single sidebar &ndash;&gt;-->
<!--										<div class="mu-single-sidebar">-->
<!--											<h3>Categories</h3>-->
<!--											<ul class="mu-sidebar-catg">-->
<!--												<li><a href="#">Web Design</a></li>-->
<!--												<li><a href="">Web Development</a></li>-->
<!--												<li><a href="">Math</a></li>-->
<!--												<li><a href="">Physics</a></li>-->
<!--												<li><a href="">Camestry</a></li>-->
<!--												<li><a href="">English</a></li>-->
<!--											</ul>-->
<!--										</div>-->
<!--										&lt;!&ndash; end single sidebar &ndash;&gt;-->

<!--										&lt;!&ndash; start single sidebar &ndash;&gt;-->
<!--										<div class="mu-single-sidebar">-->
<!--											<h3>Popular News</h3>-->
<!--											<div class="mu-sidebar-popular-courses">-->
<!--												<div class="media">-->
<!--													<div class="media-left">-->
<!--														<a href="#">-->
<!--															<img class="media-object"-->
<!--																 src="{{ asset('assets/frontend/img/courses/1.jpg')}}"-->
<!--																 alt="img">-->
<!--														</a>-->
<!--													</div>-->
<!--													<div class="media-body">-->
<!--														<h4 class="media-heading"><a href="#">Medical Science</a></h4>-->
<!--														<span class="popular-course-price">$200.00</span>-->
<!--													</div>-->
<!--												</div>-->
<!--												<div class="media">-->
<!--													<div class="media-left">-->
<!--														<a href="#">-->
<!--															<img class="media-object"-->
<!--																 src="{{ asset('assets/frontend/img/courses/2.jpg')}}"-->
<!--																 alt="img">-->
<!--														</a>-->
<!--													</div>-->
<!--													<div class="media-body">-->
<!--														<h4 class="media-heading"><a href="#">Web Design</a></h4>-->
<!--														<span class="popular-course-price">$250.00</span>-->
<!--													</div>-->
<!--												</div>-->
<!--												<div class="media">-->
<!--													<div class="media-left">-->
<!--														<a href="#">-->
<!--															<img class="media-object"-->
<!--																 src="{{ asset('assets/frontend/img/courses/3.jpg')}}"-->
<!--																 alt="img">-->
<!--														</a>-->
<!--													</div>-->
<!--													<div class="media-body">-->
<!--														<h4 class="media-heading"><a href="#">Health & Sports</a></h4>-->
<!--														<span class="popular-course-price">$90.00</span>-->
<!--													</div>-->
<!--												</div>-->
<!--											</div>-->
<!--										</div>-->
<!--										&lt;!&ndash; end single sidebar &ndash;&gt;-->

<!--										&lt;!&ndash; start single sidebar &ndash;&gt;-->
<!--										<div class="mu-single-sidebar">-->
<!--											<h3>Archives</h3>-->

<!--											<ul class="mu-sidebar-catg mu-sidebar-archives" id="accordion">-->
<!--												@foreach($archives as $year => $months)-->
<!--												<li>-->
<!--													<div id="heading_{{ $loop->index }}">-->
<!--														<a class="btn btn-link py-0 my-0" data-toggle="collapse"-->
<!--														   data-target="#collapse_{{ $loop->index }}"-->
<!--														   aria-expanded="true"-->
<!--														   aria-controls="collapse_{{ $loop->index }}">-->
<!--															{{ $year }}-->
<!--														</a>-->
<!--													</div>-->

<!--													<div id="collapse_{{ $loop->index }}" class="collapse"-->
<!--														 aria-labelledby="heading_{{ $loop->index }}"-->
<!--														 data-parent="#accordion">-->
<!--														<div>-->
<!--															<ul style="list-style-type: none;">-->
<!--																@foreach($months as $month => $posts)-->
<!--																<li style="margin-left: 25px" class="">-->
<!--																	<a href="{{ route('news.index', ['year' => $year, 'month' => $month]) }}">-->
<!--																		{{ $month }}-->
<!--																		<span>( {{ count($posts) }} )</span>-->
<!--																	</a>-->
<!--																</li>-->
<!--																@endforeach-->
<!--															</ul>-->
<!--														</div>-->
<!--													</div>-->
<!--												</li>-->
<!--												@endforeach-->

<!--												<li><a href="#">May <span>(25)</span></a></li>-->
<!--												<li><a href="">June <span>(35)</span></a></li>-->
<!--												<li><a href="">July <span>(20)</span></a></li>-->
<!--												<li><a href="">August <span>(125)</span></a></li>-->
<!--												<li><a href="">September <span>(45)</span></a></li>-->
<!--												<li><a href="">October <span>(85)</span></a></li>-->
<!--											</ul>-->
<!--										</div>-->
<!--										&lt;!&ndash; end single sidebar &ndash;&gt;-->


<!--										&lt;!&ndash; start single sidebar &ndash;&gt;-->
<!--										<div class="mu-single-sidebar">-->
<!--											<h3>Tags Cloud</h3>-->
<!--											<div class="tag-cloud">-->
<!--												<a href="#">Health</a>-->
<!--												<a href="#">Science</a>-->
<!--												<a href="#">Sports</a>-->
<!--												<a href="#">Mathematics</a>-->
<!--												<a href="#">Web Design</a>-->
<!--												<a href="#">Admission</a>-->
<!--												<a href="#">History</a>-->
<!--												<a href="#">Environment</a>-->
<!--											</div>-->
<!--										</div>-->
<!--										&lt;!&ndash; end single sidebar &ndash;&gt;-->
<!--									</aside>-->
<!--									&lt;!&ndash; / end sidebar &ndash;&gt;-->
<!--								</div>-->
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Course Archive Content -->
	</fragment>
</template>

<script>
    export default {
        name: "index",

		head() {
        	return {
        		title: 'Новости, страница ' + this.$route.params.page
			};
		},
		// data() {
		// 	return {
		// 		perPage: 3,
		// 		articles: []
		// 	}
		// },

		async asyncData({ $content, params, route }) {
			const perPage = 3;
			let page = parseInt(params.page);
			console.log(route);
			let skip = page * perPage - perPage;

			let articles = await $content('articles')
				.without(['body'])
				.sortBy('createdAt', 'desc')
				.skip(skip)
				.limit(3)
				.fetch();

			// console.log(articles);
			// Use skip then limit. if you se limit then skip, it has a bug

			let pagesCount = Math.ceil
			(
			(
				await $content('articles')
					.only(['createdAt'])
					.fetch()
				).length / perPage
			);

			return {articles, page, pagesCount, skip};
		},

		methods: {
			formatDate(date) {
				const options = {year: 'numeric', month: 'long', day: 'numeric'};
				return new Date(date).toLocaleDateString('ru', options)
			},

			changePageBefore() {

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
		}
    }
</script>

<style scoped>

</style>
