<template>
	<section id="steps">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
				<h2>Этапы нашей работы</h2>
			</div>
			<div class="col-lg-3 col-xs-6" v-for="(step, index) in steps" @mouseover="activeStep = index">
				<div class="step">
					<img :src="step.img" alt="">
					<h3>{{step.title}}</h3>
				</div>
			</div>
			</div>

			<div class="row step-descr">
				<div class="col-lg-12">
					<div class="step-descr-box">
						<div class="orange-num">{{activeStep + 1}}</div>
						<p class="white-txt">{{steps[activeStep].descr}}</p>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				activeStep: 0,
				steps: [
					{
						title: 'Звонок от клиента',
						img: require('../assets/img/step1.svg'),
						descr: 'Готовы начать погрузку сразу после обращения и доставить груз в рекордные сроки; Вы можете в любое время оставить заявку и в кротчайшие сроки наши специалисты с Вами свяжутся.'
					},
					{
						title: 'Обсуждение условий',
						img: require('../assets/img/step2.svg'),
						descr: 'Обсуждение условий - Со своим личным менеджером Вы можете договориться об удобных для Вас условиях транспортировки. Мы обязуемся в срок предоставить все необходимые бухгалтерские документы.'
					},
					{
						title: 'Подбор автотранспорта',
						img: require('../assets/img/step3.svg'),
						descr: 'Подбор автотранспорта -  Если Вы не можете определиться с выбором транспорта - мы сделаем это за Вас!'
					},
					{
						title: 'Заключение договора/оплата',
						img: require('../assets/img/step4.svg'),
						descr: 'Заключение договора/оплата - На составление договора уйдет не более 20 минут! Все Ваши грузы на момент перевозки застрахованы. Для каждого клиента условия индивидуальны.'
					}
				]
			}
		}
	}
</script>