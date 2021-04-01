<template>
	<header>
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
					<a href="mailto:logisticsitc@mail.ru" class="white-link">logisticsitc@mail.ru</a>
				</div>
				<button class="call-btn hidden-xs hidden-sm">
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
						<a href="mailto:logisticsitc@mail.ru" class="white-link">info@itc-log.com</a>
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
	export default{
		data(){
			return{
				mobileMenu: false,
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
		}
	}
</script>	