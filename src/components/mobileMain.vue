<template>
	<section id="mobile_main" class="hidden-lg hidden-md">
		<div class="container text-center">
			<div class="col-lg-12">
				<h1>Все грани <br><span class="orange">логистики</span></h1>
				<div class="devider"></div>
				<p class="subtitle">Мы будем рады работать с Вами,  а вы удивитесь <br> скоростью и качеством нашей работы.</p>
				<button class="orange-btn" @click="openCall($emit)">Узнать больше</button>
				<Calculate @openInfo="openInfo($emit)" />
			</div>
		</div>
	</section>
</template>

<script>
import Calculate from '../components/Calculate.vue'

	export default{
		components: {Calculate},
		methods: {
			openInfo(){
				this.$emit("openInfo")
			},
			openCall(){
				this.$emit("openCall")
			}
		}
	}
</script>

<style scoped>
#mobile_main{
	padding: 120px 0 63px 0;
	background-image: url(../assets/img/slide1.jpg);
	background-position: center top;
	background-repeat: no-repeat;
	background-size: cover;
}
h1{
	font-size: 26px;
	font-weight: 800;
	margin-bottom: 22px;
	margin-top: 0;
	color: #fff;
	line-height: 110%;
}
.devider{
	width: 220px;
	margin: 0 auto;
	height: 2px;
	background-color: #fff;
	margin-bottom: 34px;
}
.subtitle{
	font-size: 10px;
}

</style>