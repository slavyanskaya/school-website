<template>
	<div class="mu-single-sidebar">
		<h3>Архивы</h3>

		<ul class="mu-sidebar-catg mu-sidebar-archives" id="accordion">
			<li v-for="(months, year) in grouped" :key="year" class="archive-year">
				<!-- Toggle button for the year (it was button, i changed to anchor a  tag)-->
				<a :class="['toggle-year', {'active': isOpen(year)}]" @click="toggle(year)" :aria-expanded="isOpen(year)">
					{{ year }}
<!--						<span class="year-button-text">{{ year }}</span>-->
				</a>

				<!-- List of months, shown only if year is expanded -->
				<transition name="expand">
					<ul class="archive-months" v-show="isOpen(year)">
						<li v-for="(posts, month) in months" :key="month">
							<nuxt-link :to="{name: 'archive-year-month', params: {year: year, month: month.padStart(2, '0')} }">
								{{ formatMonthName(month) }} ({{ posts.length }})
							</nuxt-link>
							<!--						<li class="breadcrumb-item"><nuxt-link :to="{name: 'articles-page', params: {page: 1} }">Новости</nuxt-link></li>-->
							<!--						<a :href="'/archive/' + year + '/' + month.padStart(2, '0')">-->
							<!--							{{ formatMonthName(month) }} {{ year }} ({{ posts.length }})-->
							<!--						</a>-->
						</li>
					</ul>
				</transition>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	// We accept the article list from parent component/page
	props: {
		articles: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			// Track which years are expanded
			expandedYears: []
		};
	},

	computed: {
		// Group articles by year and month
		grouped() {
			const groups = {};

			this.articles.forEach(article => {
				// Use manualCreatedAt (UNIX timestamp)
				const date = new Date(article.manualCreatedAt * 1000);

				const year = String(date.getFullYear());
				const month = String(date.getMonth() + 1); // JS months are 0-based

				// Ensure structure exists
				if (!groups[year]) groups[year] = {};
				if (!groups[year][month]) groups[year][month] = [];

				// Push article into correct bucket
				groups[year][month].push(article);
			});

			// Sort years descending
			const sorted = {};
			Object.keys(groups).sort((a, b) => b - a).forEach(year => {
				const months = groups[year];
				// Sort months descending
				const sortedMonths = {};
				Object.keys(months).sort((a, b) => b - a).forEach(month => {
					sortedMonths[month] = months[month];
				});
				sorted[year] = sortedMonths;
			});

			return sorted;
		}
	},

	methods: {
		// Toggle expand/collapse of a year
		toggle(year) {
			if (this.expandedYears.includes(year)) {
				this.expandedYears = this.expandedYears.filter(y => y !== year);
			} else {
				this.expandedYears.push(year);
			}
		},

		// Check if a year is expanded
		isOpen(year) {
			return this.expandedYears.includes(year);
		},

		// Convert month number to readable name (optional)
		formatMonthName(monthNum) {
			const date = new Date(2000, parseInt(monthNum) - 1, 1);
			return date
				.toLocaleString('ru-RU', { month: 'long' })
				.replace(/^./, s => s.toUpperCase()); // Optional To capitalize months first letter
		}
	}
};
</script>

<style scoped>
.archive-months {
	margin-left: 1.5em;
}

.toggle-year {
	background: none;
	border: none;
	font-weight: bold;
	cursor: pointer;
	font-size: 1em;
	padding: 0.2em 0;
}

.archive-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

/*Animations*/
/* Expand/collapse animation */
.expand-enter-active,
.expand-leave-active {
	transition: all 0.6s ease;
	overflow: hidden;
}

.expand-enter,
.expand-leave-to {
	max-height: 0;
	opacity: 0;
}

.expand-enter-to,
.expand-leave {
	max-height: 500px; /* adjust if needed */
	opacity: 1;
}

.toggle-year::before {
	content: '\25B6'; /* ▶ by default */
	display: inline-block;
	margin-right: 0.5em;
	transition: transform 0.3s ease;
}

.toggle-year.active::before {
	transform: rotate(90deg); /* arrow points down */
}

</style>
