<template>
	<div>
		<!-- Page breadcrumb -->
		<section id="mu-page-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-page-breadcrumb-area">
							<h2>Контакты</h2>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><nuxt-link to="/">Главная</nuxt-link></li>
								<li class="breadcrumb-item active">Контакты</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End breadcrumb -->

		<!-- Start contact  -->
		<section id="mu-contact">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-contact-area">
							<!-- Title -->
<!--							<div class="mu-title">-->
<!--								<h2>Свяжитесь с нами</h2>-->
<!--							</div>-->
<!--							&lt;!&ndash; Title END &ndash;&gt;-->

<!--							<br><br><br><br><br><br>-->
<!--							<p><strong>Email</strong>: slav.shkola.98@gmail.com </p>-->
<!--							<p><strong>Телефон</strong>: (010) 55 94 04 </p>-->
<!--							<p><strong>Адрес</strong>: г. Ереван, ул. Чаренца, 75 </p>-->

							<!-- start contact content -->
							<div class="mu-contact-content">
								<div class="row">
									<div class="col-md-6">
										<div class="mu-contact-left">
											<div class>
												<h2>Свяжитесь с нами</h2>
											</div>
											<!-- Title END -->

											<br><br>
											<p><strong>Email</strong>: slav.shkola.98@gmail.com </p>
											<p><strong>Телефон</strong>: (010) 55 94 04 </p>
											<p><strong>Адрес</strong>: г. Ереван, ул. Чаренца, 75 </p>
										</div>
									</div>

									<div class="col-md-6">
<!--										                                    <div class="mu-contact-right">-->
<!--										                                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6249.345033302234!2d-80.02791918555701!3d40.45935344513505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8834f411a7b748bd%3A0xaec8197db3de9a9e!2sCalifornia-Kirkbride%2C+Pittsburgh%2C+PA%2C+USA!3m2!1d40.4600435!2d-80.0213538!5e0!3m2!1sen!2sbd!4v1464270878470" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->
<!--										                                    </div>-->

										<div class="mu-contact-right" style="max-width: 100%; overflow: hidden">
											<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.2698083750297!2d44.526416658080485!3d40.1748029948485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf28f08249f%3A0xf0952bcc1ef7f41d!2z0J7RgdC90L7QstC90LDRjyDRiNC60L7Qu9CwIOKEljEwINC40LzQtdC90Lgg0KXRgNC40LzRj9C90LAg0JDQudGA0LjQutCw!5e0!3m2!1sru!2sbd!4v1591628910664!5m2!1sru!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
										</div>
									</div>
								</div>
							</div>
							<!-- end contact content -->
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End contact  -->
	</div>
</template>

<script>
    export default {
		head () {
			return {
				title: 'Контакты',
			}
		},

		// transition: 'page'
    }
</script>

<style scoped>

</style>
