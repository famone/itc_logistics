<template>
	<section id="transport">

		<popup v-if="errorForm" @closePop="errorForm = false">
			<div class="text-center">
				<h3 class="orange">Ошибка!</h3>
				<h3>Попробуйте отправить <br>еще раз позже</h3>
			</div>
		</popup>


		<popup v-if="successForm" @closePop="successForm = false">
			<div class="text-center">
				<h3 class="orange">Вы зарегестрированны!</h3>
				<h3>Добро пожаловать <br>в ITC</h3>
			</div>
		</popup>


		<div class="container">
			<div class="col-lg-5">
				<h2 class="ma-25">Владельцам транспорта</h2>
				<p class="white-txt" style="margin-bottom: 75px;">Получите новые заказы без посредников <br>
				через наш онлайн-сервис</p>
				<form @submit.prevent="registrate()">
					<input type="text" placeholder="Имя" v-model="name" :class="{errorInp : $v.name.$dirty && !$v.name.required}">
					<input type="text" placeholder="E-mail" v-model="email" :class="{errorInp : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
					<input type="text" placeholder="Телефон" v-model="tel" :class="{errorInp : $v.tel.$dirty && !$v.tel.required}" v-mask="'+7 ### ###-##-##'">
					<input type="text" placeholder="Марка машины" v-model="car" :class="{errorInp : $v.car.$dirty && !$v.car.required}">
					<input type="text" placeholder="Регулярное направление" v-model="direction" :class="{errorInp : $v.direction.$dirty && !$v.direction.required}">
					<loader v-if="load" />
					<button class="orange-btn" v-else>Зарегестрироваться</button>
				</form>
			</div>
			<div class="col-lg-5 col-lg-offset-2">
				<div class="how hidden-xs hidden-sm">
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
import popup from '../components/ui/popup.vue'
import loader from '../components/ui/loader.vue'
import axios from 'axios'
import { required, email, minLength } from "vuelidate/lib/validators";

	export default{
		components: {popup, loader},
		methods: {
			openInfo(){
				this.$emit("openInfo")
			},
			registrate(){

				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				this.load = true

				let emailBody = {
					name_client: this.name,
					tel: this.tel,
					email: this.email,
					car: this.car,
					direction: this.direction
				}


				var form = new FormData();

				for (var field in emailBody){
					form.append(field, emailBody[field]);
				};


				axios
				.post('https://itc-log.com/wp-json/contact-form-7/v1/contact-forms/11/feedback', form)
				.then(res => {
					this.load = false
					this.successForm = true

					this.name = ''
					this.tel = ''
					this.email = ''
					this.car = ''
					this.direction = ''
				
				})
				.catch(err =>{
					this.load = false
					this.errorForm = true

					this.name = ''
					this.tel = ''
					this.email = ''
					this.car = ''
					this.direction = ''
					
				})

				
			}
		},
		validations: {
			tel:{
				required
			},
			email: {
				required,
				email
			},
			name: {
				required
			},
			car: {
				required
			},
			direction: {
				required
			}
		},
		data(){
			return{
				successForm: false,
				errorForm: false,
				load: false,
				name: '',
				tel: '',
				email: '',
				car: '',
				direction: '',
				questions: [
					'Вы регистрируете свой автомобиль.',
					'Указываете направления по которым чаще всего работаете.',
					'Бесплатно получаете актуальные направления и груза по указанным данным ежедневно.',
					'Оформляете заявку и доставляете груз.',
					'Зарегистрируйтесь  и наш специалист свяжется с Вами в кратчайшие сроки.'
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