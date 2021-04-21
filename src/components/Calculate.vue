<template>
	<div class="calculate">
		<div class="container">
			<div class="calculate-box">
				<div class="info" @click="openInfo($emit)"></div>
				<h3>Узнать стоимость перевозки</h3>
				<div class="row">
					<div class="col-lg-9">
						<div class="choose-direction">
							<input type="text" placeholder="Откуда" v-model="cityFrom">
							<img src="../assets/img/steparr.svg" class="steparr hidden-xs hidden-sm">
							<input type="text" placeholder="Куда" v-model="cityTo">
						</div>
					</div>
					<div class="col-lg-3 text-right">
						<button class="dark-btn" @click="getCities" v-scroll-to="'#cost'">Рассчитать</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				cityFrom: '',
				cityTo: ''
			}	
		},
		methods: {
			openInfo(){
				this.$emit("openInfo")
			},
			getCities(){

				let cities = {
					city1: this.cityFrom,
					city2: this.cityTo
				}

				console.log(cities)
				this.$store.dispatch("serv/getDirection", cities)

			}
		}
	}
</script>

<style>
	.choose-direction input{
		margin-bottom: 0;
		position: relative;
	}
	
	ymaps{
		top: 100% !important;
		background-color: #000;
		border: none!important;
		color: #fff;
		margin-top: 0!important;
		margin-bottom: 0!important;
		font-size: 14px;
		line-height: 35px;
	}
	ymaps:hover{
		background-color: #F45A09;
		color: #fff;
	}
	ymaps[class*="search__suggest"]{
		background-color: transparent;
		border-radius: 0px!important;
	}
	
	.ymaps-2-1-78-suggest-item-0{
		border-radius: 10px 10px 0 0!important;
		padding:5px 20px;
	}
	.ymaps-2-1-78-suggest-item-1{
		padding:5px 20px;
	}
	.ymaps-2-1-78-suggest-item-2{
		padding:5px 20px;
	}
	.ymaps-2-1-78-suggest-item-3{
		padding:5px 20px;
	}

	.ymaps-2-1-78-suggest-item-4{
		border-radius:0 0 10px 10px!important;
		padding:5px 20px;
	}
</style>