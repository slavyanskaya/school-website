<template>
	<div>
		<!-- Page breadcrumb -->
		<section id="mu-page-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-page-breadcrumb-area">
							<h2>Новость</h2>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><nuxt-link to="/">Главная</nuxt-link></li>
								<li class="breadcrumb-item"><nuxt-link :to="{name: 'articles-page', params: {page: 1} }">Новости</nuxt-link></li>
								<li class=" breadcrumb-item active">Статья</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End breadcrumb -->

<!--		TODO First letter big-->

		<!-- Start Course Single Content -->
		<section id="mu-course-content">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-course-content-area">
							<div class="row">
								<div class="col-md-9">
									<!-- start course content container -->
									<div class="mu-course-container mu-blog-single">
										<div class="row">
											<div class="col-md-12">
												<article class="mu-blog-single-item">
													<figure class="mu-blog-single-img">
														<a href="#"><img :src="`/images/articles/${article.slug}/article-header-image.jpg`" :alt="article.description"></a>
														<br>
														<figcaption class="mu-blog-caption">
															<h3><strong href="#">{{ article.description }}</strong></h3>
														</figcaption>
													</figure>
													<br>

													<div class="mu-blog-description">
														<nuxt-content :document="article" />
														<hr class="w-100 my-2">
													</div>

													<!-- End blog social share -->
													<div class="mu-blog-meta">
														Автор: <i>{{ article.author.name }}</i>
														<br>
														{{ formatDate(article.manualCreatedAt * 1000) }}
														<!--														<a href="#">{{ article.diffForHumansAccessor }}</a>-->
														<!--														<span><i class="fa fa-comments-o"></i>87</span>-->
													</div>
												</article>
											</div>
										</div>
									</div>
									<!-- end course content container -->

									<!-- start blog navigation -->
<!--									                                <div class="row">-->
<!--									                                    <div class="col-md-12">-->
<!--										                                        <div class="mu-blog-single-navigation">-->
<!--											                                            <a class="mu-blog-prev" href="#"><span class="fa fa-angle-left"></span>Prev</a>-->
<!--											                                            <a class="mu-blog-next" href="#">Next<span class="fa fa-angle-right"></span></a>-->
<!--											                                        </div>-->
<!--										                                    </div>-->
<!--									                                </div>-->
									<!-- end blog navigation -->

									<!-- start related course item -->
