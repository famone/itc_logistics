<template>
	<div class="calculate">
		<div class="container">
			<div class="calculate-box">
				<div class="info" @click="openInfo($emit)"></div>
				<h3>Узнать стоимость перевозки</h3>
				<div class="row">
					<div class="col-lg-9">
						<div class="choose-direction">
							<select name="" id="">
								<option value="as">Откуда</option>
							</select>
							<img src="../assets/img/steparr.svg" class="steparr hidden-xs hidden-sm">
							<select name="" id="">
								<option value="as">Откуда</option>
							</select>
						</div>
					</div>
					<div class="col-lg-3 text-right">
						<button class="dark-btn">Рассчитать</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods: {
			openInfo(){
				this.$emit("openInfo")
			}
		}
	}
</script>