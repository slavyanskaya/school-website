<template>
	<section id="mu-latest-courses">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<div class="mu-latest-courses-area">
						<!-- Start Title -->
						<div class="mu-title">
							<h2>Latest Courses</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime
								mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat
								sunt animi!</p>
						</div>
						<!-- End Title -->


						<!-- Start latest course content -->
						<div id="mu-latest-course-slide" class="mu-latest-courses-content">

<!--							@foreach($latest_news as $news)-->
<!--							<div class="col-lg-4 col-md-4 col-xs-12">-->
<!--								<div class="mu-latest-course-single">-->
<!--									<figure class="mu-latest-course-img">-->
<!--										<a href="#"><img src="{{ asset('images/news/' .  $news->image ) }}" alt="img"></a>-->
<!--										<figcaption class="mu-latest-course-imgcaption">-->
<!--											<a href="#">{{ $news->createdAtAccessor }}</a>-->
<!--											<span><i class="fa fa-clock-o"></i>{{ $news->diffForHumansAccessor }}</span>-->
<!--										</figcaption>-->
<!--									</figure>-->

<!--									<div class="mu-latest-course-single-content">-->
<!--&lt;!&ndash;										                                       <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>&ndash;&gt;-->
<!--										<p>{{ $news->description }}</p>-->
<!--										<div class="mu-latest-course-single-contbottom">-->
<!--											<a class="mu-course-details" href="{{ route('admin.news.show', $news->id) }}">Подробнее</a>-->
<!--&lt;!&ndash;											                                           <span class="mu-course-price" href="#">$165.00</span>&ndash;&gt;-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--							@endforeach-->

							<div class="col-lg-4 col-md-4 col-xs-12">
								<div class="mu-latest-course-single">
									<figure class="mu-latest-course-img">
										<a href="#"><img src="/images/layouts/courses/2.jpg" alt="img"></a>
										<figcaption class="mu-latest-course-imgcaption">
											<a href="#">Engineering </a>
											<span><i class="fa fa-clock-o"></i>75Days</span>
										</figcaption>
									</figure>
									<div class="mu-latest-course-single-content">
										<h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi
											quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
										<div class="mu-latest-course-single-contbottom">
											<a class="mu-course-details" href="#">Details</a>
											<span class="mu-course-price" href="#">$165.00</span>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-xs-12">
								<div class="mu-latest-course-single">
									<figure class="mu-latest-course-img">
										<a href="#"><img src="/images/layouts/courses/3.jpg" alt="img"></a>
										<figcaption class="mu-latest-course-imgcaption">
											<a href="#">Academic</a>
											<span><i class="fa fa-clock-o"></i>45Days</span>
										</figcaption>
									</figure>
									<div class="mu-latest-course-single-content">
										<h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi
											quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
										<div class="mu-latest-course-single-contbottom">
											<a class="mu-course-details" href="#">Details</a>
											<span class="mu-course-price" href="#">$165.00</span>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-xs-12">
								<div class="mu-latest-course-single">
									<figure class="mu-latest-course-img">
										<a href="#"><img src="/images/layouts/courses/1.jpg" alt="img"></a>
										<figcaption class="mu-latest-course-imgcaption">
											<a href="#">Drawing</a>
											<span><i class="fa fa-clock-o"></i>90Days</span>
										</figcaption>
									</figure>
									<div class="mu-latest-course-single-content">
										<h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi
											quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
										<div class="mu-latest-course-single-contbottom">
											<a class="mu-course-details" href="#">Details</a>
											<span class="mu-course-price" href="#">$165.00</span>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-xs-12">
								<div class="mu-latest-course-single">
									<figure class="mu-latest-course-img">
										<a href="#"><img src="/images/layouts/courses/2.jpg" alt="img"></a>
										<figcaption class="mu-latest-course-imgcaption">
											<a href="#">Engineering </a>
											<span><i class="fa fa-clock-o"></i>75Days</span>
										</figcaption>
									</figure>
									<div class="mu-latest-course-single-content">
										<h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi
											quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
										<div class="mu-latest-course-single-contbottom">
											<a class="mu-course-details" href="#">Details</a>
											<span class="mu-course-price" href="#">$165.00</span>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-4 col-xs-12">
								<div class="mu-latest-course-single">
									<figure class="mu-latest-course-img">
										<a href="#"><img src="/images/layouts/courses/3.jpg" alt="img"></a>
										<figcaption class="mu-latest-course-imgcaption">
											<a href="#">Academic</a>
											<span><i class="fa fa-clock-o"></i>45Days</span>
										</figcaption>
									</figure>
									<div class="mu-latest-course-single-content">
										<h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi
											quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
										<div class="mu-latest-course-single-contbottom">
											<a class="mu-course-details" href="#">Details</a>
											<span class="mu-course-price" href="#">$165.00</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- End latest course content -->

					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script>
    export default {
        name: "LatestCourses"
    }
</script>

<style scoped>

</style>