<!--									                                <div class="row">-->
<!--									                                    <div class="col-md-12">-->
<!--										                                        <div class="mu-related-item">-->
<!--											                                            <h3>Related News</h3>-->
<!--											                                            <div class="mu-related-item-area">-->
<!--												                                                <div id="mu-related-item-slide">-->
<!--													                                                    <div class="col-md-6">-->
<!--														                                                        <article class="mu-blog-single-item">-->
<!--															                                                            <figure class="mu-blog-single-img">-->
<!--																                                                                <a href="#"><img alt="img" src="{{ asset('assets/frontend/assets/img/blog/blog-1.jpg') }}"></a>-->
<!--																                                                                <figcaption class="mu-blog-caption">-->
<!--																	                                                                    <h3><a href="#">Lorem ipsum dolor sit amet.</a></h3>-->
<!--																	                                                                </figcaption>-->
<!--																                                                            </figure>-->
<!--															                                                            <div class="mu-blog-meta">-->
<!--																                                                                <a href="#">By Admin</a>-->
<!--																                                                                <a href="#">02 June 2016</a>-->
<!--																                                                                <span><i class="fa fa-comments-o"></i>87</span>-->
<!--																                                                            </div>-->
<!--															                                                            <div class="mu-blog-description">-->
<!--																                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum non voluptatum eum repellendus quod aliquid. Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>-->
<!--																                                                                <a href="#" class="mu-read-more-btn">Read More</a>-->
<!--																                                                            </div>-->
<!--															                                                        </article>-->
<!--														                                                    </div>-->
<!--													                                                    <div class="col-md-6">-->
<!--														                                                        <article class="mu-blog-single-item">-->
<!--															                                                            <figure class="mu-blog-single-img">-->
<!--																                                                                <a href="#"><img alt="img" src="{{ asset('assets/frontend/assets/img/blog/blog-2.jpg') }}"></a>-->
<!--																                                                                <figcaption class="mu-blog-caption">-->
<!--																	                                                                    <h3><a href="#">Lorem ipsum dolor sit amet.</a></h3>-->
<!--																	                                                                </figcaption>-->
<!--																                                                            </figure>-->
<!--															                                                            <div class="mu-blog-meta">-->
<!--																                                                                <a href="#">By Admin</a>-->
<!--																                                                                <a href="#">02 June 2016</a>-->
<!--																                                                                <span><i class="fa fa-comments-o"></i>87</span>-->
<!--																                                                            </div>-->
<!--															                                                            <div class="mu-blog-description">-->
<!--																                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum non voluptatum eum repellendus quod aliquid. Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>-->
<!--																                                                                <a href="#" class="mu-read-more-btn">Read More</a>-->
<!--																                                                            </div>-->
<!--															                                                        </article>-->
<!--														                                                    </div>-->
<!--													                                                    <div class="col-md-6">-->
<!--														                                                        <article class="mu-blog-single-item">-->
<!--															                                                            <figure class="mu-blog-single-img">-->
<!--																                                                                <a href="#"><img alt="img" src="{{ asset('assets/frontend/assets/img/blog/blog-3.jpg') }}"></a>-->
<!--																                                                                <figcaption class="mu-blog-caption">-->
<!--																	                                                                    <h3><a href="#">Lorem ipsum dolor sit amet.</a></h3>-->
<!--																	                                                                </figcaption>-->
<!--																                                                            </figure>-->
<!--															                                                            <div class="mu-blog-meta">-->
<!--																                                                                <a href="#">By Admin</a>-->
<!--																                                                                <a href="#">02 June 2016</a>-->
<!--																                                                                <span><i class="fa fa-comments-o"></i>87</span>-->
<!--																                                                            </div>-->
<!--															                                                            <div class="mu-blog-description">-->
<!--																                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum non voluptatum eum repellendus quod aliquid. Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>-->
<!--																                                                                <a href="#" class="mu-read-more-btn">Read More</a>-->
<!--																                                                            </div>-->
<!--															                                                        </article>-->
<!--														                                                    </div>-->
<!--													                                                    <div class="col-md-6">-->
<!--														                                                        <article class="mu-blog-single-item">-->
<!--															                                                            <figure class="mu-blog-single-img">-->
<!--																                                                                <a href="#"><img alt="img" src="{{ asset('assets/frontend/assets/img/blog/blog-1.jpg') }}"></a>-->
<!--																                                                                <figcaption class="mu-blog-caption">-->
<!--																	                                                                    <h3><a href="#">Lorem ipsum dolor sit amet.</a></h3>-->
<!--																	                                                                </figcaption>-->
<!--																                                                            </figure>-->
<!--															                                                            <div class="mu-blog-meta">-->
<!--																                                                                <a href="#">By Admin</a>-->
<!--																                                                                <a href="#">02 June 2016</a>-->
<!--																                                                                <span><i class="fa fa-comments-o"></i>87</span>-->
<!--																                                                            </div>-->
<!--															                                                            <div class="mu-blog-description">-->
<!--																                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum non voluptatum eum repellendus quod aliquid. Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>-->
<!--																                                                                <a href="#" class="mu-read-more-btn">Read More</a>-->
<!--																                                                            </div>-->
<!--															                                                        </article>-->
<!--														                                                    </div>-->
<!--													                                                </div>-->
<!--												                                            </div>-->
<!--											                                        </div>-->
<!--										                                    </div>-->
<!--									                                </div>-->
									<!-- end start related course item -->

									<!-- start blog comment -->
