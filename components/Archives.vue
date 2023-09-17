<template>
	<div>
		<h2>Archives</h2>
		<pre>
<!--			{{ articles }}-->
		</pre>
		<ul class="mu-sidebar-catg mu-sidebar-archives" id="accordion">
			<li v-for="year in years" :key="year">
				<h4>{{ year }}</h4>
				<ul>
					<li v-for="month in months" :key="month">
						<nuxt-link tag="a" :to="`/archive/${year}/${month}`">
<!--							year+monthKey: {{`${year}-${month}` }}-->
							{{ monthName(month) }} ({{ articlesByMonth[`${year}-${month}`] || 0 }})
<!--							{{ monthNames[month - 1] }}-->
						</nuxt-link>
					</li>
<!--					<a @click="selectMonth(month)">-->
<!--						{{ monthName(month) }} ({{ articlesByMonth[`${currentYear}-${month}`] || 0 }})-->
<!--					</a>-->
				</ul>
			</li>
		</ul>
	</div>


<!--	<div class="mu-single-sidebar">-->
<!--		<h3>Archives</h3>-->

<!--		<ul class="mu-sidebar-catg mu-sidebar-archives" id="accordion">-->

<!--			&lt;!&ndash;												@foreach($archives as $year => $months)&ndash;&gt;-->
<!--			&lt;!&ndash;												<li>&ndash;&gt;-->
<!--			&lt;!&ndash;													<div id="heading_{{ $loop->index }}">&ndash;&gt;-->
<!--			&lt;!&ndash;														<a class="btn btn-link py-0 my-0" data-toggle="collapse"&ndash;&gt;-->
<!--			&lt;!&ndash;														   data-target="#collapse_{{ $loop->index }}"&ndash;&gt;-->
<!--			&lt;!&ndash;														   aria-expanded="true"&ndash;&gt;-->
<!--			&lt;!&ndash;														   aria-controls="collapse_{{ $loop->index }}">&ndash;&gt;-->
<!--			&lt;!&ndash;															{{ $year }}&ndash;&gt;-->
<!--			&lt;!&ndash;														</a>&ndash;&gt;-->
<!--			&lt;!&ndash;													</div>&ndash;&gt;-->

<!--			&lt;!&ndash;													<div id="collapse_{{ $loop->index }}" class="collapse"&ndash;&gt;-->
<!--			&lt;!&ndash;														 aria-labelledby="heading_{{ $loop->index }}"&ndash;&gt;-->
<!--			&lt;!&ndash;														 data-parent="#accordion">&ndash;&gt;-->
<!--			&lt;!&ndash;														<div>&ndash;&gt;-->
<!--			&lt;!&ndash;															<ul style="list-style-type: none;">&ndash;&gt;-->
<!--			&lt;!&ndash;																@foreach($months as $month => $posts)&ndash;&gt;-->
<!--			&lt;!&ndash;																<li style="margin-left: 25px" class="">&ndash;&gt;-->
<!--			&lt;!&ndash;																	<a href="{{ route('news.index', ['year' => $year, 'month' => $month]) }}">&ndash;&gt;-->
<!--			&lt;!&ndash;																		{{ $month }}&ndash;&gt;-->
<!--			&lt;!&ndash;																		<span>( {{ count($posts) }} )</span>&ndash;&gt;-->
<!--			&lt;!&ndash;																	</a>&ndash;&gt;-->
<!--			&lt;!&ndash;																</li>&ndash;&gt;-->
<!--			&lt;!&ndash;																@endforeach&ndash;&gt;-->
<!--			&lt;!&ndash;															</ul>&ndash;&gt;-->
<!--			&lt;!&ndash;														</div>&ndash;&gt;-->
<!--			&lt;!&ndash;													</div>&ndash;&gt;-->
<!--			&lt;!&ndash;												</li>&ndash;&gt;-->
<!--			&lt;!&ndash;												@endforeach&ndash;&gt;-->

<!--			<li><a href="#">May <span>(25)</span></a></li>-->
<!--			<li><a href="">June <span>(35)</span></a></li>-->
<!--			<li><a href="">July <span>(20)</span></a></li>-->
<!--			<li><a href="">August <span>(125)</span></a></li>-->
<!--			<li><a href="">September <span>(45)</span></a></li>-->
<!--			<li><a href="">October <span>(85)</span></a></li>-->
<!--		</ul>-->
<!--	</div>-->
</template>
<script>
export default {
	data() {
		return {
			years: [], // Array to store the unique years extracted from the articles' dates
			months: [], // Array to store the unique months extracted from the articles' dates
			articlesByMonth: {}, // Object to store the count of articles in each month
		};
	},
	computed: {
		currentYear() {
			// Return the currently selected year from the years data property
			return this.years[0];
		},
	},
	mounted() {
		this.fetchArticlesData();
	},
	methods: {
		async fetchArticlesData() {
			// Fetch the articles data from Nuxt Content
			const articles = await this.$content('articles').fetch();

			// Extract the unique years and months from the articles' dates
			const years = [...new Set(articles.map(article => new Date(article.manualCreatedAt * 1000).getFullYear()))].sort().reverse();
			const months = [...new Set(articles.map(article => new Date(article.manualCreatedAt * 1000).getMonth() + 1))];

			// Update the data properties with the extracted years and months
			this.years = years;
			this.months = months;

			// Calculate the count of articles in each month
			const articlesByMonth = {};
			for (const article of articles) {
				const year = new Date(article.manualCreatedAt * 1000).getFullYear();
				const month = new Date(article.manualCreatedAt * 1000).getMonth() + 1;
				const key = `${year}-${month}`;
				articlesByMonth[key] = (articlesByMonth[key] || 0) + 1;
			}

			this.articlesByMonth = articlesByMonth;
			console.log(articlesByMonth);
		},
		selectMonth(month) {
			// Handle the click event on a month link
			// You can implement your own logic here to navigate to the archive page for the selected month
			console.log(`Selected month: ${this.currentYear}-${month}`);
		},
		monthName(month) {
			// Helper method to get the month name based on the month number
			const monthNames = [
				'January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'
			];
			return monthNames[month - 1];
		},
	},
};
</script>

<style scoped>
ul {
	padding-left: 1rem;
}
</style>
