<template>
	<div>
		<mainSlider @openInfo="info1 = true" @openCall="callback = true" />
		<mobileMain @openInfo="info1 = true" @openCall="callback = true"/>
		<Services />
		<Steps/>
		<Park />
		<About />
		<Cost @openInfo="info2 = true" />
		<Transport @openInfo="info3 = true" @registrate="registrated = true" />

		<!-- modals -->

		<popup v-if="info1" @closePop="info1 = false">
			<h3 class="orange">Чтобы совершить расчёт необходимо:</h3>
			<ul class="pop-ul">
				<li><span class="orange">1.</span> Заполнить окно Куда</li>
				<li><span class="orange">2.</span> Заполнить окно Откуда</li>
				<li><span class="orange">3.</span> Нажать кнопку “Рассчитать”</li>
			</li>
			</ul>
		</popup>



		<popup v-if="info2" @closePop="info2 = false">
			<h3 class="orange">Чтобы совершить расчёт необходимо:</h3>
			<ul class="pop-ul">
				<li><span class="orange">1.</span> Заполнить окна Общей информации</li>
				<li><span class="orange">2.</span> Заполнить окна Личной информации</li>
				<li><span class="orange">3.</span> Нажать кнопку “Рассчитать”</li>
				<li><span class="orange">4.</span> Дождаться  звонка от нашего менеджера. <br>Он произведёт расчёт по вашему запросу. </li>
			</li>
			</ul>
		</popup>


		<popup v-if="info3" @closePop="info3 = false">
			<h3 class="orange">Чтобы совершить расчёт необходимо:</h3>
			<ul class="pop-ul">
				<li><span class="orange">1.</span> Заполнить окна Личной информации</li>
				<li><span class="orange">2.</span> Указать марку машины</li>
				<li><span class="orange">3.</span> Указать регулярное направление</li>
				<li><span class="orange">4.</span> Нажать на кнопку “Зарегистрироваться”</li>
			</li>
			</ul>
		</popup>


		<popup v-if="callback" @closePop="callback = false">
			<h3 class="text-center">Обратный звонок</h3>
			<form @submit.prevent="bookCall()" class="text-center">
				<input type="text" placeholder="Имя"> <br>
				<input type="text" placeholder="Телефон"> <br>
				<loader v-if="load" />
				<button class="orange-btn" v-else>Заказать</button>
			</form>
		</popup>


		<popup v-if="successForm" @closePop="successForm = false">
			<div class="text-center">
				<h3 class="orange">Готово!</h3>
				<h3>Мы свяжемся с вами в <br>ближайшее время</h3>
			</div>
		</popup>


		<popup v-if="registrated" @closePop="registrated = false">
			<div class="text-center">
				<h3 class="orange">Вы зарегестрированны!</h3>
				<h3>Добро пожаловать <br>в ITC</h3>
			</div>
		</popup>


		<popup v-if="errorForm" @closePop="errorForm = false">
			<div class="text-center">
				<h3 class="orange">Ошибка!</h3>
				<h3>Попробуйте отправить повторно позже</h3>
			</div>
		</popup>


	</div>
</template>

<script>
import mainSlider from '../components/mainSlider.vue'
import mobileMain from '../components/mobileMain.vue'
import Services from '../components/Services.vue'
import Steps from '../components/Steps.vue'
import Park from '../components/Park.vue'
import About from '../components/About.vue'
import Cost from '../components/Cost.vue'
import Transport from '../components/Transport.vue'
import popup from '../components/ui/popup.vue'
import loader from '../components/ui/loader.vue'

export default{
	components: {mainSlider, Services, Steps, Park, About, Cost, Transport, popup, loader, mobileMain},
	data(){
		return{
			info1: false,
			info2: false,
			info3: false,
			callback: false,
			load: false,
			successForm: false,
			errorForm: false,
			registrated: false
		}
	},
	methods: {
		bookCall(){
			this.load = true
			this.callback = false
			this.successForm = true
		}
	}
}
</script>