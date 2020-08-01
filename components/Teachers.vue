<template>
	<section id="mu-our-teacher">
		<div class="container">
			&nbsp;
			<div class="row">
				<div class="col-md-12">
					<div class="mu-our-teacher-area slider" id="teacher">
						<div class="mu-title">
							<h2>Our Teachers</h2>
							<p>Для наших педагогов СШ "Славянская" - это образ жизни!</p>
						</div>

						<div class="mu-our-teacher-content">
							<div class="slider-nav">
								<div class="slider__item">
									<img width="200" height="200" style="border-radius: 50%" src="/images/teachers/mkrtchyan-marina-garasovna.jpg" alt="teacher img">
								</div>

								<div class="slider__item">
									<img width="200" height="200" style="border-radius: 50%" src="/images/teachers/anaida-rafikovna-melikyan.jpg" alt="teacher img">
								</div>

								<div class="slider__item">
									<img width="200" height="200" style="border-radius: 50%" src="/images/teachers/vasilevna-natalya-ivanovna.jpg" alt="teacher img">
								</div>

								<div class="slider__item">
									<img width="200" height="200" style="border-radius: 50%" src="/images/teachers/nonna-genrihovna-gaziyan.jpg" alt="teacher img">
								</div>

								<div class="slider__item">
									<img width="200" height="200" style="border-radius: 50%" src="/images/teachers/vardanyan-natalya-sergeevna.jpg" alt="teacher img">
								</div>

								<div class="slider__item">
									<img width="200" height="200" style="border-radius: 50%" src="/images/teachers/hayrapetyan-lilit-valeryevna.jpg" alt="teacher img">
								</div>

								<div class="slider__item">
									<img width="200" height="200" style="border-radius: 50%" src="/images/teachers/tatyana-stepanovna-belousova.jpg" alt="teacher img">
								</div>
							</div>

							<div ref="sluyder" class="slider-for">
								<div class="slider__item">
									<h2>Мкртчян Марина Гарасовна</h2>
									<span class="slide__position">Преподаватель начальных классов</span>
									<p class="slide__start-time">Работает в школе с 2016 года</p>
									<i class="slide__quote">СШ "Славянская" - это источник радости, энергии и молодости!</i>
								</div>

								<div class="slider__item">
									<h2>Меликян Анаида Рафиковна </h2>
									<span class="slide__position">Преподаватель математики</span>
									<p class="slide__start-time">Работает в школе с 2009 года</p>
									<i class="slide__quote">СШ "Славянская" - это частица моей жизни!</i>
								</div>

								<div class="slider__item">
									<h2>Васильева Альбина Ивановна</h2>
									<span class="slide__position">Преподаватель технологии</span>
									<p class="slide__start-time">Работает в школе со дня основания</p>
									<p>Член Координационного Совета ОО "Россия" РА</p>
									<p>Награждена грамотами Министерства образования и науки РА и мэрии г. Еревана - за весомый вклад в дело образования и воспитания подрастающего поколения</p>
									<i class="slide__quote">СШ "Славянская" - это цель и смысл жизни!</i>
								</div>

								<div class="slider__item">
									<h2>Газиян Нонна Генриховна </h2>
									<span class="slide__position">Преподаватель географии, естествознания и отечествознания</span>
									<p class="slide__start-time">Работает в школе 2005 года</p>
									<i class="slide__quote">СШ "Славянская" - мой второй дом. Здесь всегда тепло и уютно!</i>
								</div>

								<div class="slider__item">
									<h2>Варданян Наталья Сергеевна</h2>
									<span class="slide__position">Преподаватель русского языка и литературы</span>
									<p class="slide__start-time">Работает в школе с 2017 года</p>
									<p>Председатель филиала "Абовян" ОО "Россия" РА</p>
									<p>Награждена медалью Мовсеса Хоренаци за выдающиеся творческие достижения в области образования</p>
									<i class="slide__quote">СШ "Славянская" для меня - источник творческого вдохновения!</i>
								</div>

								<div class="slider__item">
									<h2>Айрапетян Лилит Валерьевна</h2>
									<span class="slide__position">Преподаватель биологии и химии</span>
									<p class="slide__start-time">Работает в школе с 2016 года</p>
									<p>Кандидат химических наук</p>
									<p>Научный сотрудник Инстутута Органической Химии Научно-Технологического Центра Органической и Фармацевтической Химии (НТЦОФХ) НАН РА</p>
									<p>Автор более 50-ти научно - исследовательских публикаций</p>
									<p>Награждена сертификатами за участие в международных научных конференциях в РФ, Японии, Великобритании, Италии, Испании, США и других странах ближнего зарубежья</p>
									<i class="slide__quote">СШ "Славянская" - удивительное место, где каждый учитель - это добрый волшебник, творящий чудеса на наших глазах!</i>
								</div>

								<div class="slider__item">
									<h2>Белоусова Татьяна Степановна</h2>
									<span class="slide__position">Преподаватель начальных классов</span>
									<p class="slide__start-time">Работает в школе с 1998 года</p>
									<p>Награждена медалью Мовсеса Хоренаци - за выдающиеся творческие достижения в области образования</p>
									<p>Лауреат Пушкинской премии</p>
									<i class="slide__quote">СШ "Славянская" - неотъемлемая часть нас самих!</i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	// require ('static/js/slick.js');

    export default {
        mounted() {
			$(function () {
				console.log('Slick settings enabled');

				// console.log(this.$refs['sluyder']);
        	// 	$(this.$refs['sluyder']).slick({
				$('#teacher .slider-for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					asNavFor: '.slider-nav',
					dots: false,
				});

				$('#teacher .slider-nav').slick({
					slidesToShow: 5,
					slidesToScroll: 1,
					dots: false,
					centerMode: true,
					arrows: false,
					focusOnSelect: true,
					variableWidth: true,
					asNavFor: '.slider-for',
					autoplay: true,
					autoplaySpeed: 2000,
					accessibility: true,
					infinite: true,
					centerPadding: '0',
					mobileFirst: true, //add this one
					// responsive: [
					//     {
					//         breakpoint: 1024,
					//         settings: {
					//             variableWidth: false,
					//             centerMode: true,
					//
					//             slidesToShow: 3,
					//             slidesToScroll: 1,
					//             // infinite: true,
					//             // dots: false
					//         }
					//     },
					//     {
					//         breakpoint: 600,
					//         settings: {
					//             centerMode: true,
					//             variableWidth: false,
					//
					//             slidesToShow: 1,
					//             slidesToScroll: 1,
					//             accessibility: false,
					//         }
					//     },
					//     {
					//         breakpoint: 480,
					//         settings: {
					//             variableWidth: false,
					//             centerMode: true,
					//
					//             slidesToShow: 1,
					//             slidesToScroll: 1,
					//             accessibility: false,
					//         }
					//     }
					//     // You can unslick at a given breakpoint now by adding:
					//     // settings: "unslick"
					//     // instead of a settings object
					// ]
				});
			});
		}
	}