<!--									                                <div class="row">-->
<!--									                                    <div class="col-md-12">-->
<!--										                                        <div class="mu-comments-area">-->
<!--											                                            <h3>5 Comments</h3>-->
<!--											                                            <div class="comments">-->
<!--												                                                <ul class="commentlist">-->
<!--													                                                    <li>-->
<!--														                                                        <div class="media">-->
<!--															                                                            <div class="media-left">-->
<!--																                                                                <img alt="img" src="{{ asset('assets/frontend/assets/img/testimonial-1.png') }}" class="media-object news-img">-->
<!--																                                                            </div>-->
<!--															                                                            <div class="media-body">-->
<!--																                                                                <h4 class="author-name">David Muller</h4>-->
<!--																                                                                <span class="comments-date"> Posted on 12th June, 2016</span>-->
<!--																                                                                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>-->
<!--																                                                                <a class="reply-btn" href="#">Reply <span class="fa fa-long-arrow-right"></span></a>-->
<!--																                                                            </div>-->
<!--															                                                        </div>-->
<!--														                                                    </li>-->
<!--													                                                    <li>-->
<!--														                                                        <div class="media">-->
<!--															                                                            <div class="media-left">-->
<!--																                                                                <img alt="img" src="{{ asset('assets/frontend/assets/img/testimonial-2.png') }}" class="media-object news-img">-->
<!--																                                                            </div>-->
<!--															                                                            <div class="media-body">-->
<!--																                                                                <h4 class="author-name">John Doe</h4>-->
<!--																                                                                <span class="comments-date"> Posted on 12th June, 2016</span>-->
<!--																                                                                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>-->
<!--																                                                                <a class="reply-btn" href="#">Reply <span class="fa fa-long-arrow-right"></span></a>-->
<!--																                                                            </div>-->
<!--															                                                        </div>-->
<!--														                                                    </li>-->
<!--													                                                    <ul class="children">-->
<!--														                                                        <li class="author-comments">-->
<!--															                                                            <div class="media">-->
<!--																                                                                <div class="media-left">-->
<!--																	                                                                    <img alt="img" src="{{ asset('assets/frontend/assets/img/testimonial-3.png') }}" class="media-object news-img">-->
<!--																	                                                                </div>-->
<!--																                                                                <div class="media-body">-->
<!--																	                                                                    <h4 class="author-name">Admin</h4>-->
<!--																	                                                                    <span class="comments-date"> Posted on 12th June, 2016</span>-->
<!--																	                                                                    <span class="author-tag">Author</span>-->
<!--																	                                                                    <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>-->
<!--																	                                                                    <a class="reply-btn" href="#">Reply <span class="fa fa-long-arrow-right"></span></a>-->
<!--																	                                                                </div>-->
<!--																                                                            </div>-->
<!--															                                                        </li>-->
<!--														                                                        <ul class="children">-->
<!--															                                                            <li>-->
<!--																                                                                <div class="media">-->
<!--																	                                                                    <div class="media-left">-->
<!--																		                                                                        <img alt="img" src="{{ asset('assets/frontend/assets/img/testimonial-1.png') }}" class="media-object news-img">-->
<!--																		                                                                    </div>-->
<!--																	                                                                    <div class="media-body">-->
<!--																		                                                                        <h4 class="author-name">David Muller</h4>-->
<!--																		                                                                        <span class="comments-date"> Posted on 12th June, 2016</span>-->
<!--																		                                                                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>-->
<!--																		                                                                        <a class="reply-btn" href="#">Reply <span class="fa fa-long-arrow-right"></span></a>-->
<!--																		                                                                    </div>-->
<!--																	                                                                </div>-->
<!--																                                                            </li>-->
<!--															                                                        </ul>-->
<!--														                                                    </ul>-->
<!--													                                                    <li>-->
<!--														                                                        <div class="media">-->
<!--															                                                            <div class="media-left">-->
<!--																                                                                <img alt="img" src="{{ asset('assets/frontend/assets/img/testimonial-2.png') }}" class="media-object news-img">-->
<!--																                                                            </div>-->
<!--															                                                            <div class="media-body">-->
<!--																                                                                <h4 class="author-name">Jhon Doe</h4>-->
<!--																                                                                <span class="comments-date"> Posted on 12th June, 2016</span>-->
<!--																                                                                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>-->
<!--																                                                                <a class="reply-btn" href="#">Reply <span class="fa fa-long-arrow-right"></span></a>-->
<!--																                                                            </div>-->
<!--															                                                        </div>-->
<!--														                                                    </li>-->
<!--													                                                </ul>-->
<!--												                                                &lt;!&ndash; comments pagination &ndash;&gt;-->
<!--												                                                <nav>-->
<!--													                                                    <ul class="pagination comments-pagination">-->
<!--														                                                        <li>-->
<!--															                                                            <a aria-label="Previous" href="#">-->
<!--																                                                                <span class="fa fa-long-arrow-left"></span>-->
<!--																                                                            </a>-->
<!--															                                                        </li>-->
<!--														                                                        <li><a href="#">1</a></li>-->
<!--														                                                        <li><a href="#">2</a></li>-->
<!--														                                                        <li><a href="#">3</a></li>-->
<!--														                                                        <li><a href="#">4</a></li>-->
<!--														                                                        <li><a href="#">5</a></li>-->
<!--														                                                        <li>-->
<!--															                                                            <a aria-label="Next" href="#">-->
<!--																                                                                <span class="fa fa-long-arrow-right"></span>-->
<!--																                                                            </a>-->
<!--															                                                        </li>-->
<!--														                                                    </ul>-->
<!--													                                                </nav>-->
<!--												                                            </div>-->
<!--											                                        </div>-->
<!--										                                    </div>-->
<!--									                                </div>-->
									<!-- end blog comment -->

									<!-- start respond form -->
