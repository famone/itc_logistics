<template>
	<header>

		<popup v-if="callback" @closePop="callback = false">
			<h3 class="text-center">Обратный звонок</h3>
			<form @submit.prevent="bookCall()" class="text-center">
				<input type="text" placeholder="Имя" v-model="name" :class="{errorInp : $v.name.$dirty && !$v.name.required}"> <br>
				<input type="text" placeholder="Телефон" v-model="tel" :class="{errorInp : $v.tel.$dirty && !$v.tel.required}" v-mask="'+7 ### ###-##-##'"> <br>
				<loader v-if="load" />
				<button class="orange-btn" v-else>Заказать</button>
			</form>
		</popup>

		<popup v-if="errorForm" @closePop="errorForm = false">
			<div class="text-center">
				<h3 class="orange">Ошибка!</h3>
				<h3>Попробуйте отправить <br>еще раз позже</h3>
			</div>
		</popup>


		<popup v-if="successForm" @closePop="successForm = false">
			<div class="text-center">
				<h3 class="orange">Готово!</h3>
				<h3>Мы свяжемся с вами в <br>ближайшее время</h3>
			</div>
		</popup>



		<div class="container">
			<div class="shapka">
				<router-link tag="div" to="/">
					<img src="../../assets/img/logo.svg" alt="">
				</router-link>
				<ul class="hidden-sm hidden-xs">
					<router-link tag="li" to="#serv" class="white-link" v-scroll-to="'#serv'">Услуги</router-link>
					<router-link tag="li" to="#about" class="white-link" v-scroll-to="'#about'">О компании</router-link>
				</ul>
				<div class="header-contacts text-right hidden-xs hidden-sm">
					<a href="tel:+79871536006" class="white-link">+7 987 153-60-06</a>
					<a href="mailto:info@itc-log.com" class="white-link">info@itc-log.com</a>
				</div>
				<button class="call-btn hidden-xs hidden-sm" @click="callback = true">
					<img src="../../assets/img/call.svg" alt="">
					Заказать звонок
				</button>
				<div class="mob-menu-btn hidden-lg hidden-md" 
				@click="mobileMenu = !mobileMenu" 
				:class="{activeNav : mobileMenu}">
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div class="mobile-menu" v-if="mobileMenu">
					<ul class="footer-links" @click="mobileMenu = false">
							<router-link tag="li" to="#serv" v-scroll-to="'#serv'">Услуги</router-link>
							<router-link tag="li" to="#about" v-scroll-to="'#about'">О компании</router-link>
							<router-link tag="li" to="#steps" v-scroll-to="'#steps'">Этапы нашей работы</router-link>
							<router-link tag="li" to="#park" v-scroll-to="'#park'">Автопарк</router-link>
							<router-link tag="li" to="#cost" v-scroll-to="'#cost'">Расчёт стоимости</router-link>
							<router-link tag="li" to="#transport" v-scroll-to="'#transport'">Владельцам транспорта</router-link>
					</ul>
					<h4>Контакты</h4>
					<div class="header-contacts">
						<a href="tel:+79871536006" class="white-link">+7 987 153-60-06</a>
						<a href="mailto:info@itc-log.com" class="white-link">info@itc-log.com</a>
					</div>
					<p class="white-txt-footer">445024, г. Тольятти, <br>
						ул. Дзержинского, д. 98, <br> офис 119</p>
					<div class="socials">
						<a href=""><img src="../../assets/img/insta.svg" alt=""></a>
						<a href=""><img src="../../assets/img/vk.svg" alt=""></a>
					</div>
				</div>



			</div>
		</div>
	</header>
</template>


<script>
import popup from '../ui/popup.vue'
import loader from '../ui/loader.vue'
import axios from 'axios'
import { required, email, minLength } from "vuelidate/lib/validators";

	export default{
		components: {popup, loader},
		data(){
			return{
				load: false,
				callback: false,
				mobileMenu: false,
				successForm: false,
				errorForm: false,
				name: '',
				tel: '',
				navs: [
					{
						link: '/services',
						txt: 'Услуги'
					},
					{
						link: '/projects',
						txt: 'Проекты'
					},
					{
						link: '/gallery',
						txt: 'Галерея работ'
					},
					{
						link: '/prices',
						txt: 'Цены'
					},
					{
						link: '/contacts',
						txt: 'Контакты'
					},

				]
			}
		},
		validations: {
			tel:{
				required
			},
			name:{
				required
			}
		},
		methods: {
			bookCall(){
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				this.load = true

				let emailBody = {
					name_client: this.name ,
					tel: this.tel ,
				}


				var form = new FormData();

				for (var field in emailBody){
					form.append(field, emailBody[field]);
				};


				axios
				.post('https://itc.webink.site//wp-json/contact-form-7/v1/contact-forms/9/feedback', form)
				.then(res => {
					this.load = false
					this.successForm = true
					this.callback = false
				})
				.catch(err =>{
					this.load = false
					this.errorForm = true
					this.callback = false
				})
			}
		}
	}
</script>	

<style>
.errorInp{
	border: 1px red solid !important;
}
</style>