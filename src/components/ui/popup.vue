<template>
	<div class="popup" @click="closePop($emit)">
		<div class="popup-box" @click.stop>
			<div class="cross" @click="closePop($emit)"></div>
			<div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods: {
			closePop(){
				this.$emit("closePop")
			}
		}
	}
</script>

<style>
.popup{
	position: fixed;
	z-index: 200;
	background-color: rgba(0, 0, 0, 0.6);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.popup-box{
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 695px;
	height: 340px;
	background-color: #000;
}
.cross{
	height: 24px;
	width: 24px;
	background-image: url(../../assets/img/cross.svg);
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	position: absolute;
	top: 33px;
	right: 33px;
	cursor: pointer;
}
.popup input{
	margin-bottom: 20px;
	border: 1px #fff solid;
}
.popup .orange-btn:hover{
	color: #000;
	background-color: #fff;
}
</style>