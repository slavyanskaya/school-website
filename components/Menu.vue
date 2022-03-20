<template>
	<!-- Start menu -->
	<section>
		<nav class="navbar navbar-default navbar_default bg-default navbar-expand-md px-0 shadow-sm" role="navigation">
			<div class="container">
				<nuxt-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/" exact class="navbar-brand navbar_brand">
					<!-- Logo Image -->
					<img src="/logo.png" width="45" alt=""
						 class="d-inline-block align-middle mr-2">
					<!-- Logo Text -->
					<span class="text-uppercase font-weight-bold">Славянская</span>
				</nuxt-link>

<!--				<a href="#" class="navbar-brand navbar_brand">-->
<!--					&lt;!&ndash; Logo Image &ndash;&gt;-->
<!--					<img src="/logo.png" width="45" alt=""-->
<!--						 class="d-inline-block align-middle mr-2">-->
<!--					&lt;!&ndash; Logo Text &ndash;&gt;-->
<!--					<span class="text-uppercase font-weight-bold">Славянская</span>-->
<!--				</a>-->

				<button
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					class="navbar-toggler text-dark">

                <span class="navbar-toggler-icon">
                    <i class="fa fa-bars" style="color: #000; font-size:28px;"></i>
                </span>
				</button>

				<div id="navbarSupportedContent" class="collapse navbar-collapse">
					<ul class="navbar-nav navbar_nav ml-auto">
						<li class="d-md-none d-lg-inline-block nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path === '/'}">
							<nuxt-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/" exact class="nav-link nav__link ">Главная</nuxt-link>
						</li>

<!--						<li class="nav-item nav__item text-center px-1"-->
<!--							:class="{'nav__item&#45;&#45;active': $nuxt.$route.path == '/gallery'}">-->
<!--							<nuxt-link to="/gallery" exact class="nav-link nav__link ">Галлерея</nuxt-link>-->
<!--						</li>-->

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path === '/about'}">
							<nuxt-link data-toggle="collapse" data-target=".navbar-collapse.show" :to="{name: 'about'}" exact class="nav-link nav__link ">О школе</nuxt-link>
						</li>

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path === '/founders'}">
							<nuxt-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/founders" exact class="nav-link nav__link ">Учредитель</nuxt-link>
						</li>

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path === '/gallery'}">
							<nuxt-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/gallery" exact class="nav-link nav__link ">Галерея</nuxt-link>
						</li>

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': ($nuxt.$route.name === 'articles-page') || ($nuxt.$route.name === 'article-slug')}">
							<nuxt-link data-toggle="collapse" data-target=".navbar-collapse.show" :to="{name: 'articles-page', params: {page: 1} }" exact class="nav-link nav__link" :class="{'nav__link--active': ($nuxt.$route.name === 'articles-page') || ($nuxt.$route.name === 'article-slug')}">Новости</nuxt-link>
						</li>

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path === '/contact'}">
							<nuxt-link data-toggle="collapse" data-target=".navbar-collapse.show"  to="/contact" exact class="nav-link nav__link ">Контакты</nuxt-link>
						</li>

						<!--            <li class="nav-item nav__item dropdown">-->
						<!--                <a class="nav-link nav__link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
						<!--                      Дропдаун-->
						<!--                  </a>-->
						<!--                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">-->
						<!--                      <a class="dropdown-item" href="#">Action</a>-->
						<!--                      <a class="dropdown-item" href="#">Another action</a>-->
						<!--                      <a class="dropdown-item" href="#">Something else here</a>-->
						<!--                  </div>-->
						<!--            </li>-->
					</ul>
				</div>
			</div>
		</nav>
	</section>
</template>

<script>
	export default {
		name: "Menu"
	}
</script>

<style scoped>

</style>
