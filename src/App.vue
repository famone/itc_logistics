<template>
    <div id="app">
      
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
  	}
  }
</script>