</script>

<style>
	#teacher {
		/*padding: 20px 0;*/
	}

	#teacher .slider-nav {
		/*display: flex;*/
		/*flex-wrap: wrap;*/
		/*width: 400px;*/
		/*margin: auto;*/
	}

	#teacher .slider-nav .slick-current img{
		/*transform: scale(1.5);*/
		/*transition: transform 1.5s ease;*/
		/*transition: transform 400ms ease-in-out;*/
		/*transform: scale(1.5);*/
		/*transition-delay: 300ms;*/
	}

	#teacher .slider-nav img{
		border: 5px solid grey;
		border-radius: 50%;
		/*transform: scale(1);*/
		/*transition: transform 0.5s ease;*/
		transition: transform 1400ms;
		/*transform: scale(1);*/
		/*transition-delay: 300ms;*/
	}

	#teacher .slider-nav .slider__item{
		margin: 0 14px;
	}

	#teacher .slider-for {
		margin-top: 10px;
	}

	#teacher .slider-for .slider__item{
		transition: transform 1400ms;

		text-align: center;
	}

	#teacher .slick-slide {
		/*transform: scale(0.5);*/
		transition: transform 1400ms;
	}

	#teacher .slick-center {
		-webkit-transform: scale(1.25);
		-moz-transform: scale(1.25);
		transform: scale(1.25);
		transition: all 1400ms;
	}

	#teacher .slick-center img {
		border: 5px solid red;
		transition: all 1400ms;
	}


	#teacher .slider-nav .slick-slide {
		/*background-color: green;*/
		display: flex !important;
		align-items: center;
	}

	#teacher .slider-nav .slick-list {
		padding: 15px 60px !important;
		margin-left: 30px !important;
	}

	#teacher .slider-nav .slick-track {
		height: 250px;
	}
</style>
