<template>
	<footer>


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
			<div class="row">
				<div class="col-lg-12">
					<div class="logo">
						<img src="../../assets/img/logo.svg" alt="">
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-7">
				<div class="row">
					<div class="col-lg-6">
						<ul class="footer-links">
							<router-link tag="li" to="#serv" v-scroll-to="'#serv'">Услуги</router-link>
							<router-link tag="li" to="#about" v-scroll-to="'#about'">О компании</router-link>
							<router-link tag="li" to="#steps" v-scroll-to="'#steps'">Этапы нашей работы</router-link>
						</ul>
					</div>
					<div class="col-lg-6">
						<ul class="footer-links">
							<router-link tag="li" to="#park" v-scroll-to="'#park'">Автопарк</router-link>
							<router-link tag="li" to="#cost" v-scroll-to="'#cost'">Расчет стоимости</router-link>
							<router-link tag="li" to="#transport" v-scroll-to="'#transport'">Владельцам транспорта</router-link>
						</ul>
					</div>
					<div class="col-lg-6">
						<h4>Контакты</h4>
						<p class="white-txt-footer">445024, г. Тольятти, <br>
						ул. Дзержинского, д. 98, офис 119</p>


					</div>
				</div>
			</div>

			<div class="col-lg-5 ">
				<h4>Заказать звонок</h4>
				<form @submit.prevent="submitForm()">
					<input type="text" placeholder="Телефон" v-model="tel" v-mask="'+7 ### ###-##-##'" :class="{errorInp : $v.tel.$dirty && !$v.tel.required}">
					<loader v-if="load" />
					<button v-else class="orange-btn">
						<span class="hidden-md hidden-lg">Заказать</span>
						<img class="hidden-sm hidden-xs" src="../../assets/img/submitarr.svg" alt="">
					</button>

				</form>
				<div class="header-contacts">
					<a href="tel:+79871536006" class="white-link">+7 987 153-60-06</a>
					<a href="mailto:info@itc-log.com" class="white-link">info@itc-log.com</a>
				</div>
				<div class="socials">
					<a href=""><img src="../../assets/img/insta.svg" alt=""></a>
					<a href=""><img src="../../assets/img/vk.svg" alt=""></a>
				</div>
			</div>
			</div>


			<div class="spacer"></div>


			<div class="row">
				<div class="col-lg-7">
					<p class="small-txt">© 2021 ООО “ITC” Российская логистическая компания. Все права защищены. <br>
					При перепечатке любых материалов гиперссылок на сайт обязательна.</p>
				</div>
				<div class="col-lg-5">
					<div class="copyright">
						<div class="webink">
							<a target="_blank" href="https://www.instagram.com/giagiss/">Дизайн<img src="../../assets/img/gigagis.svg" alt=""></a>
						</div>
						<div class="webink">
							<a target="_blank" href="https://webink.site/">Разработка<img src="../../assets/img/webink.svg" alt=""></a>
						</div>
					</div>

				</div>
			</div>
			

		</div>
	</footer>
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
				tel: '',
				successForm: false,
				errorForm: false,
				load: false
			}
		},
		validations: {
			tel:{
				required
			}
		},
		methods:{
			submitForm(){
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				this.load = true

				let emailBody = {
					tel: this.tel ,
				}


				var form = new FormData();

				for (var field in emailBody){
					form.append(field, emailBody[field]);
				};


				axios
				.post('https://itc.webink.site//wp-json/contact-form-7/v1/contact-forms/10/feedback', form)
				.then(res => {
					this.load = false
					this.successForm = true
					this.tel = ''
				})
				.catch(err =>{
					this.load = false
					this.errorForm = true
					this.tel = ''
				})

			}
		}
	}
</script>