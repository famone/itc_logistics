<template>
	<section id="park">
		<div class="container">
			<div class="col-lg-12">
				<h2>Наш автопарк</h2>
			</div>
			<div class="col-lg-12">
				<div class="park-box">
					<div class="park-item" v-for="car in park">
						<img :src="car.img" alt="">
						<h3 v-html="car.name"></h3>
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
				park: [
					{
						img: require('../assets/img/p1.png'),
						name: 'Фургоны <br> от 1.5 до 20 тонн'
					},
					{
						img: require('../assets/img/p2.png'),
						name: 'Тентовые <br> автомобили от 1.5 до 20 тонн'
					},
					{
						img: require('../assets/img/p3.png'),
						name: 'Цистерны <br> от 17 000 до 33 000 литров'
					},
					{
						img: require('../assets/img/p4.png'),
						name: 'Траллы / прицепы <br> от 29 до 160 тонн'
					},
					{
						img: require('../assets/img/p5.png'),
						name: 'Бортовые автомобили <br> от 1.5 до 20 тонн'
					},
					{
						img: require('../assets/img/p6.png'),
						name: 'Спецтехника <br> от 10 до 35 тонн'
					},
				]
			}
		}
	}
</script>	