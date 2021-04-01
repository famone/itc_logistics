<template>
	<section id="serv">
		<div class="big-txt hidden-xs hidden-sm">
			<div class="container">
				<span>Services</span>
			</div>
		</div>
		<div class="container">
			<div class="col-lg-12">
				<h2>Услуги</h2>
			</div>
			<div class="col-lg-3" v-for="serv in services">
				<div class="serv-item">
					<img :src="serv.img" alt="">
					<h3>{{serv.title}}</h3>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
	export default{
		data(){
			return{
				services: [
					{
						img: require('../assets/img/serv1.svg'),
						title: 'Автомобильная перевозка'
					},
					{
						img: require('../assets/img/serv2.svg'),
						title: 'Автомобильная перевозка'
					},
					{
						img: require('../assets/img/serv3.svg'),
						title: 'Автомобильная перевозка'
					},
					{
						img: require('../assets/img/serv4.svg'),
						title: 'Автомобильная перевозка'
					}
				]
			}
		}
	}
</script>