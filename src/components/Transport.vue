<template>
	<section id="transport">
		<div class="container">
			<div class="col-lg-5">
				<h2 class="ma-25">Владельцам транспорта</h2>
				<p class="white-txt" style="margin-bottom: 75px;">Получите новые заказы без посредников <br>
				через наш онлайн-сервис</p>
				<form @submit.prevent="registrate()">
					<input type="text" placeholder="Имя">
					<input type="text" placeholder="E-mail">
					<input type="text" placeholder="Телефон">
					<input type="text" placeholder="Марка машины">
					<input type="text" placeholder="Регулярное направление">
					<loader v-if="load" />
					<button class="orange-btn" v-else>Зарегестрироваться</button>
				</form>
			</div>
			<div class="col-lg-5 col-lg-offset-2">
				<div class="how">
					<div class="info" @click="openInfo($emit)"></div>
					<h2>Как это работает</h2>
					<ul>
						<li v-for="how in questions"><img src="../assets/img/check.svg" alt=""><span>{{how}}</span></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import loader from '../components/ui/loader.vue'

	export default{
		components: {loader},
		methods: {
			openInfo(){
				this.$emit("openInfo")
			},
			registrate(){
				this.load = true
				this.$emit("registrate")
			}
		},
		data(){
			return{
				load: false,
				questions: [
					'Вы регистрируете свой автомобиль.',
					'Указываете направления по которым чаще всего работаете.',
					'Бесплатно получаете актуальные направления и груза по указанным данным ежедневно.',
					'Оформляете заявку и доставляете груз.',
					'Оформляете заявку и доставляете груз.'
				]
			}
		}
	}
</script>

<style>
	.how{
		position: relative;
	}
</style>