<!--									                                <div class="row">-->
<!--									                                    <div class="col-md-12">-->
<!--										                                        <div id="respond">-->
<!--											                                            <h3 class="reply-title">Leave a Comment</h3>-->
<!--											                                            <form id="commentform">-->
<!--												                                                <p class="comment-notes">-->
<!--													                                                    Your email address will not be published. Required fields are marked <span class="required">*</span>-->
<!--													                                                </p>-->
<!--												                                                <p class="comment-form-author">-->
<!--													                                                    <label for="author">Name <span class="required">*</span></label>-->
<!--													                                                    <input type="text" required="required" size="30" value="" name="author">-->
<!--													                                                </p>-->
<!--												                                                <p class="comment-form-email">-->
<!--													                                                    <label for="email">Email <span class="required">*</span></label>-->
<!--													                                                    <input type="email" required="required" aria-required="true" value="" name="email">-->
<!--													                                                </p>-->
<!--												                                                <p class="comment-form-url">-->
<!--													                                                    <label for="url">Website</label>-->
<!--													                                                    <input type="url" value="" name="url">-->
<!--													                                                </p>-->
<!--												                                                <p class="comment-form-comment">-->
<!--													                                                    <label for="comment">Comment</label>-->
<!--													                                                    <textarea required="required" aria-required="true" rows="8" cols="45" name="comment"></textarea>-->
<!--													                                                </p>-->
<!--												                                                <p class="form-allowed-tags">-->
<!--													                                                    You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes:  <code>&lt;a href="" title=""&gt; &lt;abbr title=""&gt; &lt;acronym title=""&gt; &lt;b&gt; &lt;blockquote cite=""&gt; &lt;cite&gt; &lt;code&gt; &lt;del datetime=""&gt; &lt;em&gt; &lt;i&gt; &lt;q cite=""&gt; &lt;s&gt; &lt;strike&gt; &lt;strong&gt; </code>-->
<!--													                                                </p>-->
<!--												                                                <p class="form-submit">-->
<!--													                                                    <input type="submit" value="Post Comment" class="mu-post-btn" name="submit">-->
<!--													                                                </p>-->
<!--												                                            </form>-->
<!--											                                        </div>-->
<!--										                                    </div>-->
<!--									                                </div>-->
									<!-- end respond form -->
								</div>
								<div class="col-md-3">
									<!-- start sidebar -->
									<aside class="mu-sidebar">
										<!-- start single sidebar -->

										<!-- start single sidebar -->
<!--										<div class="mu-single-sidebar">-->
<!--											<h3>Archives</h3>-->
<!--											<ul class="mu-sidebar-catg mu-sidebar-archives">-->
<!--												<li><a href="#">May <span>(25)</span></a></li>-->
<!--												<li><a href="">June <span>(35)</span></a></li>-->
<!--												<li><a href="">July <span>(20)</span></a></li>-->
<!--												<li><a href="">August <span>(125)</span></a></li>-->
<!--												<li><a href="">September <span>(45)</span></a></li>-->
<!--												<li><a href="">October <span>(85)</span></a></li>-->
<!--											</ul>-->
<!--										</div>-->
										<!-- end single sidebar -->

										<!-- start single sidebar -->

										<!-- end single sidebar -->
									</aside>
									<!-- / end sidebar -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Course Single Content -->
	</div>
</template>

<script>
    export default {
        // name: "article",
		head() {
        	return {
        		title: this.article.description,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.article.description
					},

					{
						hid: 'article',
						name: 'article',
						content: this.article.bodyText
					}
				]
			};
		},
		async asyncData ({ $content, params }) {
			const article = await $content('articles', params.slug).fetch();
			return { article }
		},

		methods: {
			formatDate(date) {
				const options = {year: 'numeric', month: 'long', day: 'numeric'};
				return new Date(date).toLocaleDateString('ru', options)
			},
		}
    }
</script>

<style scoped>
	/*For some reason only works if not scoped, and that destroys the whole site text*/
	/*.mu-blog-description>p:first-child::first-letter {*/
	/*	font: bold italic 3em / .5 serif;*/
	/*	font-style: italic;*/
	/*	color: #607d8b;*/
	/*	float: left;*/
	/*	margin: 0.2em 0.25em .01em 0;*/
	/*}*/
</style>
