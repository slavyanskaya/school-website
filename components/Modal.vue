<template>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalTitle" aria-hidden="true">
		<div class="modal-dialog modal-lg  modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close " data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" class="btn-dark float-right">&times;</span>
				</button>

				<div class="modal-body">

					<div class="modal-inner">
						<div class="row">
							<div class="col-lg-5 d-none d-md-none d-sm-none d-lg-block d-xl-block">
								<img src="" class="img-fluid modal-image" alt="">
							</div>
							<div class="col-lg-7">
<!--								<h4>JOIN OUR MAILING LIST</h4>-->
								<p class="modal-text"></p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
    export default {
        mounted() {
        	$(document).ready(function () {
				const modal = $('#myModal');
				const modalText = $('.modal-text');
				const modalImage = $('.modal-image');
				const testimonials = {
					// TODO make this not a plain text but markdown, cause newlines dont work
					gukasov: {
						text: '<p>Моя внучка Аннушка со второго класса учится в средней школе "Славянская". Педагогический коллектив привил ей прилежность, настойчивость, инициативу и ответственность в учебе. Она с уважением и любовью относится к своим учителям и доверяет им. Анна получила глубокие знания по школьной программе, хорошее воспитание и стала патриотом и Республики Армения и Российской Федерации.</p>' +
							'<p>Мы благодарны педагогическому составу школы за самоотверженный труд и успешное обучение школьников. Всех благ!</p>' +
							'<p>-  Полковник в отставке Главного разведывательного управления Генерального штаба Вооруженных Сил СССР. </p>' +
							'</br>' +
							'- Ветеран Карабахской войны.\n' +
							'</br>' +
							'- Основатель Военной Разведки и Военной Контрразведки Вооруженных Сил Республики Армения.\n' +
							'</br>' +
							'Гукасов И.Г.\n' +
							'17.06.2020\n' +
							'г. Ереван\n',
						image: 'gukasov-large'
					},

					janeta: {
						text: '<p>В далеком 1998 году, когда наша  СШ «Славянская» только открылась, я пошла в первый класс. И все 10 лет - в стенах родной школы и с самыми лучшими учителями!</p>' +
							'<p>«Славянская» для меня была не просто школой, а настоящей семьёй.  Это все, без исключения,  учителя , которые относятся к тебе, как с собственному ребёнку, переживая все твои невзгоды и радуясь удачам и победам. </p>' +
							'<p>Все праздники и мероприятия, которые мы отмечали, все конкурсы и олимпиады, все поездки и экскурсии... Наши учителя дали нам не только замечательные знания, но и вложили в нас те жизненные ценности, которые редко встретишь в современном мире! Отучившись в РЭУ  им. Плеханова в Москве, и сегодня, находясь далеко в Мадриде, я с большим теплом говорю о нашей «Славянской».  Такой душевной атмосферы, как в нашей школе, нет нигдев мире!</p>' +
							'<p>Акопян Жанетта, выпускница 2008 г. Экономист,  Мадрид.</p>',
						image: 'janeta-large'
					},

					jaklin: {
						text: '<p>Жаклин Сархошян, прима балерина РА, заслуженная артистка Армении, награждена медалью Мовсеса Хоренаци , золотой медалью Министерства культуры РА. Художественный руководитель танцевальной школы «Гаяне» в Ливане.</p>' +
							'<p>«Славянская» - семья! Это и  грамотно организованный учебный процесс,   и интересные праздники, и  театральные  фестивали,  и познавательные  экскурсии, и креативные флешмобы: «Арбузники» в начальных классах, традиционный  «Праздник русского чая», незабываемые поездки на Пушкинский перевал, ежегодная акции «Георгиевская ленточка»,  «Брось сигарету- возьми конфету» и многие другие! ' +
							'<p>Человек в этой школе развивается не только интеллектуально, но и  нравственно! Очень много тёплых воспоминаний о  любимой школе!  </p>',
						image: 'jaklin-large'
					},

					ambarcumyan: {
						text: '<p>12 лет прошло с тех пор, как наша дочь Мария Амбарцумян поступила в  школу "Славянская". Мы благодарны и признательны нашей родной школе за все эти годы, за высокий профессионализм, чуткость и постоянное мотивирование к развитию. </p>' +
							'<p>Особая благодарность светлой памяти директора Юрия Ивановича Яковенко, который был организатором и душой нашей школы!</p>' +
							'<p>Спасибо тебе, СШ "Славянская" !!! </p>',
						image: 'ambarcumyan-large'
					},

					iloyan: {
						text: '<p>Когда мы переехали в Армению, встал вопрос о выборе школы для детей. Мне порекомендовали среднюю школу «Славянская» как одну из лучших русских школ в республике. </p>' +
							'<p>Я благодарен судьбе за то, что мои дети попали именно в «Славянскую», получили прекрасное образование и продолжили учёбу в российских вузах. ' +
							'<p>Огромное спасибо всему коллективу школы за профессионализм и трепетное отношение к каждому ученику!</p>' +
							'<p>Илоян Георгий Суренович, главврач Таширского района, кандидат медицинских наук.</p>',
						image: 'iloyan-large'
					},
				};

				$(".read-more").on('click', function (event) {
					event.preventDefault();
					modalImage.attr('src', '');
					let testimonialName = $(event.target).data('name');
					let testimonial = testimonials[testimonialName];
					modalText.html(testimonial.text);
					modalImage.attr('src', `images/layouts/testimonials/${testimonial.image}.jpg`);
					$("#myModal").modal('show');
				});
			});
		}
	}
</script>

<style scoped>
	button.close span {
		opacity: 1;
		width: 30px;
		height: 30px;
		display: block;
		text-shadow: none;
	}
	button.close {
		position: absolute;
		right: 0;
		opacity: 1;
		border: none;
		z-index: 9999; outline: none;
	}
	.modal-body {
		padding: 0;
	}

	.modal-content {
		border-radius: 0;
		border: none;
	}
	.modal-inner { text-align: center; padding: 65px 80px;}
	.modal-inner .form-control, .modal-inner .btn { border-radius: 0; }
	.modal-inner .form-control { background: #f1f1f1; }

	@media screen and (max-width: 640px) {
		.modal-inner { padding: 40px 20px;}
	}
</style>
