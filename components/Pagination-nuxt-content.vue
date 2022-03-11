<template>
	<div class="mu-pagination">
			<nav>
				<ul class="pagination">
					<!-- First -->
					<li class='pagination__item'>
						<nuxt-link
							:class="[
								'pagination__link',
								'pagination__link--prev',
								{'disabled': meta.current_page == allPageNumbers[0] || allPageNumbers.length == 0}
							]"
							:to="{params: {page: allPageNumbers[0]}}">
							<!--                    :to="{query: {...$route.query, page: allPageNumbers[0]}}">-->
<!--							First-->
							<!--							<i class="fas fa-long-arrow-alt-left"></i>-->
							<i class="fas fa-angle-double-left"></i>
						</nuxt-link>
					</li>
					<!-- First END -->

					<!-- Previous -->
					<li class="pagination__item">
						<nuxt-link
							:class="[
								'pagination__link',
								{'disabled': meta.current_page <= allPageNumbers[0] || allPageNumbers.length == 0}
							]"
							:to="{params: {page: meta.current_page - 1}}">
							<!--            :to="{query: {...$route.query, page: meta.current_page - 1}}">-->
							<span class="fa fa-angle-left"></span>
						</nuxt-link>
					</li>
					<!-- Previous END -->

					<!-- Pages in Range -->
					<li
						v-for="(item, index) in pageNumbersInRange" :key="index"
						class="pagination__item">
						<nuxt-link
							:class="['pagination__link', {'pagination__link--active': item == meta.current_page}]"
							:to="{params: {page: item}}">{{ item }}
							<!--                :to="{query: {...$route.query, page: item}}">{{item }}-->
						</nuxt-link>
					</li>
					<!-- Pages in Range END -->

					<!-- Next -->
					<li class="pagination__item">
						<nuxt-link
							:class="[
								'pagination__link',
								{'disabled': meta.current_page >= allPageNumbers[allPageNumbers.length - 1] || allPageNumbers.length == 0}
							]"
							:to="{params: {page: meta.current_page + 1}}">
							<!--            :to="{query: {...$route.query, page: meta.current_page + 1}}">-->
							<span class="fa fa-angle-right"></span>
						</nuxt-link>
					</li>
					<!-- Next END -->

					<!-- Last -->
					<li class="pagination__item">
						<nuxt-link
							:class="[
								'pagination__link',
								'pagination__link--next',
								{'disabled': meta.current_page >= allPageNumbers[allPageNumbers.length - 1] || allPageNumbers.length == 0}
							]"
							:to="{params: {page: meta.last_page}}">
							<!--                    :to="{query: {...$route.query, page: meta.last_page}}">-->
<!--							Last-->
<!--							<i class="fas fa-long-arrow-alt-right"></i>-->
							<i class="fas fa-angle-double-right"></i>
						</nuxt-link>
					</li>
					<!-- Last END  -->
				</ul>
			</nav>
</div>







<!--    <nav class="pagination m-pagination">-->
<!--&lt;!&ndash;        PageNumbers: {{ allPageNumbers }}&ndash;&gt;-->
<!--&lt;!&ndash;        <br>&ndash;&gt;-->
<!--&lt;!&ndash;        FilteredItems: {{ pageNumbersInRange }}&ndash;&gt;-->
<!--&lt;!&ndash;        <br>&ndash;&gt;-->
<!--&lt;!&ndash;        meta: {{ meta }}&ndash;&gt;-->
<!--&lt;!&ndash;        <br>&ndash;&gt;-->
<!--&lt;!&ndash;        PageNumbers: {{ allPageNumbers }}&ndash;&gt;-->
<!--&lt;!&ndash;        <br>&ndash;&gt;-->
<!--&lt;!&ndash;        Start is {{ start }}&ndash;&gt;-->
<!--&lt;!&ndash;        <br>&ndash;&gt;-->
<!--&lt;!&ndash;        End is {{ end }}&ndash;&gt;-->
<!--&lt;!&ndash;        <br>&ndash;&gt;-->
<!--&lt;!&ndash;        Range is {{ range }}&ndash;&gt;-->
<!--&lt;!&ndash;        <br>&ndash;&gt;-->
<!--&lt;!&ndash;        Surround us is {{ surroundPages }}&ndash;&gt;-->
</template>

