<template>
<div>
	<section id="cost">
		<div class="container">
			<div class="col-lg-12">
				<h2>Расчёт стоимости</h2>
			</div>
			<div class="col-lg-12">
				<div class="calculate-box">
					<div class="info" @click="openInfo($emit)"></div>
					<div class="row">
						<form @submit.prevent="submitForm()">
						<!--  -->
						<div class="col-lg-8">
							<h3>Общая информация</h3>
							<div class="row">
								<div class="col-lg-6">
									<input type="text" placeholder="Откуда" v-model="cityFrom" style="margin-bottom: 25px;">
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Куда" v-model="cityTo" style="margin-bottom: 25px;">
								</div>
								<div class="col-lg-6">
									<div class="ch-box" :class="{acChb : fromOwner}" 
									@click="fromOwner = !fromOwner">
										<div class="ch-box-window"></div>
										<span>Забрать от отправителя</span>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="ch-box" :class="{acChb : toGetter}"
									@click="toGetter = !toGetter"> 
										<div class="ch-box-window"></div>
										<span>Доставить до получателя</span>
									</div>
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Общий вес, кг" v-model="weight">
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Общий объём, м3" v-model="volume">
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Стоимость груза" class="ma-25" v-model="cost">
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Тип груза" class="ma-25" v-model="type">
								</div>
								<div class="col-lg-12">
									<div class="ch-box" :class="{acChb : insurance}" 
									@click="insurance = !insurance">
										<div class="ch-box-window"></div>
										<span>Страхование груза</span>
									</div>
								</div>
							</div>
						</div>
						<!--  -->
						<div class="col-lg-4">
							<h3>Общая информация</h3>
							<input type="text" placeholder="Имя" v-model="name" :class="{errorInp : $v.name.$dirty && !$v.name.required}">
							<input type="text" placeholder="Телефон" v-model="tel" v-mask="'+7 ### ###-##-##'" 
							:class="{errorInp : $v.tel.$dirty && !$v.tel.required}">
							<input type="text" placeholder="E-mail" v-model="email" 
							:class="{errorInp : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
								
						</div>
						<div class="col-lg-12">
							<loader v-if="load" />
							<button v-else class="dark-btn">Рассчитать</button>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	</section>


	<popup v-if="successForm" @closePop="successForm = false">
			<div class="text-center">
				<h3 class="orange">Готово!</h3>
				<h3>Мы свяжемся с вами в <br>ближайшее время</h3>
			</div>
		</popup>


		<popup v-if="errorForm" @closePop="errorForm = false">
			<div class="text-center">
				<h3 class="orange">Ошибка!</h3>
				<h3>Попробуйте отправить <br>еще раз позже</h3>
			</div>
		</popup>


</div>
</template>


<script>
import {mapGetters} from 'vuex'
import loader from '../components/ui/loader.vue'
import popup from '../components/ui/popup.vue'
import { required, email, minLength } from "vuelidate/lib/validators";
import axios from 'axios'

	export default{
		components: {loader, popup},
		methods: {
			openInfo(){
				this.$emit("openInfo")
			},
			submitForm(){
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				this.load = true

				let check1 = ''
				let check2 = ''
				let check3 = ''

				if(this.fromOwner){
					check1 = 'Забрать от владельца'
				}else{
					check1 = 'Не забирать от владельца'
				}


				if(this.toGetter){
					check2 = 'Доставить до получателя'
				}else{
					check2 = 'Не доставлять до получателя'
				}

				if(this.insurance){
					check3 = 'Страхование груза'
				}else{
					check3 = 'Без страхования груза'
				}


				
				let emailBody = {
					name_client: this.name ,
					tel: this.tel ,
					email: this.email ,
					from: this.cityFrom ,
					to: this.cityTo ,
					weight: this.weight ,
					volume: this.volume ,
					cost: this.cost ,
					type: this.type ,
					fromOwner: check1 ,
					toGetter: check2 ,
					insurance: check3
				}


				var form = new FormData();

				for (var field in emailBody){
					form.append(field, emailBody[field]);
				};

				console.log(emailBody)


				axios
				.post('https://itc-log.com/wp-json/contact-form-7/v1/contact-forms/8/feedback', form)
				.then(res => {
					this.load = false
					this.successForm = true
				})
				.catch(err =>{
					this.load = false
					this.errorForm = true
				})
			}
		},
		computed: {
			...mapGetters({
				cityFrom: "serv/getCityFrom",
				cityTo: "serv/getCityTo"
			})
		},
		validations: {
			tel:{
				required
			},
			name:{
				required
			},
			email:{
				required,
				email
			},
		},
		data(){
			return{
					errorForm: false,
					successForm: false,
					load: false,
					name: '',
					tel: '',
					email: '',
					from: '',
					to: '',
					weight: '',
					volume: '',
					cost: '',
					type: '',
					fromOwner: true,
					toGetter: false,
					insurance: false
				
			}
		}
	}
</script>

<style>
.errorInp{
	border: 1px red solid !important;
}
</style>