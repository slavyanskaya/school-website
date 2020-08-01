<template>
	<!-- Start menu -->
	<section>
		<nav class="navbar navbar-default navbar_default bg-default navbar-expand-md shadow-sm" role="navigation">
			<div class="container">
				<a href="#" class="navbar-brand navbar_brand">
					<!-- Logo Image -->
					<img src="logo.png" width="45" alt=""
						 class="d-inline-block align-middle mr-2">
					<!-- Logo Text -->
					<span class="text-uppercase font-weight-bold">Славянская</span>
				</a>

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
						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path == '/'}">
							<nuxt-link to="/" exact class="nav-link nav__link ">Home</nuxt-link>
						</li>

<!--						<li class="nav-item nav__item text-center px-1"-->
<!--							:class="{'nav__item&#45;&#45;active': $nuxt.$route.path == '/gallery'}">-->
<!--							<nuxt-link to="/gallery" exact class="nav-link nav__link ">Галлерея</nuxt-link>-->
<!--						</li>-->

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path == '/about'}">
							<nuxt-link :to="{name: 'about'}" exact class="nav-link nav__link ">О школе</nuxt-link>
						</li>

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path == '/founders'}">
							<nuxt-link to="/founders" exact class="nav-link nav__link ">Учредитель</nuxt-link>
						</li>

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path == '/articles.index'}">
							<nuxt-link :to="{name: 'articles-page', params: {page: 1} }" exact class="nav-link nav__link">Новости</nuxt-link>
						</li>

						<li class="nav-item nav__item text-center px-1"
							:class="{'nav__item--active': $nuxt.$route.path == '/contact'}">
							<nuxt-link  to="/contact" exact class="nav-link nav__link ">Контакты</nuxt-link>
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