<script>
    export default {
        name: "Pagination",
        props: ['meta', 'range'],
        // props: ['meta', 'range', 'surroundPages'],
        data() {
            return {
                allPageNumbers: [],
                pageNumbersInRange: [],
                surroundPages: (this.range -1) / 2,
                start: 0,
                end: 0
            }
        },

        mounted() {
			// if (parseInt(this.$route.params.page) !== this.meta.current_page) {
			// 	this.$router.push({params: {page: this.current_page}})
			// }
			if (parseInt(this.$route.params.page) !== this.meta.current_page) {
				// alert('changed');
				this.$router.push({params: {page: this.meta.current_page}})
				return
			}

            this.setFilteredItems();
			// console.log('filtered items', this.pageNumbersInRange);
			// console.log('allPageNumbers', this.allPageNumbers);
        },

		created() {
			// if (parseInt(this.$route.params.page) !== this.current_page) {
			// 	console.log('changed');
			// 	this.$router.push({params: {page: this.current_page}})
			// }
			// this.$router.push({params: {page: this.current_page}})
		},
        // watch: {
        //     '$route.params.page': {
        //         // immediate: true, // I guess this can be true
        //         deep: true,
        //         handler() {
        //             this.setFilteredItems();
        //         }
        //     }
        // },

        methods: {
            setFilteredItems() {
                let start = 0;
                let end = 0;
                // let current = parseInt(this.$route.params.page) || 1;
				let current = this.meta.current_page

				// this.$route.params.page = 4;
				// this.$router.replace({ params: {page: current} })


                this.allPageNumbers = [];

                for (let i = 0; i < this.meta.last_page; i++){
                    this.allPageNumbers.push(i + 1);
                }

                if (current < this.range - this.surroundPages) {
                    start = 1;
                    end = start + this.range - 1;

                    /*
                        We have meta.current_page: 2, range: 9, surroundPages: 4
                        if (2 < 9 - 4)
                        We get start : 1, end: 1 + 9 - 1 = 9
                        then we get these pages 1 2 3 4 5 6 7 8 9
                    */
                } else if (
                    current <= this.allPageNumbers.length &&
                    current > this.allPageNumbers.length - this.range + this.surroundPages
                ) {
                    start = this.allPageNumbers.length - this.range + 1;
                    end = this.allPageNumbers.length;
                    /*
                        We have meta.current_page: 12, allPageNumbers.length 100, range: 9, surroundPages: 4
                        if ( (12 <= 100) && (12 > (100 - 9 + 4)) )
                        We get
                        start: 100 - 9 + 1,
                        end: 100
                    */
                } else {
                    start = current - this.surroundPages;
                    end = parseInt(current) + parseInt(this.surroundPages);
                    /*
                        We have meta.current_page: 12, allPageNumbers.length 100, range: 9, surroundPages: 4
                        if ( (12 <= 100) && (12 > (100 - 9 + 4)) )
                        We get
                        start: 100 - 9 + 1,
                        end: 100
                    */
                }

                if (start < 1) {
                    start = 1
                }

                if (end > this.allPageNumbers.length){
                    end = this.allPageNumbers.length;
                }

                this.pageNumbersInRange = [];

                for(let j = start; j <= end; j++) {
                    this.pageNumbersInRange.push(j);
                }

				// alert(this.allPageNumbers[this.allPageNumbers.length - 1])
				// alert(this.allPageNumbers)
            },
        },
    }
</script>

<style scoped lang="scss">
	.disabled {
		cursor: not-allowed;
		opacity: 0.6;
		pointer-events: none;
	}
	.mu-pagination {
		//display: inline;
	}

	.pagination {
		display: flex;
		flex-wrap: wrap;
		border-radius: 30px;

		//background: #fff;
		//box-shadow: 0 0 0 4px #E5E9F8;

		&__item {
			list-style: none;
			padding-bottom: 2px;
			padding-top: 2px;
		}

		&__link {
			display: block;
			text-decoration: none;
			width: 40px;
			height: 40px;
			line-height: 40px;
			margin: 5px;
			background: #fff;
			border-radius: 4px;
			text-align: center;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
			color: #2c3a47;

			&:hover,
			&--active {
				//background: #58b19f;
				background: #00BDFE;
				color: #fff;
			}

			&--prev {
				border-radius: 20px 0 0 20px;
			}

			&--next {
				border-radius: 0 20px 20px 0;
			}
		}
	}
</style>
