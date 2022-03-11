// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
// 	router: {
// 		base: '/nuxt-content-test/'
// 	}
// } : {}


export default {
	server: {
		port: 3000, // default: 3000
		host: '0.0.0.0', // default: localhost
	},

	/*
	** Nuxt rendering mode
	** See https://nuxtjs.org/api/configuration-mode
	*/
	mode: 'universal',
	/*
	** Nuxt target
	** See https://nuxtjs.org/api/configuration-target
	*/
	target: 'static',
	/*
	** Headers of the page
	** See https://nuxtjs.org/api/configuration-head
	*/
	head: {
		titleTemplate: "Славянская | %s",
		// title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'google-site-verification', content: 'i_iGtKzqlpNjcH-8o7VrZPZ_gL9mKWbOrrTW5ERQiMU'},
			// {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
			{hid: 'description', name: 'description', content: process.env.npm_package_description || "Русская Школа В Армении, Русская Школа В Ереване, СШ Славянская, СШ 'Славянская', Средняя Школа Славянская, Армения Русская Школа, Армения Русская Школа, Славянская Школа В Армении, Slavyanskaya, Slavyanskaya Shkola, Russkaya Shkola V Armenii"},
			{
				htmlAttrs: {
					lang: 'ru',
					amp: true
				}
			},
			{ hid: 'keywords', name: 'keywords', content: "Русская Школа В Армении, Русская Школа В Ереване, СШ Славянская, СШ 'Славянская', Средняя Школа Славянская, Армения Русская Школа, Армения Русская Школа, Славянская Школа В Армении, Slavyanskaya, Slavyanskaya Shkola, Russkaya Shkola V Armenii" }
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico'},

			{rel: 'apple-touch-icon', sizes: "180x180", type: 'image/x-icon', href: '/favicons/apple-touch-icon.png'},
			{rel: 'icon', sizes: "32x32", type: 'image/x-icon', href: '/favicons/favicon-32x32.png'},
			{rel: 'icon', sizes: "16x16", type: 'image/x-icon', href: '/favicons/favicon-16x16.png'},
			{rel: 'manifest', href: '/favicons/site.webmanifest'},

			{rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'},
			// {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css'},
			{rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'},

			{rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css', media: "screen" },

			{rel: 'stylesheet', href: '/css/slick.css'},
		],
		script: [
			{src: 'https://code.jquery.com/jquery-3.4.1.min.js', type: 'text/javascript', body: true},
			{src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', type: 'text/javascript', body: true},
			{src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', type: 'text/javascript', body: true},
			{src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2', type: 'text/javascript', body: true, async: true, defer: true},
			{src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js', type: 'text/javascript', body: true},
			{src: '/js/slick.js', type: 'text/javascript', body: true},
		]
	},

	/*
	** Global CSS
	*/
	css: ["~/assets/sass/app.scss"],

	/* Layout Transitions */
	// layoutTransition: {
	// 	name: "page",
	// 	mode: "out-in"
	// },
	//
	// pageTransition: {
	// 	name: "page",
	// 	mode: "out-in"
	// },

	transition: {
		name: 'page',
		mode: 'out-in'
	},


   	// Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
	ssr: false,

	loadingIndicator: {
		name: 'rectangle-bounce',
		color: '#3B8070',
		background: 'white'
	},

	/* Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
		// './plugins/vue-frag'
	],
	/*
	** Auto import components
	** See https://nuxtjs.org/api/configuration-components
	*/

	router: {
		// linkActiveClass: "nav__item--active",
		linkExactActiveClass: "nav__link--active",
		// base: '/nuxt-content-test/'
	},

	components: true,
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/google-analytics',
	],

	googleAnalytics: {
		id: 'UA-174236294-1', // Used as fallback if no runtime config is provided
	},

	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/axios',
		'@nuxt/content',
		'@nuxtjs/sitemap',
	],

	sitemap: {
		// path: '/cryptoticker.cc.xml',
		hostname: 'https://slavyanskaya.school',
		cacheTime: 1000 * 60 * 15,
		gzip: true,
		// generate: false,
		exclude: [
			'/account/**',
			'/account',
			'/admin/**',
			'/admin',
		],

		routes: async () => {
			// articles routes
			const { $content } = require('@nuxt/content');
			let articles = await $content('articles').only(['slug', 'manualCreatedAt', 'updatedAt']).fetch();
			let articleRoutes = articles.map( (article) => {
				return {
					url: `/article/${article.slug}`,
					changefreq: 'weekly',
					priority: 0.8,
					lastmod: article.updatedAt
				};
			});

			// articles pages routes. Not sure if we need sitemaps of these
			const perPage = 10;
			let skip;
			let most_recent_update_of_current_pages_articles;
			let current_pages_articles;
			let articlePagesRoutes = [];
			const pagesAmount = Math.ceil(articles.length / perPage);

			for (let currentPage = 1; currentPage <= pagesAmount; currentPage++) {
				skip = currentPage * perPage - perPage; // 1 * 2 -2 (0), 2 * 2 - 2 (2), 3 * 2 - 2 (4)

				current_pages_articles = await $content('articles')
					.only(['slug', 'manualCreatedAt', 'updatedAt'])
					.sortBy('manualCreatedAt', 'desc')
					.skip(skip)
					.limit(perPage)
					.fetch();

				// Get most recent updated article in page
				most_recent_update_of_current_pages_articles =
					current_pages_articles
						.map( (a) => a.updatedAt)
						.sort( (a1, a2) => a1 > a2 ? 1 : -1)[0];

				articlePagesRoutes.push({
					url: `/articles/${currentPage}`,
					changefreq: 'weekly',
					priority: 0.8,
					lastmod: most_recent_update_of_current_pages_articles
				});
			}

			return [
				{
					url: '/',
					changefreq: 'weekly',
					priority: 1
				},
				{
					url: '/contacts',
					changefreq: 'daily',
					priority: 1,
				},
				...articlePagesRoutes, // Not sure if we need sitemaps of these
				...articleRoutes
			];
		}
	},

	// for sass
	// styleResources: {
	//   scss: [
	//     'assets/scss/file/_path.scss',
	//     'assets/scss/file/_path-two.scss'
	//   ]
	// },
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** Content module configuration
	** See https://content.nuxtjs.org/configuration
	*/
	content: {},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/

	generate: {
		fallback: "404.html",

		routes: async () => {
			// Standard routes like /, /about, /contacts, /gallery etc are crawled with nuxt crawler if we have nuxt-links to them,
			// Here we add dynamic routes

			// articles routes
			const { $content } = require('@nuxt/content');
			let articles = await $content('articles').only(['slug', 'manualCreatedAt', 'updatedAt']).fetch();
			let articleRoutes = articles.map( (article) => `/article/${article.slug}`);

			// articles pages routes
			const perPage = 2;
			let skip;
			let current_pages_articles;
			let articlePagesRoutes = [];
			const pagesAmount = Math.ceil(articles.length / perPage);

			for (let currentPage = 1; currentPage <= pagesAmount; currentPage++) {
				skip = currentPage * perPage - perPage; // 1 * 2 -2 (0), 2 * 2 - 2 (2), 3 * 2 - 2 (4)

				current_pages_articles = await $content('articles')
					.only(['slug', 'manualCreatedAt', 'updatedAt'])
					.sortBy('manualCreatedAt', 'desc')
					.skip(skip)
					.limit(perPage)
					.fetch();

				articlePagesRoutes.push(`/articles/${currentPage}`);
			}

			return [
				...articlePagesRoutes,
				...articleRoutes
			];
		}
	},

	export: {
		fallback: "404.html",

		routes: async () => {
			// Standard routes like /, /about, /contacts, /gallery etc are crawled with nuxt crawler if we have nuxt-links to them,
			// Here we add dynamic routes

			// articles routes
			const { $content } = require('@nuxt/content');
			let articles = await $content('articles').only(['slug', 'manualCreatedAt', 'updatedAt']).fetch();
			let articleRoutes = articles.map( (article) => `/article/${article.slug}`);

			// articles pages routes
			const perPage = 2;
			let skip;
			let current_pages_articles;
			let articlePagesRoutes = [];
			const pagesAmount = Math.ceil(articles.length / perPage);

			for (let currentPage = 1; currentPage <= pagesAmount; currentPage++) {
				skip = currentPage * perPage - perPage; // 1 * 2 -2 (0), 2 * 2 - 2 (2), 3 * 2 - 2 (4)

				current_pages_articles = await $content('articles')
					.only(['slug', 'manualCreatedAt', 'updatedAt'])
					.sortBy('manualCreatedAt', 'desc')
					.skip(skip)
					.limit(perPage)
					.fetch();

				articlePagesRoutes.push(`/articles/${currentPage}`);
			}

			return [
				...articlePagesRoutes,
				...articleRoutes
			];
		}
		// fallback: "404.html",

		// routes: function () {
		// 	let posts = axios.get('https://api.com/posts', {params: {size: 10}}).then((res) => {
		// 		return res.data.posts.map((post) => {
		// 			return {
		// 				route: '/feed/' + post.id,
		// 				payload: post
		// 			}
		// 		})
		// 	})
		// },

		// async routes () {
		// 	// const { $content } = require('@nuxt/content');
		// 	// const files = await $content('articles').only(['slug']).fetch();
		// 	// console.log(files);
		// 	// return files.map(file => '/article/' + file.slug);
		// 	return [
		// 		'/articles/1',
		// 		'/articles/2',
		// 		'/articles/3',
		// 		'/articles/4',
		// 	];
		// }
	},

	build: {
		// fallback: true

	}
}
