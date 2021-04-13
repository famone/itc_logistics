<template>
	<section id="p404">
		<div class="container text-center" style="display: flex;justify-content: center;align-items: center;height: 100%;">
			<div>
				<h1>404</h1>
				<h2 class="orange">Ой. Кажется, ты заблудился</h2>
				<p class="black-txt">Страница не найдена</p>
			<router-link tag="button" to="/" class="orange-btn">Вернуться на главную</router-link>
			</div>
		</div>
	</section>
</template>


<style scoped>
	#p404{
		height: 100vh;
		background-color: #fff;
		background-image: url('../assets/img/mnk.svg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 80%;
	}
	#p404 h1{
		color: #000;
		font-size: 200px;
		line-height: 150px;
		margin-bottom: 25px;;
	}
	#p404 h2 {
		margin-bottom:10px;
	}
	#p404 .black-txt{
		font-size: 24px;
		margin-bottom: 60px;
	}
</style>