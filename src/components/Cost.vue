<template>
	<section id="cost">
		<div class="container">
			<div class="col-lg-12">
				<h2>Расчёт стоимости</h2>
			</div>
			<div class="col-lg-12">
				<div class="calculate-box">
					<div class="info" @click="openInfo($emit)"></div>
					<div class="row">
						<!--  -->
						<div class="col-lg-8">
							<h3>Общая информация</h3>
							<div class="row">
								<div class="col-lg-6">
									<select name="" id="" v-model="form.from">
										<option value="">Откуда</option>
									</select>
								</div>
								<div class="col-lg-6">
									<select name="" id="" v-model="form.to">
										<option value="">Куда</option>
									</select>
								</div>
								<div class="col-lg-6">
									<div class="ch-box" :class="{acChb : form.fromOwner}" 
									@click="form.fromOwner = !form.fromOwner">
										<div class="ch-box-window"></div>
										<span>Забрать от отправителя</span>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="ch-box" :class="{acChb : form.toGetter}"
									@click="form.toGetter = !form.toGetter"> 
										<div class="ch-box-window"></div>
										<span>Доставить до получателя</span>
									</div>
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Общий вес, кг" v-model="form.weight">
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Общий объём, м3" v-model="form.volume">
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Стоимость груза" class="ma-25" v-model="form.cost">
								</div>
								<div class="col-lg-6">
									<input type="text" placeholder="Тип груза" class="ma-25" v-model="form.type">
								</div>
								<div class="col-lg-12">
									<div class="ch-box" :class="{acChb : form.insurance}" 
									@click="form.insurance = !form.insurance">
										<div class="ch-box-window"></div>
										<span>Страхование груза</span>
									</div>
								</div>
							</div>
						</div>
						<!--  -->
						<div class="col-lg-4">
							<h3>Общая информация</h3>
							<input type="text" placeholder="Имя" v-model="form.name">
							<input type="text" placeholder="Телефон" v-model="form.tel">
							<input type="text" placeholder="E-mail" v-model="form.email">	
						</div>
						<div class="col-lg-6">
							<button class="dark-btn">Рассчитать</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
	export default{
		methods: {
			openInfo(){
				this.$emit("openInfo")
			}
		},
		data(){
			return{
				form: {
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
	}
</script>