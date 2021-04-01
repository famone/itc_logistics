<template>
    <div id="app">

      <div class="preloader" :class="{hiddenPreloader : !preloader}">
        <img src="./assets/img/logo.svg" class="wow fadeIn">
      </div>
      
      <Header />
  
      <router-view></router-view>
      
      <Footer />


    </div>
</template>

<script>
import './assets/css/style.css'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import {mapGetters} from 'vuex'
  export default{
  	data(){
  		return{
        preloader: true,
  			results: []
  		}
  	},
  	components: {Header, Footer},
  	computed: {
  		...mapGetters({
  			cities: "serv/getCities"
  		})
  	},
  	methods: {
  		findGtown(){
  			// let isue = this.cities.find(item =>{
  			// 	return item.city.includes('Пуш')
  			// })

  			// console.log(isue)
  			this.cities.forEach(item =>{
  				if(item.city.includes('Пуш')){
  					this.results.push(item)
  				}
  			})
  			console.log(this.results)
  			
  		}
  	},
  	created(){
  		this.$store.dispatch("serv/loadCity")
  	},
    mounted(){
      setTimeout(()=>{
        this.preloader = false;
      }, 2500);
    }
  }
</script>

<style>
.preloader{
  position: fixed;
  z-index: 300;
  background-color: rgba(0,0,0,.2);
  backdrop-filter: blur(70px);
  -webkit-backdrop-filter: blur(70px);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 1;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hiddenPreloader{
  opacity: 0;
  z-index: -5;
}
</style>






