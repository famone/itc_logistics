<template>
	<div class="hidden-xs hidden-sm">
		<section id="slider">
			<swiper ref="mySwiper" :options="swiperOptions">
		    		<swiper-slide v-for="item in slides">
		    			<div class="slide-img" :style="{'background-image': 'url(' + item.img + ')'}">
		    				<div class="container">
		    					<h1 v-html="item.title" data-swiper-parallax="-700"></h1>
		    					<h3 v-html="item.bigsub" v-if="item.bigsub" data-swiper-parallax="-500"></h3>
		    					<p class="subtitle" data-swiper-parallax="-200" v-if="item.descr" v-html="item.descr"></p>
		    					<div class="numbers" v-if="item.numbers" data-swiper-parallax="-500">
		    						<div class="number" v-for="(num, index) in item.numbers">
		    							<span class="big-wh">{{index + 1}}</span>
		    							<span class="small-wh" v-html="num"></span>
		    						</div>
		    					</div>

		    					<div class="numbers" v-if="item.icons" data-swiper-parallax="-200">
		    						<div class="number" v-for="num in item.icons">
		    							<img :src="num.img" alt="" class="number-img">
		    							<span class="small-wh" v-html="num.txt"></span>
		    						</div>
		    						<br>
		    					</div>


		    					<button data-swiper-parallax="-100" class="orange-btn" v-scroll-to="'#about'" v-if="item.btn">
		    						Узнать больше
		    					</button>
		    				</div>
		    			</div>
		    		</swiper-slide>
			</swiper>
			<div class="swiper-pagination"></div>
			<div class="nextBtn"></div>
			<div class="prevBtn"></div>

			<Calculate @openInfo="openInfo($emit)" />
		</section>
	</div>
</template>

<script>
import Calculate from '../components/Calculate.vue'

	export default{
		components: {Calculate},
		methods: {
			openInfo(){
				this.$emit("openInfo")
			}
		},
		mounted(){
			this.$refs.mySwiper.$swiper.slideTo(1, false,false);
		},
		data(){
			return{
				slides: [
					{
						title: 'Система <br> <span class="orange">лояльности</span>',
						img: require('../assets/img/slide4.jpg'),
						btn: false,
						icons: [
							{
								txt: 'ДЛИТЕЛЬНОСТИ <br>СОТРУДНИЧЕСТВА',
								img: require('../assets/img/shield.svg')
							},
							{
								txt: 'КОЛИЧЕСТВА <br>ВЫПОЛНЕННЫХ <br>РЕЙСОВ',
								img: require('../assets/img/cup.svg')
							},
							{
								txt: 'ГЕОГРАФИЯ <br> ПЕРЕВОЗОК',
								img: require('../assets/img/marker.svg')
							}
						]
					},
					{
						title: 'Все грани <br> <span class="orange">логистики</span>',
						descr: 'Мы будем рады работать с Вами, а вы удивитесь <br> скоростью и качеством нашей работы.',
						img: require('../assets/img/slide1.jpg'),
						btn: true
					},
					{
						title: 'Всё <span class="orange">просто</span>',
						img: require('../assets/img/slide2.jpg'),
						bigsub: '<span class="orange">ВЫ</span> ОСТАВЛЯЕТЕ ЗАЯВКУ, <span class="orange">МЫ</span> ПРЕДОСТАВИМ',
						numbers: ['Выгодные <br> условия', 'Лучший<br>транспорт', 'Прозрачный <br>договор'],
						btn: true
					},
					{
						title: 'С нами <span class="orange">выгодно</span>',
						img: require('../assets/img/slide3.jpg'),
						bigsub: 'СВОЁ АВТО?  ЕСТЬ ЖЕЛАНИЕ ЗАРАБОТАТЬ?  НЕТ ВРЕМЕНИ ИСКАТЬ?',
						btn: true,
						icons: [
							{
								txt: 'РЕЙСЫ<br>ЕСТЬ ВСЕГДА',
								img: require('../assets/img/checker.svg')
							},
							{
								txt: 'ВЫСОКИЕ<br>СТАВКИ',
								img: require('../assets/img/arrtop.svg')
							},
							{
								txt: 'ОПЛАТА<br>БЕЗ ЗАДЕРЖЕК',
								img: require('../assets/img/dollar.svg')
							}
						]
					}
				],
				swiperOptions: {
                  slidesPerView: 1,
                  parallax: true,
                  spaceBetween: 0,
                  touchRatio: 1,
                  loop: false,    
                  infinite: true,
                  speed: 800,
                  threshold: 50,
                  centeredSlides: false,
                  pagination: {
        			el: '.swiper-pagination',
        			clickable: true,
       			  },
                  navigation: {
		            nextEl: '.nextBtn',
		            prevEl: '.prevBtn',
		          },
            	},
			}
		}
	}
</script>


<style scoped>
.numbers{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20px;
}
.number{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 140px;
}
.big-wh{
	color: #fff;
	font-size: 70px;
	font-weight: 800;
	margin-right: 22px;
}
.number-img{
	margin-right: 22px;
}
.small-wh{
	color: #fff;
	font-size: 18px;
	font-weight: 700;
}
</style>